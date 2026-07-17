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
  }),
  defineWeaponCriticalCard({
    id: "piercing.exposed-joint",
    localizationKey: "ExposedJoint",
    damageType: "piercing",
    tone: "serious",
    impact: "light",
    fallbackTitle: "Exposed Joint",
    fallbackDescription: "The point finds a working joint, imposing a -1 circumstance penalty to Reflex saves for 1 round.",
    weight: 2,
    tags: ["debuff"],
    effect: { duration: ONE_ROUND, components: [{ type: "modifier", selector: "reflex", value: -1, modifierType: "circumstance", predicate: [] }] }
  }),
  defineWeaponCriticalCard({
    id: "piercing.pinpoint-pain",
    localizationKey: "PinpointPain",
    damageType: "piercing",
    tone: "serious",
    impact: "moderate",
    fallbackTitle: "Pinpoint Pain",
    fallbackDescription: "A needle-fine burst of pain breaks concentration, imposing a -1 circumstance penalty to Will saves and spell attack rolls for 1 round.",
    weight: 1,
    tags: ["debuff", "mental-disruption"],
    filters: {"excludedTargetTraits": ["construct", "elemental", "incorporeal", "mindless", "ooze", "undead"]},
    effect: { duration: ONE_ROUND, components: [{ type: "modifier", selector: ["will", "spell-attack-roll"], value: -1, modifierType: "circumstance", predicate: [] }] }
  }),
  defineWeaponCriticalCard({
    id: "piercing.faltering-grip",
    localizationKey: "FalteringGrip",
    damageType: "piercing",
    tone: "neutral",
    impact: "light",
    fallbackTitle: "Faltering Grip",
    fallbackDescription: "The thrust strikes hand, wrist, or leverage, leaving the target enfeebled 1 for 1 round.",
    weight: 2,
    tags: ["debuff"],
    filters: {"excludedTargetTraits": ["incorporeal", "ooze"]},
    effect: { duration: ONE_ROUND, components: [{ type: "condition", slug: "enfeebled", value: 1 }] }
  }),
  defineWeaponCriticalCard({
    id: "piercing.precise-thrust",
    localizationKey: "PreciseThrust",
    damageType: "piercing",
    tone: "dramatic",
    impact: "moderate",
    fallbackTitle: "Precise Thrust",
    fallbackDescription: "The point slips through a narrow opening, imposing a -1 circumstance penalty to AC and Fortitude saves for 1 round.",
    weight: 1,
    tags: ["defense", "debuff"],
    effect: { duration: ONE_ROUND, components: [{ type: "modifier", selector: ["ac", "fortitude"], value: -1, modifierType: "circumstance", predicate: [] }] }
  }),
  defineWeaponCriticalCard({
    id: "piercing.pinned-momentum",
    localizationKey: "PinnedMomentum",
    damageType: "piercing",
    tone: "dramatic",
    impact: "strong",
    fallbackTitle: "Pinned Momentum",
    fallbackDescription: "The point catches the target at the worst possible angle, leaving it immobilized for 1 round.",
    weight: 1,
    tags: ["control", "movement"],
    filters: {"excludedTargetTraits": ["incorporeal", "ooze"]},
    effect: { duration: ONE_ROUND, components: [{ type: "condition", slug: "immobilized" }] }
  }),
  defineWeaponCriticalCard({
    id: "piercing.numbed-arm", localizationKey: "NumbedArm", damageType: "piercing",
    tone: "serious", impact: "moderate", fallbackTitle: "Numbed Arm",
    fallbackDescription: "The point strikes a nerve or joint, leaving the target clumsy 1 for 1 round.",
    weight: 2, tags: ["precision", "debuff"], filters: { excludedTargetTraits: ["construct", "elemental", "incorporeal", "ooze", "undead"] },
    effect: { duration: ONE_ROUND, components: [{ type: "condition", slug: "clumsy", value: 1 }] }
  }),
  defineWeaponCriticalCard({
    id: "piercing.stolen-breath", localizationKey: "StolenBreath", damageType: "piercing",
    tone: "dramatic", impact: "strong", fallbackTitle: "Stolen Breath",
    fallbackDescription: "The thrust finds a breath-stealing point, leaving the target slowed 1 for 1 round.",
    weight: 1, tags: ["precision", "control"], filters: { excludedTargetTraits: ["construct", "elemental", "incorporeal", "ooze", "undead"] },
    effect: { duration: ONE_ROUND, components: [{ type: "condition", slug: "slowed", value: 1 }] }
  }),
  defineWeaponCriticalCard({
    id: "piercing.anchored-foot", localizationKey: "AnchoredFoot", damageType: "piercing",
    tone: "neutral", impact: "light", fallbackTitle: "Anchored Foot",
    fallbackDescription: "The strike catches foot, hem, or footing, reducing the target's land Speed by 10 feet for 1 round.",
    weight: 2, tags: ["movement", "precision"], filters: { excludedTargetTraits: ["incorporeal", "ooze"] },
    effect: { duration: ONE_ROUND, components: [{ type: "movement", movementType: "land", value: -10, modifierType: "circumstance" }] }
  }),
  defineWeaponCriticalCard({
    id: "piercing.threaded-gap", localizationKey: "ThreadedGap", damageType: "piercing",
    tone: "serious", impact: "moderate", fallbackTitle: "Threaded Gap",
    fallbackDescription: "The point marks a precise route through the target's protection, giving it weakness 2 to piercing damage for 1 round.",
    weight: 1, tags: ["vulnerability", "precision"],
    effect: { duration: ONE_ROUND, components: [{ type: "weakness", weaknessType: "piercing", value: 2 }] }
  }),
  defineWeaponCriticalCard({
    id: "piercing.eye-line", localizationKey: "EyeLine", damageType: "piercing",
    tone: "dramatic", impact: "moderate", fallbackTitle: "Eye-Line",
    fallbackDescription: "The point flashes past the target's eyes and breaks its focus, leaving it dazzled for 1 round.",
    weight: 1, tags: ["senses", "precision"], filters: { excludedTargetTraits: ["mindless", "ooze"] },
    effect: { duration: ONE_ROUND, components: [{ type: "condition", slug: "dazzled" }] }
  }),
  defineWeaponCriticalCard({
    id: "piercing.thread-the-guard", localizationKey: "ThreadTheGuard", damageType: "piercing",
    tone: "neutral", impact: "light", fallbackTitle: "Thread the Guard",
    fallbackDescription: "The point slips through the smallest opening, leaving the target off-guard for 1 round.",
    weight: 2, tags: ["precision", "setup"],
    effect: { duration: ONE_ROUND, components: [{ type: "condition", slug: "off-guard" }] }
  }),
  defineWeaponCriticalCard({
    id: "piercing.pinned-step", localizationKey: "PinnedStep", damageType: "piercing",
    tone: "serious", impact: "moderate", fallbackTitle: "Pinned Step",
    fallbackDescription: "The strike catches foot, garment, or gear at exactly the wrong moment, reducing land Speed by 15 feet for 1 round.",
    weight: 1, tags: ["movement", "control"], filters: { excludedTargetTraits: ["incorporeal", "ooze"] },
    effect: { duration: ONE_ROUND, components: [{ type: "movement", movementType: "land", value: -15, modifierType: "circumstance" }] }
  }),
  defineWeaponCriticalCard({
    id: "piercing.nerve-line", localizationKey: "NerveLine", damageType: "piercing",
    tone: "serious", impact: "moderate", fallbackTitle: "Nerve Line",
    fallbackDescription: "The point grazes a nerve cluster, leaving the target clumsy 1 and imposing a -1 circumstance penalty to Reflex saves for 1 round.",
    weight: 1, tags: ["precision", "debuff"], filters: { excludedTargetTraits: ["construct", "elemental", "incorporeal", "ooze", "undead"] },
    effect: { duration: ONE_ROUND, components: [{ type: "condition", slug: "clumsy", value: 1 }, { type: "modifier", selector: "reflex", value: -1, modifierType: "circumstance", predicate: [] }] }
  }),
  defineWeaponCriticalCard({
    id: "piercing.breached-core", localizationKey: "BreachedCore", damageType: "piercing",
    tone: "dramatic", impact: "strong", fallbackTitle: "Breached Core",
    fallbackDescription: "The thrust finds a vital seam, giving the target weakness 3 to piercing damage for 1 round.",
    weight: 1, tags: ["vulnerability", "precision"],
    effect: { duration: ONE_ROUND, components: [{ type: "weakness", weaknessType: "piercing", value: 3 }] }
  }),
  defineWeaponCriticalCard({
    id: "piercing.breathless-focus", localizationKey: "BreathlessFocus", damageType: "piercing",
    tone: "dramatic", impact: "moderate", fallbackTitle: "Breathless Focus",
    fallbackDescription: "A precise impact steals breath and focus, imposing a -1 circumstance penalty to Fortitude saves and spell attack rolls for 1 round.",
    weight: 1, tags: ["precision", "debuff"], filters: { excludedTargetTraits: ["construct", "elemental", "incorporeal", "ooze", "undead"] },
    effect: { duration: ONE_ROUND, components: [{ type: "modifier", selector: ["fortitude", "spell-attack-roll"], value: -1, modifierType: "circumstance", predicate: [] }] }
  })
