const fs = require("node:fs");
const vm = require("node:vm");

function loadMetaModule() {
  const content = fs.readFileSync("./META.js", "utf8");
  const wrapped = `${content}

module.exports = {
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

function assert(condition, message) {
  if (!condition) {
    throw new Error(message);
  }
}

function runScenario(name, input, options) {
  const { main } = loadMetaModule();
  const config = main(structuredClone(input), options);

  assert(!config.error, `${name}: ${config.error}`);
  assert(Array.isArray(config.rules), `${name}: rules should be an array`);
  assert(
    Array.isArray(config["proxy-groups"]),
    `${name}: proxy-groups should be an array`
  );
  assert(
    config["rule-providers"] && typeof config["rule-providers"] === "object",
    `${name}: rule-providers should be present`
  );
}

function main() {
  runScenario(
    "proxy-based config",
    {
      proxies: [
        {
          name: "sample",
          type: "socks5",
          server: "127.0.0.1",
          port: 1080,
        },
      ],
    },
    {}
  );

  runScenario(
    "provider-based config",
    {
      "proxy-providers": {
        provider: {
          type: "http",
          url: "https://example.com/provider.yaml",
          path: "./providers/provider.yaml",
        },
      },
    },
    {}
  );

  runScenario("publish generation", {}, { skipValidation: true });

  console.log("Validated META.js against 3 scenarios.");
}

try {
  main();
} catch (error) {
  console.error(error.message);
  process.exitCode = 1;
}
