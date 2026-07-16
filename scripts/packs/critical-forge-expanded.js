const PACK_ID = "pf2e-critical-forge-arsenal.expanded";

const EMPTY_FILTERS = Object.freeze({
  damageTypes: Object.freeze([]),
  weaponGroups: Object.freeze([]),
  attackTraits: Object.freeze([]),
  saveTypes: Object.freeze([]),
  spellTraditions: Object.freeze([]),
  spellTraits: Object.freeze([]),
  sourceTraits: Object.freeze([]),
  targetTraits: Object.freeze([]),
  excludedSourceTraits: Object.freeze([]),
  excludedTargetTraits: Object.freeze([])
});

/**
 * General-purpose expansion pack for PF2E Critical Forge.
 *
 * It starts with one deliberately simple card so registration, localization,
 * editor visibility, filtering, and effect application can be tested end to end.
 */
export const CRITICAL_FORGE_EXPANDED_PACK = Object.freeze({
  schemaVersion: 1,
  id: PACK_ID,
  titleKey: "PF2ECFA.Packs.Expanded.Title",
  descriptionKey: "PF2ECFA.Packs.Expanded.Description",
  fallbackTitle: "Critical Forge Expanded",
  fallbackDescription:
    "A general expansion with additional cards for critical hits, fumbles, spell attacks, and saving throws.",
  version: "0.0.4",
  priority: 10,
  enabled: false,
  metadata: {
    theme: "general-expansion",
    development: true
  },
  cards: Object.freeze([
    Object.freeze({
      schemaVersion: 1,
      id: `${PACK_ID}.opening-in-the-guard`,
      packId: PACK_ID,
      category: "criticalHit",
      tone: "neutral",
      impact: "light",
      titleKey: "PF2ECFA.Cards.OpeningInTheGuard.Title",
      descriptionKey: "PF2ECFA.Cards.OpeningInTheGuard.Description",
      fallbackTitle: "Opening in the Guard",
      fallbackDescription:
        "The critical slash tears open the target's guard, leaving it off-guard for 1 round.",
      weight: 1,
      tags: Object.freeze(["physical", "slashing", "control", "development-test"]),
      filters: Object.freeze({
        ...EMPTY_FILTERS,
        damageTypes: Object.freeze(["slashing"])
      }),
      effect: Object.freeze({
        target: "target",
        nameKey: "PF2ECFA.Effects.OpeningInTheGuard.Name",
        fallbackName: "Opening in the Guard",
        definition: Object.freeze({
          schemaVersion: 1,
          duration: Object.freeze({
            value: 1,
            unit: "rounds",
            expiry: "turn-end"
          }),
          components: Object.freeze([
            Object.freeze({
              type: "condition",
              slug: "off-guard"
            })
          ])
        })
      }),
      metadata: Object.freeze({
        development: true
      })
    })
  ])
});