,
  defineWeaponCriticalCard({
    id: "piercing.pinpoint-shock",
    localizationKey: "PinpointShock",
    damageType: "piercing",
    tone: "serious",
    impact: "moderate",
    fallbackTitle: "Pinpoint Shock",
    fallbackDescription: "The point strikes a nerve cluster or delicate joint, leaving the target clumsy 1 for 1 round.",
    weight: 1,
    tags: ["precision", "debuff"],
    filters: {"excludedTargetTraits": ["construct", "elemental", "incorporeal", "ooze", "undead"]},
    effect: {
      duration: ONE_ROUND,
      components: [
        {
          "type": "condition",
          "slug": "clumsy",
          "value": 1
        }
      ]
    }
  }),
  defineWeaponCriticalCard({
    id: "piercing.nailed-step",
    localizationKey: "NailedStep",
    damageType: "piercing",
    tone: "dramatic",
    impact: "strong",
    fallbackTitle: "Nailed Step",
    fallbackDescription: "A precise strike catches foot, limb, or trailing gear, reducing the target’s land Speed by 10 feet and leaving it off-guard for 1 round.",
    weight: 1,
    tags: ["precision", "movement", "control"],
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
          "slug": "off-guard"
        }
      ]
    }
  }),
  defineWeaponCriticalCard({
    id: "piercing.breached-joint",
    localizationKey: "BreachedJoint",
    damageType: "piercing",
    tone: "serious",
    impact: "moderate",
    fallbackTitle: "Breached Joint",
    fallbackDescription: "The thrust slips into a joint or structural gap, giving the target weakness 2 to bludgeoning damage for 1 round.",
    weight: 1,
    tags: ["precision", "vulnerability", "setup"],
    effect: {
      duration: ONE_ROUND,
      components: [
        {
          "type": "weakness",
          "weaknessType": "bludgeoning",
          "value": 2
        }
      ]
    }
  }),
  defineWeaponCriticalCard({
    id: "piercing.breath-stealing-thrust",
    localizationKey: "BreathStealingThrust",
    damageType: "piercing",
    tone: "dramatic",
    impact: "moderate",
    fallbackTitle: "Breath-Stealing Thrust",
    fallbackDescription: "The point lands where every breath hurts, imposing a -1 circumstance penalty to Fortitude saves and spell attack rolls for 1 round.",
    weight: 1,
    tags: ["precision", "debuff"],
    filters: {"excludedTargetTraits": ["construct", "elemental", "incorporeal", "ooze", "undead"]},
    effect: {
      duration: ONE_ROUND,
      components: [
        {
          "type": "modifier",
          "selector": [
            "fortitude",
            "spell-attack-roll"
          ],
          "value": -1,
          "modifierType": "circumstance",
          "predicate": []
        }
      ]
    }
  }),
  defineWeaponCriticalCard({
    id: "piercing.threaded-defense",
    localizationKey: "ThreadedDefense",
    damageType: "piercing",
    tone: "dramatic",
    impact: "strong",
    fallbackTitle: "Threaded Defense",
    fallbackDescription: "The weapon threads cleanly through the defense, leaving the target off-guard and imposing a -1 circumstance penalty to Reflex saves for 1 round.",
    weight: 1,
    tags: ["precision", "control", "debuff"],
    effect: {
      duration: ONE_ROUND,
      components: [
        {
          "type": "condition",
          "slug": "off-guard"
        },
        {
          "type": "modifier",
          "selector": "reflex",
          "value": -1,
          "modifierType": "circumstance",
          "predicate": []
        }
      ]
    }
  }),
  defineWeaponCriticalCard({
    id: "piercing.needles-passage",
    localizationKey: "NeedlesPassage",
    damageType: "piercing",
    tone: "serious",
    impact: "moderate",
    fallbackTitle: "Thread the Gap",
    fallbackDescription: "The point slips through a narrow opening, imposing a -1 circumstance penalty to AC and Fortitude saves for 1 round.",
    weight: 1,
    tags: ["precision", "defense"],
    effect: { duration: ONE_ROUND, components: [{ type: "modifier", selector: ["ac", "fortitude"], value: -1, modifierType: "circumstance", predicate: [] }] }
  }),
  defineWeaponCriticalCard({
    id: "piercing.nailed-stride",
    localizationKey: "NailedStride",
    damageType: "piercing",
    tone: "dramatic",
    impact: "moderate",
    fallbackTitle: "Pinned Step",
    fallbackDescription: "A precise thrust catches foot, hem, or harness, reducing the target’s land Speed by 15 feet for 1 round.",
    weight: 1,
    tags: ["movement", "control"],
    filters: { excludedTargetTraits: ["incorporeal", "ooze"] },
    effect: { duration: ONE_ROUND, components: [{ type: "movement", movementType: "land", value: -15, modifierType: "circumstance" }] }
  }),
  defineWeaponCriticalCard({
    id: "piercing.shock-to-the-nerve",
    localizationKey: "ShockToTheNerve",
    damageType: "piercing",
    tone: "serious",
    impact: "moderate",
    fallbackTitle: "Shock to the Nerve",
    fallbackDescription: "The point strikes a sensitive junction, leaving the target clumsy 1 for 1 round.",
    weight: 1,
    tags: ["precision", "debuff"],
    filters: { excludedTargetTraits: ["construct", "elemental", "incorporeal", "ooze", "undead"] },
    effect: { duration: ONE_ROUND, components: [{ type: "condition", slug: "clumsy", value: 1 }] }
  }),
  defineWeaponCriticalCard({
    id: "piercing.marked-vital",
    localizationKey: "MarkedVital",
    damageType: "piercing",
    tone: "neutral",
    impact: "moderate",
    fallbackTitle: "Marked Vital",
    fallbackDescription: "The thrust exposes a vulnerable line, giving the target weakness 2 to piercing damage for 1 round.",
    weight: 1,
    tags: ["vulnerability", "setup"],
    effect: { duration: ONE_ROUND, components: [{ type: "weakness", weaknessType: "piercing", value: 2 }] }
  }),
  defineWeaponCriticalCard({
    id: "piercing.breath-caught",
    localizationKey: "BreathCaught",
    damageType: "piercing",
    tone: "dramatic",
    impact: "strong",
    fallbackTitle: "Breath Caught",
    fallbackDescription: "A perfectly placed hit steals breath and timing, leaving the target enfeebled 1 and imposing a -1 circumstance penalty to attack rolls for 1 round.",
    weight: 1,
    tags: ["precision", "debuff"],
    filters: { excludedTargetTraits: ["construct", "elemental", "incorporeal", "ooze", "undead"] },
    effect: { duration: ONE_ROUND, components: [{ type: "condition", slug: "enfeebled", value: 1 }, { type: "modifier", selector: "attack-roll", value: -1, modifierType: "circumstance", predicate: [] }] }
  })
]);
