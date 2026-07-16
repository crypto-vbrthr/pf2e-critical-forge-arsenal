import {
  defineWeaponCriticalCard,
  DURATIONS
} from "../card-factory.js";

const { ONE_ROUND } = DURATIONS;

export const PIERCING_CARDS = Object.freeze([
  defineWeaponCriticalCard({
    id: "piercing.needle-shock",
    localizationKey: "NeedleShock",
    damageType: "piercing",
    tone: "serious",
    impact: "light",
    fallbackTitle: "Needle Shock",
    fallbackDescription:
      "The precise hit jars the target's grip and imposes a -1 circumstance penalty to attack rolls for 1 round.",
    weight: 2,
    tags: ["debuff"],
    effect: {
      duration: ONE_ROUND,
      components: [
        {
          type: "modifier",
          selector: "attack-roll",
          value: -1,
          modifierType: "circumstance",
          predicate: []
        }
      ]
    }
  }),
  defineWeaponCriticalCard({
    id: "piercing.pierced-step",
    localizationKey: "PiercedStep",
    damageType: "piercing",
    tone: "neutral",
    impact: "light",
    fallbackTitle: "Pierced Step",
    fallbackDescription:
      "The point catches limb, clothing, or footing and reduces the target's land Speed by 5 feet for 1 round.",
    weight: 2,
    tags: ["movement"],
    filters: {
      excludedTargetTraits: ["incorporeal", "ooze"]
    },
    effect: {
      duration: ONE_ROUND,
      components: [
        {
          type: "movement",
          movementType: "land",
          value: -5,
          modifierType: "circumstance"
        }
      ]
    }
  }),
  defineWeaponCriticalCard({
    id: "piercing.nerve-flare",
    localizationKey: "NerveFlare",
    damageType: "piercing",
    tone: "serious",
    impact: "moderate",
    fallbackTitle: "Nerve Flare",
    fallbackDescription:
      "A flash of pain disrupts thought and leaves the target stupefied 1 for 1 round.",
    weight: 2,
    tags: ["control", "mental-disruption"],
    filters: {
      excludedTargetTraits: [
        "construct",
        "elemental",
        "incorporeal",
        "mindless",
        "ooze",
        "undead"
      ]
    },
    effect: {
      duration: ONE_ROUND,
      components: [{ type: "condition", slug: "stupefied", value: 1 }]
    }
  }),
  defineWeaponCriticalCard({
    id: "piercing.thread-the-gap",
    localizationKey: "ThreadTheGap",
    damageType: "piercing",
    tone: "dramatic",
    impact: "moderate",
    fallbackTitle: "Thread the Gap",
    fallbackDescription:
      "The strike finds a flaw that remains exposed, giving the target weakness 2 to piercing damage for 1 round.",
    weight: 1,
    tags: ["vulnerability"],
    effect: {
      duration: ONE_ROUND,
      components: [
        {
          type: "weakness",
          weaknessType: "piercing",
          value: 2
        }
      ]
    }
  }),
  defineWeaponCriticalCard({
    id: "piercing.transfixed",
    localizationKey: "Transfixed",
    damageType: "piercing",
    tone: "dramatic",
    impact: "strong",
    fallbackTitle: "Transfixed",
    fallbackDescription:
      "The target is caught in place, becoming off-guard and taking a -10-foot circumstance penalty to land Speed for 1 round.",
    weight: 1,
    tags: ["control", "movement"],
    filters: {
      excludedTargetTraits: ["incorporeal", "ooze"]
    },
    effect: {
      duration: ONE_ROUND,
      components: [
        { type: "condition", slug: "off-guard" },
        {
          type: "movement",
          movementType: "land",
          value: -10,
          modifierType: "circumstance"
        }
      ]
    }
  })
]);
