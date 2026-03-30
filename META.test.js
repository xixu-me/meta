const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");

const repoRoot = __dirname;

function loadMetaModule() {
  const content = fs.readFileSync(path.join(repoRoot, "META.js"), "utf8");
  const wrapped = `${content}

module.exports = {
  locations,
  generalConfig,
  tun,
  main,
  validateOriginalConfig,
};`;

  const context = {
    module: { exports: {} },
    console: {
      log() {},
      warn() {},
      error() {},
    },
  };

  vm.runInNewContext(wrapped, context, { filename: "META.js" });
  return context.module.exports;
}

function mihomoRegex(source) {
  return new RegExp(source.replace(/^\(\?i\)/, ""), "i");
}

test("validateOriginalConfig accepts mihomo dns outbound proxies", () => {
  const { validateOriginalConfig } = loadMetaModule();

  assert.doesNotThrow(() =>
    validateOriginalConfig({
      proxies: [{ name: "dns-out", type: "dns" }],
    })
  );
});

test("generated config does not force deprecated global fingerprinting", () => {
  const { main } = loadMetaModule();

  const config = main({
    proxies: [
      {
        name: "sample",
        type: "socks5",
        server: "127.0.0.1",
        port: 1080,
      },
    ],
  });

  assert.equal(config["global-client-fingerprint"], undefined);
});

test("main can skip source validation for publish-time generation", () => {
  const { main } = loadMetaModule();

  const config = main({}, { skipValidation: true });

  assert.equal(config.error, undefined);
  assert.ok(Array.isArray(config.rules));
  assert.ok(Array.isArray(config["proxy-groups"]));
});

test("generated tun config fully replaces the source tun settings", () => {
  const { main } = loadMetaModule();

  const config = main({
    proxies: [
      {
        name: "sample",
        type: "socks5",
        server: "127.0.0.1",
        port: 1080,
      },
    ],
    tun: {
      enable: false,
      "auto-route": false,
      "auto-redirect": true,
      mtu: 9000,
    },
  });

  assert.deepEqual(JSON.parse(JSON.stringify(config.tun)), {
    enable: true,
    stack: "mixed",
    "auto-route": true,
    "auto-detect-interface": true,
    "strict-route": true,
    "dns-hijack": ["any:53", "tcp://any:53"],
  });
});

test("location filters avoid matching unrelated country names", () => {
  const { locations } = loadMetaModule();

  const india = locations.find((location) => location.name === "India 🇮🇳");
  const canada = locations.find((location) => location.name === "Canada 🇨🇦");

  assert.ok(india, "India location should exist");
  assert.ok(canada, "Canada location should exist");

  assert.equal(mihomoRegex(india.filter).test("Argentina 01"), false);
  assert.equal(mihomoRegex(india.filter).test("Finland-IEPL"), false);
  assert.equal(mihomoRegex(canada.filter).test("Singapore-Anycast"), false);
});
