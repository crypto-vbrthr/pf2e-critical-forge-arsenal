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
  }),
  defineWeaponCriticalCard({
    id: "bludgeoning.driving-impact", localizationKey: "DrivingImpact", damageType: "bludgeoning",
    tone: "dramatic", impact: "light", fallbackTitle: "Driving Impact",
    fallbackDescription: "The impact forces the target into a guarded crouch, leaving it off-guard for 1 round.",
    weight: 2, tags: ["control", "setup"],
    effect: { duration: ONE_ROUND, components: [{ type: "condition", slug: "off-guard" }] }
  }),
  defineWeaponCriticalCard({
    id: "bludgeoning.dead-leg", localizationKey: "DeadLeg", damageType: "bludgeoning",
    tone: "serious", impact: "moderate", fallbackTitle: "Dead Leg",
    fallbackDescription: "A crushing hit numbs the target's stride, reducing all Speeds by 10 feet for 1 round.",
    weight: 1, tags: ["movement", "control"], filters: { excludedTargetTraits: ["incorporeal", "ooze"] },
    effect: { duration: ONE_ROUND, components: [{ type: "movement", movementType: "all", value: -10, modifierType: "circumstance" }] }
  }),
  defineWeaponCriticalCard({
    id: "bludgeoning.bell-ringer", localizationKey: "BellRinger", damageType: "bludgeoning",
    tone: "dramatic", impact: "moderate", fallbackTitle: "Bell Ringer",
    fallbackDescription: "The blow fills the target's senses with thunder, leaving it dazzled and imposing a -1 circumstance penalty to Perception for 1 round.",
    weight: 1, tags: ["senses", "debuff"],
    effect: { duration: ONE_ROUND, components: [{ type: "condition", slug: "dazzled" }, { type: "modifier", selector: "perception", value: -1, modifierType: "circumstance", predicate: [] }] }
  }),
  defineWeaponCriticalCard({
    id: "bludgeoning.crumpled-guard", localizationKey: "CrumpledGuard", damageType: "bludgeoning",
    tone: "serious", impact: "strong", fallbackTitle: "Crumpled Guard",
    fallbackDescription: "The strike folds the target's defense inward, leaving it clumsy 1 and imposing a -1 circumstance penalty to AC for 1 round.",
    weight: 1, tags: ["control", "defense"],
    effect: { duration: ONE_ROUND, components: [{ type: "condition", slug: "clumsy", value: 1 }, { type: "modifier", selector: "ac", value: -1, modifierType: "circumstance", predicate: [] }] }
  }),
  defineWeaponCriticalCard({
    id: "bludgeoning.shock-through-the-frame", localizationKey: "ShockThroughTheFrame", damageType: "bludgeoning",
    tone: "dramatic", impact: "moderate", fallbackTitle: "Shock Through the Frame",
    fallbackDescription: "The impact travels through armor, bone, or chassis, imposing a -1 circumstance penalty to Fortitude saves and attack rolls for 1 round.",
    weight: 1, tags: ["debuff", "control"],
    effect: { duration: ONE_ROUND, components: [{ type: "modifier", selector: ["fortitude", "attack-roll"], value: -1, modifierType: "circumstance", predicate: [] }] }
  })
