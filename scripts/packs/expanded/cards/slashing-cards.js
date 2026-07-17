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
      "The critical slash tears open the target's guard, imposing a -1 circumstance penalty to Reflex saves for 1 round.",
    weight: 2,
    tags: ["control"],
    effect: {
      duration: ONE_ROUND,
      components: [{ type: "modifier", selector: "reflex", value: -1, modifierType: "circumstance", predicate: [] }]
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
  }),
  defineWeaponCriticalCard({
    id: "slashing.cleaving-arc",
    localizationKey: "CleavingArc",
    damageType: "slashing",
    tone: "dramatic",
    impact: "light",
    fallbackTitle: "Cleaving Arc",
    fallbackDescription: "The blade's broad path forces the target to recoil, imposing a -1 circumstance penalty to AC for 1 round.",
    weight: 2,
    tags: ["defense", "debuff"],
    effect: { duration: ONE_ROUND, components: [{ type: "modifier", selector: "ac", value: -1, modifierType: "circumstance", predicate: [] }] }
  }),
  defineWeaponCriticalCard({
    id: "slashing.hamstrung",
    localizationKey: "Hamstrung",
    damageType: "slashing",
    tone: "serious",
    impact: "moderate",
    fallbackTitle: "Hamstrung",
    fallbackDescription: "A low cut steals power from the target's stride, leaving it clumsy 1 for 1 round.",
    weight: 2,
    tags: ["movement", "debuff"],
    filters: {"excludedTargetTraits": ["construct", "elemental", "incorporeal", "ooze", "undead"]},
    effect: { duration: ONE_ROUND, components: [{ type: "condition", slug: "clumsy", value: 1 }] }
  }),
  defineWeaponCriticalCard({
    id: "slashing.torn-guard",
    localizationKey: "TornGuard",
    damageType: "slashing",
    tone: "serious",
    impact: "moderate",
    fallbackTitle: "Torn Guard",
    fallbackDescription: "The edge rips through guard and confidence, imposing a -1 circumstance penalty to attack rolls and AC for 1 round.",
    weight: 1,
    tags: ["debuff", "defense"],
    effect: { duration: ONE_ROUND, components: [{ type: "modifier", selector: ["attack-roll", "ac"], value: -1, modifierType: "circumstance", predicate: [] }] }
  }),
  defineWeaponCriticalCard({
    id: "slashing.rending-strike",
    localizationKey: "RendingStrike",
    damageType: "slashing",
    tone: "dramatic",
    impact: "strong",
    fallbackTitle: "Rending Strike",
    fallbackDescription: "The strike tears a ragged wound that inflicts 1d4 persistent bleed damage and leaves the target enfeebled 1 for 1 round.",
    weight: 1,
    tags: ["bleed", "persistent-damage"],
    filters: {"excludedTargetTraits": ["construct", "elemental", "incorporeal", "ooze", "undead"]},
    effect: { duration: UNLIMITED, components: [{ type: "persistentDamage", formula: "1d4", damageType: "bleed" }, { type:"condition", slug:"enfeebled", value:1, duration: ONE_ROUND }] }
  }),
  defineWeaponCriticalCard({
    id: "slashing.sweeping-pressure",
    localizationKey: "SweepingPressure",
    damageType: "slashing",
    tone: "neutral",
    impact: "light",
    fallbackTitle: "Sweeping Pressure",
    fallbackDescription: "The relentless sweep leaves no room to settle, imposing a -1 circumstance penalty to Reflex saves for 1 round.",
    weight: 2,
    tags: ["debuff"],
    effect: { duration: ONE_ROUND, components: [{ type: "modifier", selector: "reflex", value: -1, modifierType: "circumstance", predicate: [] }] }
  }),
  defineWeaponCriticalCard({
    id: "slashing.severed-stance", localizationKey: "SeveredStance", damageType: "slashing",
    tone: "serious", impact: "moderate", fallbackTitle: "Severed Stance",
    fallbackDescription: "The cut tears through balance and leverage, imposing a -1 circumstance penalty to Fortitude and Reflex saves for 1 round.",
    weight: 1, tags: ["debuff", "control"],
    effect: { duration: ONE_ROUND, components: [{ type: "modifier", selector: ["fortitude", "reflex"], value: -1, modifierType: "circumstance", predicate: [] }] }
  }),
  defineWeaponCriticalCard({
    id: "slashing.blood-in-the-eyes", localizationKey: "BloodInTheEyes", damageType: "slashing",
    tone: "dramatic", impact: "moderate", fallbackTitle: "Blood in the Eyes",
    fallbackDescription: "The slash sends blood, splinters, or torn material across the target's vision, leaving it dazzled for 1 round.",
    weight: 1, tags: ["senses", "control"], filters: { excludedTargetTraits: ["incorporeal", "ooze"] },
    effect: { duration: ONE_ROUND, components: [{ type: "condition", slug: "dazzled" }] }
  }),
  defineWeaponCriticalCard({
    id: "slashing.hooked-cut", localizationKey: "HookedCut", damageType: "slashing",
    tone: "neutral", impact: "light", fallbackTitle: "Hooked Cut",
    fallbackDescription: "The edge catches clothing, armor, or flesh and reduces the target's land Speed by 10 feet for 1 round.",
    weight: 2, tags: ["movement"], filters: { excludedTargetTraits: ["incorporeal", "ooze"] },
    effect: { duration: ONE_ROUND, components: [{ type: "movement", movementType: "land", value: -10, modifierType: "circumstance" }] }
  }),
  defineWeaponCriticalCard({
    id: "slashing.ragged-opening", localizationKey: "RaggedOpening", damageType: "slashing",
    tone: "serious", impact: "moderate", fallbackTitle: "Ragged Opening",
    fallbackDescription: "The cut leaves a jagged gap in the target's defense, giving it weakness 2 to piercing damage for 1 round.",
    weight: 1, tags: ["vulnerability", "setup"],
    effect: { duration: ONE_ROUND, components: [{ type: "weakness", weaknessType: "piercing", value: 2 }] }
  }),
  defineWeaponCriticalCard({
    id: "slashing.split-defense", localizationKey: "SplitDefense", damageType: "slashing",
    tone: "dramatic", impact: "strong", fallbackTitle: "Split Defense",
    fallbackDescription: "The sweeping blow tears the target's offense and defense apart, leaving it off-guard and imposing a -1 circumstance penalty to attack rolls for 1 round.",
    weight: 1, tags: ["control", "debuff"],
    effect: { duration: ONE_ROUND, components: [{ type: "condition", slug: "off-guard" }, { type: "modifier", selector: "attack-roll", value: -1, modifierType: "circumstance", predicate: [] }] }
  }),
  defineWeaponCriticalCard({
    id: "slashing.scarlet-feint", localizationKey: "ScarletFeint", damageType: "slashing",
    tone: "dramatic", impact: "light", fallbackTitle: "Scarlet Feint",
    fallbackDescription: "The flashing edge draws the target into the wrong defense, imposing a -1 circumstance penalty to Reflex saves for 1 round.",
    weight: 2, tags: ["control", "setup"],
    effect: { duration: ONE_ROUND, components: [{ type: "modifier", selector: "reflex", value: -1, modifierType: "circumstance", predicate: [] }] }
  }),
  defineWeaponCriticalCard({
    id: "slashing.severed-momentum", localizationKey: "SeveredMomentum", damageType: "slashing",
    tone: "serious", impact: "moderate", fallbackTitle: "Severed Momentum",
    fallbackDescription: "The cut interrupts the target’s momentum, reducing all its Speeds by 10 feet for 1 round.",
    weight: 1, tags: ["movement", "control"], filters: { excludedTargetTraits: ["incorporeal", "ooze"] },
    effect: { duration: ONE_ROUND, components: [{ type: "movement", movementType: "all", value: -10, modifierType: "circumstance" }] }
  }),
  defineWeaponCriticalCard({
    id: "slashing.opened-seam", localizationKey: "OpenedSeam", damageType: "slashing",
    tone: "neutral", impact: "moderate", fallbackTitle: "Opened Seam",
    fallbackDescription: "The edge opens a seam in armor, hide, or magical protection, imposing a -1 circumstance penalty to AC and Fortitude saves for 1 round.",
    weight: 1, tags: ["defense", "setup"],
    effect: { duration: ONE_ROUND, components: [{ type: "modifier", selector: ["ac", "fortitude"], value: -1, modifierType: "circumstance", predicate: [] }] }
  }),
  defineWeaponCriticalCard({
    id: "slashing.red-rhythm", localizationKey: "RedRhythm", damageType: "slashing",
    tone: "dramatic", impact: "strong", fallbackTitle: "Red Rhythm",
    fallbackDescription: "A succession of shallow tears becomes a relentless wound, inflicting 1d4 persistent bleed damage and leaving the target off-guard for 1 round.",
    weight: 1, tags: ["bleed", "persistent-damage", "debuff"], filters: { excludedTargetTraits: ["construct", "elemental", "incorporeal", "ooze", "undead"] },
    effect: { duration: UNLIMITED, components: [{ type: "persistentDamage", formula: "1d4", damageType: "bleed" }, { type: "condition", slug: "off-guard", duration: ONE_ROUND }] }
  }),
  defineWeaponCriticalCard({
    id: "slashing.crescent-reversal", localizationKey: "CrescentReversal", damageType: "slashing",
    tone: "dramatic", impact: "moderate", fallbackTitle: "Crescent Reversal",
    fallbackDescription: "The returning arc catches the target during recovery, imposing a -1 circumstance penalty to attack rolls and Perception for 1 round.",
    weight: 1, tags: ["debuff", "senses"],
    effect: { duration: ONE_ROUND, components: [{ type: "modifier", selector: ["attack-roll", "perception"], value: -1, modifierType: "circumstance", predicate: [] }] }
  })
