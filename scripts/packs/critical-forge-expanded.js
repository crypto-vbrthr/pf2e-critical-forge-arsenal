import { EXPANDED_PACK_IDS } from "./expanded/card-factory.js";
import { SLASHING_CARDS } from "./expanded/cards/slashing-cards.js";
import { PIERCING_CARDS } from "./expanded/cards/piercing-cards.js";
import { BLUDGEONING_CARDS } from "./expanded/cards/bludgeoning-cards.js";
import { SLASHING_FUMBLE_CARDS } from "./expanded/cards/slashing-fumble-cards.js";
import { PIERCING_FUMBLE_CARDS } from "./expanded/cards/piercing-fumble-cards.js";
import { BLUDGEONING_FUMBLE_CARDS } from "./expanded/cards/bludgeoning-fumble-cards.js";

export const EXPANDED_PACK_CONFIGS = Object.freeze([
  Object.freeze({
    settingKey: "enableExpandedSlashingCriticalHits",
    id: EXPANDED_PACK_IDS.slashing,
    titleKey: "PF2ECFA.Packs.ExpandedSlashingCriticalHits.Title",
    descriptionKey: "PF2ECFA.Packs.ExpandedSlashingCriticalHits.Description",
    fallbackTitle: "Critical Forge Expanded: Slashing Critical Hits",
    fallbackDescription: "Additional critical-hit cards for attacks that deal slashing damage.",
    cards: SLASHING_CARDS,
    metadata: Object.freeze({
      theme: "general-expansion",
      family: "critical-forge-expanded",
      category: "weapon-critical-hit",
      damageType: "slashing"
    })
  }),
  Object.freeze({
    settingKey: "enableExpandedPiercingCriticalHits",
    id: EXPANDED_PACK_IDS.piercing,
    titleKey: "PF2ECFA.Packs.ExpandedPiercingCriticalHits.Title",
    descriptionKey: "PF2ECFA.Packs.ExpandedPiercingCriticalHits.Description",
    fallbackTitle: "Critical Forge Expanded: Piercing Critical Hits",
    fallbackDescription: "Additional critical-hit cards for attacks that deal piercing damage.",
    cards: PIERCING_CARDS,
    metadata: Object.freeze({
      theme: "general-expansion",
      family: "critical-forge-expanded",
      category: "weapon-critical-hit",
      damageType: "piercing"
    })
  }),
  Object.freeze({
    settingKey: "enableExpandedBludgeoningCriticalHits",
    id: EXPANDED_PACK_IDS.bludgeoning,
    titleKey: "PF2ECFA.Packs.ExpandedBludgeoningCriticalHits.Title",
    descriptionKey: "PF2ECFA.Packs.ExpandedBludgeoningCriticalHits.Description",
    fallbackTitle: "Critical Forge Expanded: Bludgeoning Critical Hits",
    fallbackDescription: "Additional critical-hit cards for attacks that deal bludgeoning damage.",
    cards: BLUDGEONING_CARDS,
    metadata: Object.freeze({
      theme: "general-expansion",
      family: "critical-forge-expanded",
      category: "weapon-critical-hit",
      damageType: "bludgeoning"
    })
  }),
  Object.freeze({
    settingKey: "enableExpandedSlashingCriticalFumbles",
    id: EXPANDED_PACK_IDS.slashingFumble,
    titleKey: "PF2ECFA.Packs.ExpandedSlashingCriticalFumbles.Title",
    descriptionKey: "PF2ECFA.Packs.ExpandedSlashingCriticalFumbles.Description",
    fallbackTitle: "Critical Forge Expanded: Slashing Critical Fumbles",
    fallbackDescription: "Additional critical-fumble cards for attacks that deal slashing damage.",
    cards: SLASHING_FUMBLE_CARDS,
    metadata: Object.freeze({
      theme: "general-expansion",
      family: "critical-forge-expanded",
      category: "weapon-critical-fumble",
      damageType: "slashing"
    })
  }),
  Object.freeze({
    settingKey: "enableExpandedPiercingCriticalFumbles",
    id: EXPANDED_PACK_IDS.piercingFumble,
    titleKey: "PF2ECFA.Packs.ExpandedPiercingCriticalFumbles.Title",
    descriptionKey: "PF2ECFA.Packs.ExpandedPiercingCriticalFumbles.Description",
    fallbackTitle: "Critical Forge Expanded: Piercing Critical Fumbles",
    fallbackDescription: "Additional critical-fumble cards for attacks that deal piercing damage.",
    cards: PIERCING_FUMBLE_CARDS,
    metadata: Object.freeze({
      theme: "general-expansion",
      family: "critical-forge-expanded",
      category: "weapon-critical-fumble",
      damageType: "piercing"
    })
  }),
  Object.freeze({
    settingKey: "enableExpandedBludgeoningCriticalFumbles",
    id: EXPANDED_PACK_IDS.bludgeoningFumble,
    titleKey: "PF2ECFA.Packs.ExpandedBludgeoningCriticalFumbles.Title",
    descriptionKey: "PF2ECFA.Packs.ExpandedBludgeoningCriticalFumbles.Description",
    fallbackTitle: "Critical Forge Expanded: Bludgeoning Critical Fumbles",
    fallbackDescription: "Additional critical-fumble cards for attacks that deal bludgeoning damage.",
    cards: BLUDGEONING_FUMBLE_CARDS,
    metadata: Object.freeze({
      theme: "general-expansion",
      family: "critical-forge-expanded",
      category: "weapon-critical-fumble",
      damageType: "bludgeoning"
    })
  })
]);

/**
 * Build current pack definitions without coupling the data module to Foundry settings.
 * @param {(settingKey: string) => boolean} isEnabled
 */
export function buildCriticalForgeExpandedPacks(isEnabled = () => false) {
  return EXPANDED_PACK_CONFIGS.map((config) => Object.freeze({
    schemaVersion: 1,
    id: config.id,
    titleKey: config.titleKey,
    descriptionKey: config.descriptionKey,
    fallbackTitle: config.fallbackTitle,
    fallbackDescription: config.fallbackDescription,
    version: "0.4.1",
    priority: 10,
    enabled: Boolean(isEnabled(config.settingKey)),
    metadata: config.metadata,
    cards: config.cards
  }));
}
