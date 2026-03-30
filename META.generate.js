const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");
const yaml = require("yaml");

function loadMain() {
  const content = fs.readFileSync(path.join(__dirname, "META.js"), "utf8");
  const wrapped = `${content}

module.exports = { main };`;
  const context = {
    module: { exports: {} },
    console: {
      log() {},
      warn() {},
      error() {},
    },
  };

  vm.runInNewContext(wrapped, context, { filename: "META.js" });
  return context.module.exports.main;
}

function main() {
  const generateConfig = loadMain();
  const config = generateConfig({}, { skipValidation: true });

  if (config.error) {
    throw new Error(config.error);
  }

  fs.writeFileSync(path.join(__dirname, "META.yaml"), yaml.stringify(config));
  console.log("Generated META.yaml");
}

try {
  main();
} catch (error) {
  console.error(error.message);
  process.exitCode = 1;
}
