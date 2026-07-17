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
  }),
  defineWeaponCriticalCard({
    id: "bludgeoning.driving-smash",
    localizationKey: "DrivingSmash",
    damageType: "bludgeoning",
    tone: "dramatic",
    impact: "moderate",
    fallbackTitle: "Driving Smash",
    fallbackDescription: "The blow drives the target backward through its own stance, leaving it clumsy 1 for 1 round.",
    weight: 2,
    tags: ["control", "debuff"],
    filters: {"excludedTargetTraits": ["incorporeal"]},
    effect: { duration: ONE_ROUND, components: [{ type: "condition", slug: "clumsy", value: 1 }] }
  }),
  defineWeaponCriticalCard({
    id: "bludgeoning.bone-rattling-strike",
    localizationKey: "BoneRattlingStrike",
    damageType: "bludgeoning",
    tone: "serious",
    impact: "moderate",
    fallbackTitle: "Bone-Rattling Strike",
    fallbackDescription: "The impact shakes strength from limb and grip, leaving the target enfeebled 1 for 1 round.",
    weight: 1,
    tags: ["debuff"],
    filters: {"excludedTargetTraits": ["incorporeal", "ooze"]},
    effect: { duration: ONE_ROUND, components: [{ type: "condition", slug: "enfeebled", value: 1 }] }
  }),
  defineWeaponCriticalCard({
    id: "bludgeoning.crushed-guard",
    localizationKey: "CrushedGuard",
    damageType: "bludgeoning",
    tone: "serious",
    impact: "light",
    fallbackTitle: "Crushed Guard",
    fallbackDescription: "The target's defense collapses under the impact, imposing a -1 circumstance penalty to AC for 1 round.",
    weight: 2,
    tags: ["defense", "debuff"],
    effect: { duration: ONE_ROUND, components: [{ type: "modifier", selector: "ac", value: -1, modifierType: "circumstance", predicate: [] }] }
  }),
  defineWeaponCriticalCard({
    id: "bludgeoning.staggering-impact",
    localizationKey: "StaggeringImpact",
    damageType: "bludgeoning",
    tone: "dramatic",
    impact: "strong",
    fallbackTitle: "Staggering Impact",
    fallbackDescription: "The blow turns the battlefield sideways and knocks the target prone.",
    weight: 1,
    tags: ["control"],
    filters: {"excludedTargetTraits": ["incorporeal"]},
    effect: { duration: ONE_ROUND, components: [{ type: "condition", slug: "prone" }] }
  }),
  defineWeaponCriticalCard({
    id: "bludgeoning.rattled-focus",
    localizationKey: "RattledFocus",
    damageType: "bludgeoning",
    tone: "neutral",
    impact: "light",
    fallbackTitle: "Rattled Focus",
    fallbackDescription: "The impact scatters thought and aim, imposing a -1 circumstance penalty to attack rolls and Perception for 1 round.",
    weight: 2,
    tags: ["debuff", "perception"],
    effect: { duration: ONE_ROUND, components: [{ type: "modifier", selector: ["attack-roll", "perception"], value: -1, modifierType: "circumstance", predicate: [] }] }
  }),
  defineWeaponCriticalCard({
    id: "bludgeoning.winded", localizationKey: "Winded", damageType: "bludgeoning",
    tone: "serious", impact: "strong", fallbackTitle: "Winded",
    fallbackDescription: "The impact empties the target's lungs and leaves it slowed 1 for 1 round.",
    weight: 1, tags: ["control"], filters: { excludedTargetTraits: ["construct", "elemental", "incorporeal", "ooze", "undead"] },
    effect: { duration: ONE_ROUND, components: [{ type: "condition", slug: "slowed", value: 1 }] }
  }),
  defineWeaponCriticalCard({
    id: "bludgeoning.ringing-ears", localizationKey: "RingingEars", damageType: "bludgeoning",
    tone: "dramatic", impact: "moderate", fallbackTitle: "Ringing Ears",
    fallbackDescription: "The blow floods the target's senses with noise, leaving it dazzled for 1 round.",
    weight: 1, tags: ["senses", "control"], filters: { excludedTargetTraits: ["incorporeal", "mindless", "ooze"] },
    effect: { duration: ONE_ROUND, components: [{ type: "condition", slug: "dazzled" }] }
  }),
  defineWeaponCriticalCard({
    id: "bludgeoning.buckled-knees", localizationKey: "BuckledKnees", damageType: "bludgeoning",
    tone: "neutral", impact: "light", fallbackTitle: "Buckled Knees",
    fallbackDescription: "The strike buckles the target's stance, reducing all Speeds by 5 feet for 1 round.",
    weight: 2, tags: ["movement", "control"], filters: { excludedTargetTraits: ["incorporeal", "ooze"] },
    effect: { duration: ONE_ROUND, components: [{ type: "movement", movementType: "all", value: -5, modifierType: "circumstance" }] }
  }),
  defineWeaponCriticalCard({
    id: "bludgeoning.concussive-gap", localizationKey: "ConcussiveGap", damageType: "bludgeoning",
    tone: "serious", impact: "moderate", fallbackTitle: "Concussive Gap",
    fallbackDescription: "The impact cracks open body and guard, imposing a -1 circumstance penalty to AC and Fortitude saves for 1 round.",
    weight: 1, tags: ["defense", "debuff"],
    effect: { duration: ONE_ROUND, components: [{ type: "modifier", selector: ["ac", "fortitude"], value: -1, modifierType: "circumstance", predicate: [] }] }
  }),
  defineWeaponCriticalCard({
    id: "bludgeoning.dislocated-guard", localizationKey: "DislocatedGuard", damageType: "bludgeoning",
    tone: "dramatic", impact: "strong", fallbackTitle: "Dislocated Guard",
    fallbackDescription: "The blow knocks strength and defense out of alignment, leaving the target enfeebled 1 and off-guard for 1 round.",
    weight: 1, tags: ["control", "debuff"], filters: { excludedTargetTraits: ["incorporeal", "ooze"] },
    effect: { duration: ONE_ROUND, components: [{ type: "condition", slug: "enfeebled", value: 1 }, { type: "condition", slug: "off-guard" }] }
  })
]);
