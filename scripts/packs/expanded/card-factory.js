export const EXPANDED_CARD_ID_PREFIX = "pf2e-critical-forge-arsenal.expanded";

export const EXPANDED_PACK_IDS = Object.freeze({
  slashing: "pf2e-critical-forge-arsenal.expanded.weapon-critical.slashing",
  piercing: "pf2e-critical-forge-arsenal.expanded.weapon-critical.piercing",
  bludgeoning: "pf2e-critical-forge-arsenal.expanded.weapon-critical.bludgeoning"
});

export const DURATIONS = Object.freeze({
  ONE_ROUND: Object.freeze({ value: 1, unit: "rounds", expiry: "turn-end" }),
  UNLIMITED: Object.freeze({ value: -1, unit: "unlimited", expiry: null })
});

const FILTER_KEYS = Object.freeze([
  "damageTypes",
  "weaponGroups",
  "attackTraits",
  "saveTypes",
  "spellTraditions",
  "spellTraits",
  "sourceTraits",
  "targetTraits",
  "excludedSourceTraits",
  "excludedTargetTraits"
]);

function freezeFilters(damageType, filters = {}) {
  const result = {};

  for (const key of FILTER_KEYS) {
    const fallback = key === "damageTypes" ? [damageType] : [];
    result[key] = Object.freeze([...(filters[key] ?? fallback)]);
  }

  return Object.freeze(result);
}

function freezeEffect(effect, localizationKey, fallbackTitle) {
  if (!effect) return null;

  return Object.freeze({
    target: effect.target ?? "target",
    nameKey: `PF2ECFA.Effects.${localizationKey}.Name`,
    fallbackName: effect.fallbackName ?? fallbackTitle,
    definition: Object.freeze({
      schemaVersion: 1,
      duration: effect.duration,
      components: Object.freeze(
        (effect.components ?? []).map((component) => Object.freeze({ ...component }))
      )
    })
  });
}

/** Define one immutable Critical Forge Expanded weapon-critical card. */
export function defineWeaponCriticalCard({
  id,
  localizationKey,
  damageType,
  tone,
  impact,
  fallbackTitle,
  fallbackDescription,
  weight = 1,
  tags = [],
  filters = {},
  effect
}) {
  const packId = EXPANDED_PACK_IDS[damageType];
  if (!packId) throw new Error(`Unsupported Expanded weapon-critical damage type: ${damageType}`);

  return Object.freeze({
    schemaVersion: 1,
    // Keep the original 0.1.0 card ids stable for history and exported references.
    id: `${EXPANDED_CARD_ID_PREFIX}.${id}`,
    packId,
    category: "criticalHit",
    tone,
    impact,
    titleKey: `PF2ECFA.Cards.${localizationKey}.Title`,
    descriptionKey: `PF2ECFA.Cards.${localizationKey}.Description`,
    fallbackTitle,
    fallbackDescription,
    weight,
    tags: Object.freeze(["weapon", "critical-hit", damageType, ...tags]),
    filters: freezeFilters(damageType, filters),
    effect: freezeEffect(effect, localizationKey, fallbackTitle),
    metadata: Object.freeze({
      collection: "expanded-weapon-criticals-1"
    })
  });
}
