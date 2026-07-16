import {
  defineWeaponCriticalCard,
  DURATIONS
} from "../card-factory.js";

const { ONE_ROUND } = DURATIONS;

export const BLUDGEONING_CARDS = Object.freeze([
  defineWeaponCriticalCard({
    id: "bludgeoning.rebounding-guard",
    localizationKey: "ReboundingGuard",
    damageType: "bludgeoning",
    tone: "dramatic",
    impact: "light",
    fallbackTitle: "Rebounding Guard",
    fallbackDescription:
      "The perfect follow-through carries the attacker back into guard, granting a +1 circumstance bonus to AC for 1 round.",
    weight: 2,
    tags: ["boon", "defense"],
    effect: {
      target: "source",
      duration: ONE_ROUND,
      components: [
        {
          type: "modifier",
          selector: "ac",
          value: 1,
          modifierType: "circumstance",
          predicate: []
        }
      ]
    }
  }),
  defineWeaponCriticalCard({
    id: "bludgeoning.ringing-senses",
    localizationKey: "RingingSenses",
    damageType: "bludgeoning",
    tone: "serious",
    impact: "light",
    fallbackTitle: "Ringing Senses",
    fallbackDescription:
      "The impact leaves the target's senses ringing, imposing a -1 circumstance penalty to Perception for 1 round.",
    weight: 2,
    tags: ["debuff", "perception"],
    effect: {
      duration: ONE_ROUND,
      components: [
        {
          type: "modifier",
          selector: "perception",
          value: -1,
          modifierType: "circumstance",
          predicate: []
        }
      ]
    }
  }),
  defineWeaponCriticalCard({
    id: "bludgeoning.buckled-stance",
    localizationKey: "BuckledStance",
    damageType: "bludgeoning",
    tone: "neutral",
    impact: "moderate",
    fallbackTitle: "Buckled Stance",
    fallbackDescription:
      "The blow folds the target's stance, leaving it off-guard and reducing its land Speed by 5 feet for 1 round.",
    weight: 2,
    tags: ["control", "movement"],
    filters: {
      excludedTargetTraits: ["incorporeal"]
    },
    effect: {
      duration: ONE_ROUND,
      components: [
        { type: "condition", slug: "off-guard" },
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
    id: "bludgeoning.crushed-breath",
    localizationKey: "CrushedBreath",
    damageType: "bludgeoning",
    tone: "serious",
    impact: "moderate",
    fallbackTitle: "Crushed Breath",
    fallbackDescription:
      "The impact drives out breath and strength, imposing a -1 circumstance penalty to Fortitude saves and Athletics checks for 1 round.",
    weight: 1,
    tags: ["debuff"],
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
      duration: ONE_ROUND,
      components: [
        {
          type: "modifier",
          selector: ["fortitude", "athletics"],
          value: -1,
          modifierType: "circumstance",
          predicate: []
        }
      ]
    }
  }),
  defineWeaponCriticalCard({
    id: "bludgeoning.concussive-impact",
    localizationKey: "ConcussiveImpact",
    damageType: "bludgeoning",
    tone: "dramatic",
    impact: "strong",
    fallbackTitle: "Concussive Impact",
    fallbackDescription:
      "For one violent heartbeat the world stops moving. The target is stunned 1.",
    weight: 1,
    tags: ["control"],
    filters: {
      excludedTargetTraits: [
        "elemental",
        "incorporeal",
        "mindless",
        "ooze"
      ]
    },
    effect: {
      duration: ONE_ROUND,
      components: [{ type: "condition", slug: "stunned", value: 1 }]
    }
  })
]);