,
  defineWeaponCriticalCard({
    id: "slashing.cut-to-the-quick",
    localizationKey: "CutToTheQuick",
    damageType: "slashing",
    tone: "serious",
    impact: "moderate",
    fallbackTitle: "Cut to the Quick",
    fallbackDescription: "The edge finds a painfully sensitive line, leaving the target enfeebled 1 for 1 round.",
    weight: 1,
    tags: ["debuff"],
    filters: {"excludedTargetTraits": ["construct", "elemental", "incorporeal", "ooze", "undead"]},
    effect: {
      duration: ONE_ROUND,
      components: [
        {
          "type": "condition",
          "slug": "enfeebled",
          "value": 1
        }
      ]
    }
  }),
  defineWeaponCriticalCard({
    id: "slashing.shredded-footing",
    localizationKey: "ShreddedFooting",
    damageType: "slashing",
    tone: "dramatic",
    impact: "moderate",
    fallbackTitle: "Shredded Footing",
    fallbackDescription: "The slash tears through straps, clothing, or stance, reducing the target’s land Speed by 10 feet and imposing a -1 circumstance penalty to Reflex saves for 1 round.",
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
    id: "slashing.crosswise-ruin",
    localizationKey: "CrosswiseRuin",
    damageType: "slashing",
    tone: "serious",
    impact: "moderate",
    fallbackTitle: "Crosswise Ruin",
    fallbackDescription: "A brutal crosscut disrupts the target's awareness, imposing a -1 circumstance penalty to Perception for 1 round.",
    weight: 1,
    tags: ["debuff", "defense"],
    effect: {
      duration: ONE_ROUND,
      components: [
        {
          "type": "modifier",
          "selector":"perception",
          "value": -1,
          "modifierType": "circumstance",
          "predicate": []
        }
      ]
    }
  }),
  defineWeaponCriticalCard({
    id: "slashing.bleeding-distraction",
    localizationKey: "BleedingDistraction",
    damageType: "slashing",
    tone: "dramatic",
    impact: "strong",
    fallbackTitle: "Bleeding Distraction",
    fallbackDescription: "A persistent trickle of blood or leaking essence breaks concentration, inflicting 1d4 persistent bleed damage and stupefying the target 1 for 1 round.",
    weight: 1,
    tags: ["bleed", "persistent-damage", "debuff"],
    filters: {"excludedTargetTraits": ["construct", "elemental", "incorporeal", "ooze", "undead"]},
    effect: {
      duration: UNLIMITED,
      components: [
        {
          "type": "persistentDamage",
          "formula": "1d4",
          "damageType": "bleed"
        },
        {
          "type": "condition", "slug":"stupefied","value":1, "duration": ONE_ROUND
        }
      ]
    }
  }),
  defineWeaponCriticalCard({
    id: "slashing.parted-guard",
    localizationKey: "PartedGuard",
    damageType: "slashing",
    tone: "dramatic",
    impact: "strong",
    fallbackTitle: "Parted Guard",
    fallbackDescription: "The blade parts the target’s guard from shoulder to hip, leaving it off-guard and reducing all Speeds by 5 feet for 1 round.",
    weight: 1,
    tags: ["control", "movement"],
    filters: {"excludedTargetTraits": ["incorporeal", "ooze"]},
    effect: {
      duration: ONE_ROUND,
      components: [
        {
          "type": "condition",
          "slug": "off-guard"
        },
        {
          "type": "movement",
          "movementType": "all",
          "value": -5,
          "modifierType": "circumstance"
        }
      ]
    }
  }),
  defineWeaponCriticalCard({
    id: "slashing.crosswise-gash",
    localizationKey: "CrosswiseGash",
    damageType: "slashing",
    tone: "serious",
    impact: "moderate",
    fallbackTitle: "Crosswise Gash",
    fallbackDescription: "A broad cut crosses the target’s guard and footing, imposing a -1 circumstance penalty to AC and Reflex saves for 1 round.",
    weight: 1,
    tags: ["defense", "debuff"],
    effect: { duration: ONE_ROUND, components: [{ type: "modifier", selector: ["ac", "reflex"], value: -1, modifierType: "circumstance", predicate: [] }] }
  }),
  defineWeaponCriticalCard({
    id: "slashing.tendon-snag",
    localizationKey: "TendonSnag",
    damageType: "slashing",
    tone: "serious",
    impact: "moderate",
    fallbackTitle: "Tendon Snag",
    fallbackDescription: "The edge catches a tendon or equivalent support, imposing a -1 circumstance penalty to Acrobatics and Reflex saves for 1 round.",
    weight: 1,
    tags: ["movement", "control"],
    filters: { excludedTargetTraits: ["construct", "elemental", "incorporeal", "ooze", "undead"] },
    effect: { duration: ONE_ROUND, components: [{ type: "modifier", selector: ["acrobatics", "reflex"], value: -1, modifierType: "circumstance", predicate: [] }] }
  }),
  defineWeaponCriticalCard({
    id: "slashing.crimson-distraction",
    localizationKey: "CrimsonDistraction",
    damageType: "slashing",
    tone: "dramatic",
    impact: "moderate",
    fallbackTitle: "Crimson Distraction",
    fallbackDescription: "The sudden spray and pain break the target’s focus, imposing a -1 circumstance penalty to Perception and Will saves for 1 round.",
    weight: 1,
    tags: ["senses", "debuff"],
    filters: { excludedTargetTraits: ["construct", "elemental", "incorporeal", "ooze", "undead"] },
    effect: { duration: ONE_ROUND, components: [{ type: "modifier", selector: ["perception", "will"], value: -1, modifierType: "circumstance", predicate: [] }] }
  }),
  defineWeaponCriticalCard({
    id: "slashing.peeling-edge",
    localizationKey: "PeelingEdge",
    damageType: "slashing",
    tone: "neutral",
    impact: "moderate",
    fallbackTitle: "Peeling Edge",
    fallbackDescription: "The blade peels protection away from the target, leaving it enfeebled 1 for 1 round.",
    weight: 1,
    tags: ["vulnerability", "setup"],
    effect: { duration: ONE_ROUND, components: [{ type: "condition", slug: "enfeebled", value: 1 }] }
  }),
  defineWeaponCriticalCard({
    id: "slashing.butchered-balance",
    localizationKey: "ButcheredBalance",
    damageType: "slashing",
    tone: "dramatic",
    impact: "strong",
    fallbackTitle: "Butchered Balance",
    fallbackDescription: "The cut ruins the target’s stance, leaving it clumsy 1 and off-guard for 1 round.",
    weight: 1,
    tags: ["control", "debuff"],
    filters: { excludedTargetTraits: ["incorporeal", "ooze"] },
    effect: { duration: ONE_ROUND, components: [{ type: "condition", slug: "clumsy", value: 1 }, { type: "condition", slug: "off-guard" }] }
  })
]);