,
  defineWeaponCriticalCard({
    id: "bludgeoning.temple-chime",
    localizationKey: "TempleChime",
    damageType: "bludgeoning",
    tone: "dramatic",
    impact: "moderate",
    fallbackTitle: "Temple Chime",
    fallbackDescription: "The impact turns the world into a dull roar, leaving the target deafened for 1 round.",
    weight: 1,
    tags: ["senses", "control"],
    effect: {
      duration: ONE_ROUND,
      components: [
        {
          "type": "condition",
          "slug": "deafened"
        }
      ]
    }
  }),
  defineWeaponCriticalCard({
    id: "bludgeoning.folded-defense",
    localizationKey: "FoldedDefense",
    damageType: "bludgeoning",
    tone: "serious",
    impact: "strong",
    fallbackTitle: "Folded Defense",
    fallbackDescription: "The blow folds the target’s guard inward, leaving it off-guard and imposing a -1 circumstance penalty to Fortitude saves for 1 round.",
    weight: 1,
    tags: ["control", "debuff"],
    effect: {
      duration: ONE_ROUND,
      components: [
        {
          "type": "condition",
          "slug": "off-guard"
        },
        {
          "type": "modifier",
          "selector": "fortitude",
          "value": -1,
          "modifierType": "circumstance",
          "predicate": []
        }
      ]
    }
  }),
  defineWeaponCriticalCard({
    id: "bludgeoning.numbed-support",
    localizationKey: "NumbedSupport",
    damageType: "bludgeoning",
    tone: "serious",
    impact: "moderate",
    fallbackTitle: "Numbed Support",
    fallbackDescription: "A crushing strike numbs the target’s support, reducing its land Speed by 10 feet and leaving it clumsy 1 for 1 round.",
    weight: 1,
    tags: ["movement", "debuff"],
    filters: {"excludedTargetTraits": ["incorporeal", "ooze"]},
    effect: {
      duration: ONE_ROUND,
      components: [
        {
          "type": "movement",
          "movementType": "land",
          "value": -10,
          "modifierType": "circumstance"
        },
        {
          "type": "condition",
          "slug": "clumsy",
          "value": 1
        }
      ]
    }
  }),
  defineWeaponCriticalCard({
    id: "bludgeoning.rattled-instincts",
    localizationKey: "RattledInstincts",
    damageType: "bludgeoning",
    tone: "dramatic",
    impact: "moderate",
    fallbackTitle: "Rattled Instincts",
    fallbackDescription: "The shock scrambles threat and direction, imposing a -1 circumstance penalty to Perception and Will saves for 1 round.",
    weight: 1,
    tags: ["senses", "debuff"],
    effect: {
      duration: ONE_ROUND,
      components: [
        {
          "type": "modifier",
          "selector": [
            "perception",
            "will"
          ],
          "value": -1,
          "modifierType": "circumstance",
          "predicate": []
        }
      ]
    }
  }),
  defineWeaponCriticalCard({
    id: "bludgeoning.cascade-of-impact",
    localizationKey: "CascadeOfImpact",
    damageType: "bludgeoning",
    tone: "dramatic",
    impact: "strong",
    fallbackTitle: "Cascade of Impact",
    fallbackDescription: "The blow sends a chain of shocks through armor, bone, or structure, leaving the target enfeebled 1 and dazzled for 1 round.",
    weight: 1,
    tags: ["debuff", "senses"],
    effect: {
      duration: ONE_ROUND,
      components: [
        {
          "type": "condition",
          "slug": "enfeebled",
          "value": 1
        },
        {
          "type": "condition",
          "slug": "dazzled"
        }
      ]
    }
  }),
  defineWeaponCriticalCard({
    id: "bludgeoning.hammered-guard",
    localizationKey: "HammeredGuard",
    damageType: "bludgeoning",
    tone: "serious",
    impact: "moderate",
    fallbackTitle: "Hammered Guard",
    fallbackDescription: "The impact crushes the target’s guard inward, imposing a -1 circumstance penalty to AC and attack rolls for 1 round.",
    weight: 1,
    tags: ["defense", "debuff"],
    effect: { duration: ONE_ROUND, components: [{ type: "modifier", selector: ["ac", "attack-roll"], value: -1, modifierType: "circumstance", predicate: [] }] }
  }),
  defineWeaponCriticalCard({
    id: "bludgeoning.buckled-knee",
    localizationKey: "BuckledKnee",
    damageType: "bludgeoning",
    tone: "serious",
    impact: "moderate",
    fallbackTitle: "Dead Leg",
    fallbackDescription: "A brutal blow numbs the target’s support, reducing its land Speed by 15 feet for 1 round.",
    weight: 1,
    tags: ["movement", "control"],
    filters: { excludedTargetTraits: ["incorporeal", "ooze"] },
    effect: { duration: ONE_ROUND, components: [{ type: "movement", movementType: "land", value: -15, modifierType: "circumstance" }] }
  }),
  defineWeaponCriticalCard({
    id: "bludgeoning.thunderclap-impact",
    localizationKey: "ThunderclapImpact",
    damageType: "bludgeoning",
    tone: "dramatic",
    impact: "strong",
    fallbackTitle: "Bell Ringer",
    fallbackDescription: "The strike fills the target’s senses with thunder, leaving it dazzled and deafened for 1 round.",
    weight: 1,
    tags: ["senses", "control"],
    effect: { duration: ONE_ROUND, components: [{ type: "condition", slug: "dazzled" }, { type: "condition", slug: "deafened" }] }
  }),
  defineWeaponCriticalCard({
    id: "bludgeoning.cracked-foundation",
    localizationKey: "CrackedFoundation",
    damageType: "bludgeoning",
    tone: "neutral",
    impact: "moderate",
    fallbackTitle: "Cracked Foundation",
    fallbackDescription: "The blow compromises armor, shell, or stance, giving the target weakness 2 to bludgeoning damage for 1 round.",
    weight: 1,
    tags: ["vulnerability", "setup"],
    effect: { duration: ONE_ROUND, components: [{ type: "weakness", weaknessType: "bludgeoning", value: 2 }] }
  }),
  defineWeaponCriticalCard({
    id: "bludgeoning.reeling-frame",
    localizationKey: "ReelingFrame",
    damageType: "bludgeoning",
    tone: "dramatic",
    impact: "strong",
    fallbackTitle: "Reeling Frame",
    fallbackDescription: "The target reels under the impact, becoming off-guard and clumsy 1 for 1 round.",
    weight: 1,
    tags: ["control", "debuff"],
    filters: { excludedTargetTraits: ["incorporeal", "ooze"] },
    effect: { duration: ONE_ROUND, components: [{ type: "condition", slug: "off-guard" }, { type: "condition", slug: "clumsy", value: 1 }] }
  })
]);
