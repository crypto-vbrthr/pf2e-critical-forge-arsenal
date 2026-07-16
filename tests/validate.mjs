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

function getLocalization(dictionary, dottedKey) {
  return dottedKey.split(".").reduce((value, key) => value?.[key], dictionary);
}

const manifest = await readJson("module.json");
const de = await readJson("lang/de.json");
const en = await readJson("lang/en.json");
const {
  buildCriticalForgeExpandedPacks,
  EXPANDED_PACK_CONFIGS
} = await import(
  pathToFileURL(path.join(root, "scripts/packs/critical-forge-expanded.js"))
);
const { EXPANDED_PACK_IDS } = await import(
  pathToFileURL(path.join(root, "scripts/packs/expanded/card-factory.js"))
);

assert.equal(manifest.id, "pf2e-critical-forge-arsenal");
assert.equal(manifest.version, "0.1.3");
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

assert.equal(EXPANDED_PACK_CONFIGS.length, 3);
const disabledPacks = buildCriticalForgeExpandedPacks(() => false);
const enabledKeys = new Set([
  "enableExpandedSlashingCriticalHits",
  "enableExpandedBludgeoningCriticalHits"
]);
const mixedPacks = buildCriticalForgeExpandedPacks((settingKey) => enabledKeys.has(settingKey));

assert.equal(disabledPacks.length, 3);
assert.ok(disabledPacks.every((pack) => pack.enabled === false));
assert.deepEqual(
  mixedPacks.map((pack) => pack.enabled),
  [true, false, true]
);

const expectedPackIds = new Set(Object.values(EXPANDED_PACK_IDS));
assert.deepEqual(new Set(disabledPacks.map((pack) => pack.id)), expectedPackIds);

const cardIds = new Set();
const damageCounts = new Map();
const impactCounts = new Map();
const toneCounts = new Map();

for (const pack of disabledPacks) {
  assert.equal(pack.schemaVersion, 1);
  assert.equal(pack.version, "0.1.3");
  assert.equal(pack.cards.length, 5);
  assert.equal(pack.enabled, false);
  assert.ok(getLocalization(de, pack.titleKey), pack.titleKey);
  assert.ok(getLocalization(en, pack.titleKey), pack.titleKey);
  assert.ok(getLocalization(de, pack.descriptionKey), pack.descriptionKey);
  assert.ok(getLocalization(en, pack.descriptionKey), pack.descriptionKey);

  for (const card of pack.cards) {
    assert.equal(card.schemaVersion, 1);
    assert.equal(card.packId, pack.id);
    assert.equal(card.category, "criticalHit");
    assert.ok(!cardIds.has(card.id), `Duplicate card id: ${card.id}`);
    cardIds.add(card.id);

    assert.equal(card.filters.damageTypes.length, 1);
    const damageType = card.filters.damageTypes[0];
    assert.ok(["slashing", "piercing", "bludgeoning"].includes(damageType));
    assert.equal(pack.metadata.damageType, damageType);
    damageCounts.set(damageType, (damageCounts.get(damageType) ?? 0) + 1);
    impactCounts.set(card.impact, (impactCounts.get(card.impact) ?? 0) + 1);
    toneCounts.set(card.tone, (toneCounts.get(card.tone) ?? 0) + 1);

    assert.ok(card.effect, `${card.id} must contain an effect.`);
    assert.ok(["source", "target"].includes(card.effect.target));
    assert.equal(card.effect.definition.schemaVersion, 1);
    assert.ok(card.effect.definition.duration);
    assert.ok(card.effect.definition.components.length > 0);

    for (const dictionary of [de, en]) {
      assert.ok(getLocalization(dictionary, card.titleKey), card.titleKey);
      assert.ok(getLocalization(dictionary, card.descriptionKey), card.descriptionKey);
      assert.ok(getLocalization(dictionary, card.effect.nameKey), card.effect.nameKey);
    }
  }
}

assert.equal(cardIds.size, 15);
assert.deepEqual(Object.fromEntries(damageCounts), {
  slashing: 5,
  piercing: 5,
  bludgeoning: 5
});
assert.ok((impactCounts.get("light") ?? 0) > 0);
assert.ok((impactCounts.get("moderate") ?? 0) > 0);
assert.ok((impactCounts.get("strong") ?? 0) > 0);
assert.ok((toneCounts.get("neutral") ?? 0) > 0);
assert.ok((toneCounts.get("serious") ?? 0) > 0);
assert.ok((toneCounts.get("dramatic") ?? 0) > 0);

for (const dictionary of [de, en]) {
  for (const config of EXPANDED_PACK_CONFIGS) {
    const settingSuffix = {
      enableExpandedSlashingCriticalHits: "ExpandedSlashingCriticalHits",
      enableExpandedPiercingCriticalHits: "ExpandedPiercingCriticalHits",
      enableExpandedBludgeoningCriticalHits: "ExpandedBludgeoningCriticalHits"
    }[config.settingKey];
    assert.ok(dictionary.PF2ECFA?.Settings?.[settingSuffix]?.Name);
    assert.ok(dictionary.PF2ECFA?.Settings?.[settingSuffix]?.Hint);
  }
  assert.ok(dictionary.PF2ECFA?.Notifications?.RegistrationFailed);
  assert.ok(dictionary.PF2ECFA?.Notifications?.PackSelectionUpdated);
}

const mainScript = await readFile(path.join(root, "scripts/main.js"), "utf8");
assert.match(mainScript, /Hooks\.once\("init"/);
assert.match(mainScript, /let settingsRegistered = false/);
assert.match(mainScript, /if \(!settingsRegistered\) return \[\]/);
assert.match(mainScript, /settingsRegistered = true/);
assert.match(mainScript, /registerWhenReady\(\)/);
assert.match(mainScript, /pf2eCriticalForgeReady/);
assert.match(mainScript, /registerPacks/);
assert.match(mainScript, /replace: true/);
assert.doesNotMatch(mainScript, /Hooks\.once\("ready"/);

const settingsScript = await readFile(path.join(root, "scripts/settings.js"), "utf8");
assert.match(settingsScript, /game\.settings\.register/);
assert.match(settingsScript, /scope: "world"/);
assert.match(settingsScript, /default: false/);
assert.match(settingsScript, /type: Boolean/);
assert.doesNotMatch(settingsScript, /BooleanField/);

console.log("PF2E Critical Forge: Arsenal 0.1.3 structural validation passed.");
