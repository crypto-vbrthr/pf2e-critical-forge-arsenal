export const EXPANDED_CARD_ID_PREFIX = "pf2e-critical-forge-arsenal.expanded";

export const EXPANDED_PACK_IDS = Object.freeze({
  slashing: "pf2e-critical-forge-arsenal.expanded.weapon-critical.slashing",
  piercing: "pf2e-critical-forge-arsenal.expanded.weapon-critical.piercing",
  bludgeoning: "pf2e-critical-forge-arsenal.expanded.weapon-critical.bludgeoning",
  slashingFumble: "pf2e-critical-forge-arsenal.expanded.weapon-fumble.slashing",
  piercingFumble: "pf2e-critical-forge-arsenal.expanded.weapon-fumble.piercing",
  bludgeoningFumble: "pf2e-critical-forge-arsenal.expanded.weapon-fumble.bludgeoning"
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

const PACK_IDS_BY_CATEGORY = Object.freeze({
  criticalHit: Object.freeze({
    slashing: EXPANDED_PACK_IDS.slashing,
    piercing: EXPANDED_PACK_IDS.piercing,
    bludgeoning: EXPANDED_PACK_IDS.bludgeoning
  }),
  criticalFumble: Object.freeze({
    slashing: EXPANDED_PACK_IDS.slashingFumble,
    piercing: EXPANDED_PACK_IDS.piercingFumble,
    bludgeoning: EXPANDED_PACK_IDS.bludgeoningFumble
  })
});

function freezeFilters(damageType, filters = {}) {
  const result = {};

  for (const key of FILTER_KEYS) {
    const fallback = key === "damageTypes" ? [damageType] : [];
    result[key] = Object.freeze([...(filters[key] ?? fallback)]);
  }

  return Object.freeze(result);
}

function freezeEffect(effect, localizationKey, fallbackTitle, defaultTarget) {
  if (!effect) return null;

  return Object.freeze({
    target: effect.target ?? defaultTarget,
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

function defineWeaponCard({
  id,
  localizationKey,
  damageType,
  category,
  tone,
  impact,
  fallbackTitle,
  fallbackDescription,
  weight = 1,
  tags = [],
  filters = {},
  effect
}) {
  const packId = PACK_IDS_BY_CATEGORY[category]?.[damageType];
  if (!packId) {
    throw new Error(`Unsupported Expanded weapon card: ${category}/${damageType}`);
  }

  const isFumble = category === "criticalFumble";
  return Object.freeze({
    schemaVersion: 1,
    id: `${EXPANDED_CARD_ID_PREFIX}.${id}`,
    packId,
    category,
    tone,
    impact,
    titleKey: `PF2ECFA.Cards.${localizationKey}.Title`,
    descriptionKey: `PF2ECFA.Cards.${localizationKey}.Description`,
    fallbackTitle,
    fallbackDescription,
    weight,
    tags: Object.freeze([
      "weapon",
      isFumble ? "critical-fumble" : "critical-hit",
      damageType,
      ...tags
    ]),
    filters: freezeFilters(damageType, filters),
    effect: freezeEffect(effect, localizationKey, fallbackTitle, isFumble ? "source" : "target"),
    metadata: Object.freeze({
      collection: isFumble
        ? "expanded-weapon-fumbles-1"
        : "expanded-weapon-criticals-1"
    })
  });
}

/** Define one immutable Critical Forge Expanded weapon-critical card. */
export function defineWeaponCriticalCard(options) {
  return defineWeaponCard({ ...options, category: "criticalHit" });
}

/** Define one immutable Critical Forge Expanded weapon-fumble card. */
export function defineWeaponFumbleCard(options) {
  return defineWeaponCard({ ...options, category: "criticalFumble" });
}
