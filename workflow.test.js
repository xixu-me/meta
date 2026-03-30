const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const childProcess = require("node:child_process");

const repoRoot = "E:/github/meta";
const workflowPath = path.join(repoRoot, ".github", "workflows", "run.yml");
const runScriptPath = path.join(repoRoot, "META.run.js");

function runBun(args) {
  return childProcess.spawnSync("bun", args, {
    cwd: repoRoot,
    encoding: "utf8",
  });
}

function ensureDependenciesInstalled() {
  const result = runBun(["install", "--frozen-lockfile"]);
  assert.equal(result.status, 0, result.stderr || result.stdout);
}

test("workflow runs CI before run and publish jobs", () => {
  const workflow = fs.readFileSync(workflowPath, "utf8");

  assert.match(workflow, /^  ci:\s*$/m, "workflow should define a ci job");
  assert.match(
    workflow,
    /uses:\s+oven-sh\/setup-bun@v2/,
    "workflow should install Bun via the official setup action"
  );
  assert.match(
    workflow,
    /^  run:\s*$(?:\r?\n)(?:\s+.*\r?\n)*?\s+needs:\s+ci\s*$/m,
    "run job should depend on ci"
  );
  assert.match(
    workflow,
    /^  purge-dns-cache:\s*$(?:\r?\n)(?:\s+.*\r?\n)*?\s+needs:\s+run\s*$/m,
    "purge-dns-cache should depend on run"
  );
  assert.match(
    workflow,
    /^  generate-config:\s*$(?:\r?\n)(?:\s+.*\r?\n)*?\s+needs:\s+run\s*$/m,
    "generate-config should depend on run"
  );
});

test("workflow installs dependencies and runs tests in ci job", () => {
  const workflow = fs.readFileSync(workflowPath, "utf8");

  assert.match(
    workflow,
    /bun install --frozen-lockfile/,
    "ci job should install dependencies with Bun"
  );
  assert.match(workflow, /bun test/, "ci job should run the test suite with Bun");
  assert.match(workflow, /bun run run/, "run job should use Bun scripts");
  assert.match(
    workflow,
    /bun run generate/,
    "generate-config job should use Bun scripts"
  );
  assert.doesNotMatch(
    workflow,
    /sed -i .*validateOriginalConfig/,
    "workflow should not mutate META.js to bypass validation"
  );
});

test("META.run.js executes the generator against sample inputs", () => {
  const result = runBun([runScriptPath]);

  assert.equal(result.status, 0, result.stderr || result.stdout);
  assert.match(
    result.stdout,
    /validated/i,
    "run script should report successful validation"
  );
});

test("META.generate.js creates YAML output without mutating source", () => {
  const outputPath = path.join(repoRoot, "META.yaml");
  fs.rmSync(outputPath, { force: true });
  ensureDependenciesInstalled();

  const result = runBun(["META.generate.js"]);

  assert.equal(result.status, 0, result.stderr || result.stdout);
  assert.ok(fs.existsSync(outputPath), "generate script should create META.yaml");
  assert.match(
    fs.readFileSync(outputPath, "utf8"),
    /mixed-port:\s*7890/,
    "generated YAML should include core config values"
  );

  fs.rmSync(outputPath, { force: true });
});
