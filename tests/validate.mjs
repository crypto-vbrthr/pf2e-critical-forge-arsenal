import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { fileURLToPath, pathToFileURL } from "node:url";
import path from "node:path";

const testDir = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(testDir, "..");

async function readJson(relativePath) {
  const contents = await readFile(path.join(root, relativePath), "utf8");
  return JSON.parse(contents);
}

const manifest = await readJson("module.json");
const de = await readJson("lang/de.json");
const en = await readJson("lang/en.json");
const { CRITICAL_FORGE_EXPANDED_PACK: pack } = await import(
  pathToFileURL(path.join(root, "scripts/packs/critical-forge-expanded.js"))
);

assert.equal(manifest.id, "pf2e-critical-forge-arsenal");
assert.equal(manifest.version, "0.0.4");
assert.equal(manifest.compatibility.minimum, "14");
assert.ok(manifest.esmodules.includes("scripts/main.js"));

const dependency = manifest.relationships?.requires?.find(
  (entry) => entry.id === "pf2e-critical-forge"
);
assert.ok(dependency, "Critical Forge must be a required dependency.");
assert.equal(dependency.type, "module");
assert.equal(dependency.compatibility?.minimum, "0.8.0-rc.2");
assert.ok(
  manifest.relationships?.systems?.some((entry) => entry.id === "pf2e"),
  "PF2e must be declared as the required system."
);

assert.equal(pack.schemaVersion, 1);
assert.equal(pack.id, "pf2e-critical-forge-arsenal.expanded");
assert.equal(pack.enabled, false);
assert.equal(pack.cards.length, 1);

const card = pack.cards[0];
assert.equal(card.schemaVersion, 1);
assert.equal(card.packId, pack.id);
assert.equal(card.category, "criticalHit");
assert.equal(card.tone, "neutral");
assert.equal(card.impact, "light");
assert.deepEqual(card.filters.damageTypes, ["slashing"]);
assert.equal(card.effect.target, "target");
assert.equal(card.effect.definition.components[0].slug, "off-guard");

for (const dictionary of [de, en]) {
  assert.ok(dictionary.PF2ECFA?.Packs?.Expanded?.Title);
  assert.ok(dictionary.PF2ECFA?.Packs?.Expanded?.Description);
  assert.ok(dictionary.PF2ECFA?.Cards?.OpeningInTheGuard?.Title);
  assert.ok(dictionary.PF2ECFA?.Cards?.OpeningInTheGuard?.Description);
  assert.ok(dictionary.PF2ECFA?.Effects?.OpeningInTheGuard?.Name);
  assert.ok(dictionary.PF2ECFA?.Notifications?.RegistrationFailed);
}

const mainScript = await readFile(path.join(root, "scripts/main.js"), "utf8");
assert.match(mainScript, /pf2eCriticalForgeReady/);
assert.match(mainScript, /registerPacks/);
assert.doesNotMatch(mainScript, /Hooks\.once\("ready"/);

console.log("PF2E Critical Forge: Arsenal 0.0.4 structural validation passed.");
