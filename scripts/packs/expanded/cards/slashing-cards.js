import {
  defineWeaponCriticalCard,
  DURATIONS
} from "../card-factory.js";

const { ONE_ROUND, UNLIMITED } = DURATIONS;

export const SLASHING_CARDS = Object.freeze([
  defineWeaponCriticalCard({
    id: "slashing.opening-in-the-guard",
    localizationKey: "OpeningInTheGuard",
    damageType: "slashing",
    tone: "neutral",
    impact: "light",
    fallbackTitle: "Opening in the Guard",
    fallbackDescription:
      "The critical slash tears open the target's guard, leaving it off-guard for 1 round.",
    weight: 2,
    tags: ["control"],
    effect: {
      duration: ONE_ROUND,
      components: [{ type: "condition", slug: "off-guard" }]
    }
  }),
  defineWeaponCriticalCard({
    id: "slashing.dragging-cut",
    localizationKey: "DraggingCut",
    damageType: "slashing",
    tone: "serious",
    impact: "light",
    fallbackTitle: "Dragging Cut",
    fallbackDescription:
      "The cut catches muscle, hide, or equipment and reduces all Speeds by 5 feet for 1 round.",
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
          movementType: "all",
          value: -5,
          modifierType: "circumstance"
        }
      ]
    }
  }),
  defineWeaponCriticalCard({
    id: "slashing.broken-rhythm",
    localizationKey: "BrokenRhythm",
    damageType: "slashing",
    tone: "serious",
    impact: "moderate",
    fallbackTitle: "Broken Rhythm",
    fallbackDescription:
      "The sweeping wound ruins the target's timing, imposing a -1 circumstance penalty to attack rolls and Reflex saves for 1 round.",
    weight: 2,
    tags: ["debuff"],
    effect: {
      duration: ONE_ROUND,
      components: [
        {
          type: "modifier",
          selector: ["attack-roll", "reflex"],
          value: -1,
          modifierType: "circumstance",
          predicate: []
        }
      ]
    }
  }),
  defineWeaponCriticalCard({
    id: "slashing.torn-protection",
    localizationKey: "TornProtection",
    damageType: "slashing",
    tone: "dramatic",
    impact: "moderate",
    fallbackTitle: "Torn Protection",
    fallbackDescription:
      "Armor, hide, or magical protection parts along the cut, giving the target weakness 2 to slashing damage for 1 round.",
    weight: 1,
    tags: ["vulnerability"],
    effect: {
      duration: ONE_ROUND,
      components: [
        {
          type: "weakness",
          weaknessType: "slashing",
          value: 2
        }
      ]
    }
  }),
  defineWeaponCriticalCard({
    id: "slashing.crimson-trail",
    localizationKey: "CrimsonTrail",
    damageType: "slashing",
    tone: "dramatic",
    impact: "strong",
    fallbackTitle: "Crimson Trail",
    fallbackDescription:
      "The wound opens wide and inflicts 2d4 persistent bleed damage.",
    weight: 1,
    tags: ["bleed", "persistent-damage"],
    filters: {
      excludedTargetTraits: [
        "construct",
        "elemental",
        "incorporeal",
        "ooze",
        "undead"
      ]
    },
    effect: {
      duration: UNLIMITED,
      components: [
        {
          type: "persistentDamage",
          formula: "2d4",
          damageType: "bleed"
        }
      ]
    }
  })
]);
