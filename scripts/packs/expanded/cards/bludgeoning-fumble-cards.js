import {
  defineWeaponFumbleCard,
  DURATIONS
} from "../card-factory.js";

const { ONE_ROUND } = DURATIONS;

export const BLUDGEONING_FUMBLE_CARDS = Object.freeze([
  defineWeaponFumbleCard({
    id: "bludgeoning-fumble.recoil-shock",
    localizationKey: "RecoilShock",
    damageType: "bludgeoning",
    tone: "neutral",
    impact: "light",
    fallbackTitle: "Recoil Shock",
    fallbackDescription:
      "The miss sends a punishing vibration through the grip, imposing a -1 circumstance penalty to attack rolls for 1 round.",
    weight: 2,
    tags: ["debuff"],
    effect: {
      duration: ONE_ROUND,
      components: [{
        type: "modifier",
        selector: "attack-roll",
        value: -1,
        modifierType: "circumstance",
        predicate: []
      }]
    }
  }),
  defineWeaponFumbleCard({
    id: "bludgeoning-fumble.rebounding-guard",
    localizationKey: "ReboundingGuardFumble",
    damageType: "bludgeoning",
    tone: "serious",
    impact: "light",
    fallbackTitle: "Rebounding Guard",
    fallbackDescription:
      "The weapon rebounds out of line and leaves the attacker off-guard for 1 round.",
    weight: 2,
    tags: ["control"],
    effect: {
      duration: ONE_ROUND,
      components: [{ type: "condition", slug: "off-guard" }]
    }
  }),
  defineWeaponFumbleCard({
    id: "bludgeoning-fumble.numb-arms",
    localizationKey: "NumbArms",
    damageType: "bludgeoning",
    tone: "serious",
    impact: "moderate",
    fallbackTitle: "Numb Arms",
    fallbackDescription:
      "The impact travels back through weapon and arms, leaving the attacker enfeebled 1 for 1 round.",
    weight: 1,
    tags: ["debuff"],
    filters: {
      excludedSourceTraits: ["incorporeal", "ooze"]
    },
    effect: {
      duration: ONE_ROUND,
      components: [{ type: "condition", slug: "enfeebled", value: 1 }]
    }
  }),
  defineWeaponFumbleCard({
    id: "bludgeoning-fumble.dust-in-the-eyes",
    localizationKey: "DustInTheEyes",
    damageType: "bludgeoning",
    tone: "dramatic",
    impact: "moderate",
    fallbackTitle: "Dust in the Eyes",
    fallbackDescription:
      "The wild impact throws up dust, splinters, or sparks and leaves the attacker dazzled for 1 round.",
    weight: 1,
    tags: ["control", "senses"],
    effect: {
      duration: ONE_ROUND,
      components: [{ type: "condition", slug: "dazzled" }]
    }
  }),
  defineWeaponFumbleCard({
    id: "bludgeoning-fumble.ground-wins",
    localizationKey: "GroundWins",
    damageType: "bludgeoning",
    tone: "dramatic",
    impact: "strong",
    fallbackTitle: "The Ground Wins",
    fallbackDescription:
      "The missed melee blow drags the attacker's balance down with it, knocking them prone.",
    weight: 1,
    tags: ["control", "melee"],
    filters: {
      attackTraits: ["melee"],
      excludedSourceTraits: ["incorporeal"]
    },
    effect: {
      duration: ONE_ROUND,
      components: [{ type: "condition", slug: "prone" }]
    }
  }),
  defineWeaponFumbleCard({
    id: "bludgeoning-fumble.heavy-recovery",
    localizationKey: "HeavyRecovery",
    damageType: "bludgeoning",
    tone: "neutral",
    impact: "light",
    fallbackTitle: "Heavy Recovery",
    fallbackDescription: "The weapon's weight drags the attacker behind the fight, reducing all Speeds by 5 feet for 1 round.",
    weight: 2,
    tags: ["movement"],
    filters: {"excludedSourceTraits": ["incorporeal"]},
    effect: { duration: ONE_ROUND, components: [{ type: "movement", movementType: "all", value: -5, modifierType: "circumstance" }] }
  }),
  defineWeaponFumbleCard({
    id: "bludgeoning-fumble.jarring-miss",
    localizationKey: "JarringMiss",
    damageType: "bludgeoning",
    tone: "serious",
    impact: "moderate",
    fallbackTitle: "Jarring Miss",
    fallbackDescription: "The failed impact shakes the attacker's senses, imposing a -1 circumstance penalty to Perception and Reflex saves for 1 round.",
    weight: 1,
    tags: ["debuff", "perception"],
    effect: { duration: ONE_ROUND, components: [{ type: "modifier", selector: ["perception", "reflex"], value: -1, modifierType: "circumstance", predicate: [] }] }
  }),
  defineWeaponFumbleCard({
    id: "bludgeoning-fumble.overcommitted-smash",
    localizationKey: "OvercommittedSmash",
    damageType: "bludgeoning",
    tone: "dramatic",
    impact: "moderate",
    fallbackTitle: "Overcommitted Smash",
    fallbackDescription: "The attacker's whole frame follows the miss, leaving them clumsy 1 for 1 round.",
    weight: 1,
    tags: ["debuff"],
    filters: {"excludedSourceTraits": ["incorporeal"]},
    effect: { duration: ONE_ROUND, components: [{ type: "condition", slug: "clumsy", value: 1 }] }
  }),
  defineWeaponFumbleCard({
    id: "bludgeoning-fumble.rattled-guard",
    localizationKey: "RattledGuardFumble",
    damageType: "bludgeoning",
    tone: "serious",
    impact: "light",
    fallbackTitle: "Rattled Guard",
    fallbackDescription: "The rebound shakes weapon and defense out of alignment, imposing a -1 circumstance penalty to AC for 1 round.",
    weight: 2,
    tags: ["defense", "debuff"],
    effect: { duration: ONE_ROUND, components: [{ type: "modifier", selector: "ac", value: -1, modifierType: "circumstance", predicate: [] }] }
  }),
  defineWeaponFumbleCard({
    id: "bludgeoning-fumble.crushing-recoil",
    localizationKey: "CrushingRecoil",
    damageType: "bludgeoning",
    tone: "dramatic",
    impact: "strong",
    fallbackTitle: "Crushing Recoil",
    fallbackDescription: "The missed blow punishes the attacker with its own force, leaving them enfeebled 1 and off-guard for 1 round.",
    weight: 1,
    tags: ["control", "debuff"],
    filters: {"excludedSourceTraits": ["incorporeal", "ooze"]},
    effect: { duration: ONE_ROUND, components: [{ type: "condition", slug: "enfeebled", value: 1 }, { type: "condition", slug: "off-guard" }] }
  }),
  defineWeaponFumbleCard({
    id: "bludgeoning-fumble.dead-weight", localizationKey: "DeadWeight", damageType: "bludgeoning",
    tone: "serious", impact: "strong", fallbackTitle: "Dead Weight",
    fallbackDescription: "The weapon's momentum turns to dead weight, leaving the attacker slowed 1 for 1 round.",
    weight: 1, tags: ["control"],
    effect: { duration: ONE_ROUND, components: [{ type: "condition", slug: "slowed", value: 1 }] }
  }),
  defineWeaponFumbleCard({
    id: "bludgeoning-fumble.rebound-shock", localizationKey: "ReboundShock", damageType: "bludgeoning",
    tone: "dramatic", impact: "moderate", fallbackTitle: "Rebound Shock",
    fallbackDescription: "The blow rebounds through arms and shoulders, leaving the attacker enfeebled 1 for 1 round.",
    weight: 1, tags: ["debuff"], filters: { excludedSourceTraits: ["incorporeal", "ooze"] },
    effect: { duration: ONE_ROUND, components: [{ type: "condition", slug: "enfeebled", value: 1 }] }
  }),
  defineWeaponFumbleCard({
    id: "bludgeoning-fumble.shattered-footing", localizationKey: "ShatteredFooting", damageType: "bludgeoning",
    tone: "neutral", impact: "light", fallbackTitle: "Shattered Footing",
    fallbackDescription: "The miss pounds the attacker's stance apart, reducing all Speeds by 10 feet for 1 round.",
    weight: 2, tags: ["movement"], filters: { excludedSourceTraits: ["incorporeal"] },
    effect: { duration: ONE_ROUND, components: [{ type: "movement", movementType: "all", value: -10, modifierType: "circumstance" }] }
  }),
  defineWeaponFumbleCard({
    id: "bludgeoning-fumble.ringing-skull", localizationKey: "RingingSkull", damageType: "bludgeoning",
    tone: "dramatic", impact: "moderate", fallbackTitle: "Ringing Skull",
    fallbackDescription: "The recoil rattles the attacker's senses, leaving them dazzled for 1 round.",
    weight: 1, tags: ["senses", "control"], filters: { excludedSourceTraits: ["incorporeal", "mindless", "ooze"] },
    effect: { duration: ONE_ROUND, components: [{ type: "condition", slug: "dazzled" }] }
  }),
  defineWeaponFumbleCard({
    id: "bludgeoning-fumble.caved-in-guard", localizationKey: "CavedInGuard", damageType: "bludgeoning",
    tone: "serious", impact: "moderate", fallbackTitle: "Caved-In Guard",
    fallbackDescription: "The heavy miss caves in the attacker's own defense, leaving them off-guard and imposing a -1 circumstance penalty to Reflex saves for 1 round.",
    weight: 1, tags: ["defense", "debuff"],
    effect: { duration: ONE_ROUND, components: [{ type: "condition", slug: "off-guard" }, { type: "modifier", selector: "reflex", value: -1, modifierType: "circumstance", predicate: [] }] }
  }),
  defineWeaponFumbleCard({
    id: "bludgeoning-fumble.weighted-past-center", localizationKey: "WeightedPastCenter", damageType: "bludgeoning",
    tone: "neutral", impact: "light", fallbackTitle: "Weighted Past Center",
    fallbackDescription: "The weapon's weight carries the attacker beyond their guard, leaving them off-guard for 1 round.",
    weight: 2, tags: ["control"],
    effect: { duration: ONE_ROUND, components: [{ type: "condition", slug: "off-guard" }] }
  }),
  defineWeaponFumbleCard({
    id: "bludgeoning-fumble.stumbling-recovery", localizationKey: "StumblingRecovery", damageType: "bludgeoning",
    tone: "serious", impact: "moderate", fallbackTitle: "Stumbling Recovery",
    fallbackDescription: "Recovering the heavy weapon costs the attacker their footing, reducing all Speeds by 10 feet for 1 round.",
    weight: 1, tags: ["movement", "recovery"],
    effect: { duration: ONE_ROUND, components: [{ type: "movement", movementType: "all", value: -10, modifierType: "circumstance" }] }
  }),
  defineWeaponFumbleCard({
    id: "bludgeoning-fumble.jarred-guard", localizationKey: "JarredGuard", damageType: "bludgeoning",
    tone: "serious", impact: "moderate", fallbackTitle: "Jarred Guard",
    fallbackDescription: "The failed impact jars the attacker's arms and guard, imposing a -1 circumstance penalty to attack rolls and AC for 1 round.",
    weight: 1, tags: ["debuff", "defense"],
    effect: { duration: ONE_ROUND, components: [{ type: "modifier", selector: ["attack-roll", "ac"], value: -1, modifierType: "circumstance", predicate: [] }] }
  }),
  defineWeaponFumbleCard({
    id: "bludgeoning-fumble.recoil-through-the-bones", localizationKey: "RecoilThroughTheBones", damageType: "bludgeoning",
    tone: "dramatic", impact: "strong", fallbackTitle: "Recoil Through the Bones",
    fallbackDescription: "The full recoil travels back through the attacker, leaving them enfeebled 1 and imposing a -1 circumstance penalty to Fortitude saves for 1 round.",
    weight: 1, tags: ["debuff", "recovery"], filters: { excludedSourceTraits: ["construct", "elemental", "incorporeal", "ooze", "undead"] },
    effect: { duration: ONE_ROUND, components: [{ type: "condition", slug: "enfeebled", value: 1 }, { type: "modifier", selector: "fortitude", value: -1, modifierType: "circumstance", predicate: [] }] }
  }),
  defineWeaponFumbleCard({
    id: "bludgeoning-fumble.dust-cloud", localizationKey: "DustCloud", damageType: "bludgeoning",
    tone: "dramatic", impact: "moderate", fallbackTitle: "Dust Cloud",
    fallbackDescription: "The miss pulverizes nearby debris, imposing a -1 circumstance penalty to Perception checks for 1 round.",
    weight: 1, tags: ["senses", "recovery"],
    effect: { duration: ONE_ROUND, components: [{ type: "modifier", selector: "perception", value: -1, modifierType: "circumstance", predicate: [] }] }
  })
,
  defineWeaponFumbleCard({
    id: "bludgeoning-fumble.hammered-stance",
    localizationKey: "HammeredStance",
    damageType: "bludgeoning",
    tone: "dramatic",
    impact: "strong",
    fallbackTitle: "Hammered Stance",
    fallbackDescription: "The weapon’s weight drives the attacker out of alignment, leaving them clumsy 1 and off-guard for 1 round.",
    weight: 1,
    tags: ["control", "debuff"],
    effect: {
      duration: ONE_ROUND,
      components: [
        {
          "type": "condition",
          "slug": "clumsy",
          "value": 1
        },
        {
          "type": "condition",
          "slug": "off-guard"
        }
      ]
    }
  }),
  defineWeaponFumbleCard({
    id: "bludgeoning-fumble.numbing-rebound",
    localizationKey: "NumbingRebound",
    damageType: "bludgeoning",
    tone: "serious",
    impact: "moderate",
    fallbackTitle: "Numbing Rebound",
    fallbackDescription: "A violent rebound deadens the attacker\’s arms, imposing a -1 circumstance penalty to Athletics checks for 1 round.",
    weight: 1,
    tags: ["recoil", "debuff"],
    effect: {
      duration: ONE_ROUND,
      components: [
        {
          "type": "modifier",
          "selector": "athletics",
          "value": -1,
          "modifierType": "circumstance",
          "predicate": []
        }
      ]
    }
  }),
  defineWeaponFumbleCard({
    id: "bludgeoning-fumble.cracked-focus",
    localizationKey: "CrackedFocus",
    damageType: "bludgeoning",
    tone: "serious",
    impact: "moderate",
    fallbackTitle: "Cracked Focus",
    fallbackDescription: "The miss lands with a jarring crash, imposing a -1 circumstance penalty to Will saves and spell attack rolls for 1 round.",
    weight: 1,
    tags: ["recoil", "debuff"],
    effect: {
      duration: ONE_ROUND,
      components: [
        {
          "type": "modifier",
          "selector": [
            "will",
            "spell-attack-roll"
          ],
          "value": -1,
          "modifierType": "circumstance",
          "predicate": []
        }
      ]
    }
  }),
  defineWeaponFumbleCard({
    id: "bludgeoning-fumble.dragging-weight",
    localizationKey: "DraggingWeight",
    damageType: "bludgeoning",
    tone: "neutral",
    impact: "light",
    fallbackTitle: "Dragging Weight",
    fallbackDescription: "The heavy weapon pulls the attacker through a poor recovery, imposing a -1 circumstance penalty to Acrobatics checks and Reflex saves for 1 round.",
    weight: 2,
    tags: ["movement", "recovery"],
    effect: {
      duration: ONE_ROUND,
      components: [
        {
          "type": "modifier",
          "selector": ["acrobatics", "reflex"],
          "value": -1,
          "modifierType": "circumstance",
          "predicate": []
        }
      ]
    }
  }),
  defineWeaponFumbleCard({
    id: "bludgeoning-fumble.echoing-miss",
    localizationKey: "EchoingMiss",
    damageType: "bludgeoning",
    tone: "dramatic",
    impact: "strong",
    fallbackTitle: "Echoing Miss",
    fallbackDescription: "The impact erupts beside the attacker and overwhelms their senses, leaving them dazzled and deafened for 1 round.",
    weight: 1,
    tags: ["senses", "recoil"],
    effect: {
      duration: ONE_ROUND,
      components: [
        {
          "type": "condition",
          "slug": "dazzled"
        },
        {
          "type": "condition",
          "slug": "deafened"
        }
      ]
    }
  }),
  defineWeaponFumbleCard({
    id: "bludgeoning-fumble.heavy-drift",
    localizationKey: "HeavyDrift",
    damageType: "bludgeoning",
    tone: "neutral",
    impact: "light",
    fallbackTitle: "Heavy Drift",
    fallbackDescription: "The weapon’s weight drags the attacker off line, imposing a -1 circumstance penalty to Acrobatics checks for 1 round.",
    weight: 2,
    tags: ["control"],
    effect: { duration: ONE_ROUND, components: [{ type: "modifier", selector: "acrobatics", value: -1, modifierType: "circumstance", predicate: [] }] }
  }),
  defineWeaponFumbleCard({
    id: "bludgeoning-fumble.rebound-numbness",
    localizationKey: "ReboundNumbness",
    damageType: "bludgeoning",
    tone: "serious",
    impact: "moderate",
    fallbackTitle: "Rebound Numbness",
    fallbackDescription: "The impact rebounds through the attacker’s arms, imposing a -1 circumstance penalty to Fortitude saves for 1 round.",
    weight: 1,
    tags: ["debuff"],
    filters: { excludedSourceTraits: ["construct", "elemental", "incorporeal", "ooze", "undead"] },
    effect: { duration: ONE_ROUND, components: [{ type: "modifier", selector: "fortitude", value: -1, modifierType: "circumstance", predicate: [] }] }
  }),
  defineWeaponFumbleCard({
    id: "bludgeoning-fumble.staggered-recovery",
    localizationKey: "StaggeredRecovery",
    damageType: "bludgeoning",
    tone: "neutral",
    impact: "moderate",
    fallbackTitle: "Staggered Recovery",
    fallbackDescription: "The missed swing pulls the attacker into a stumbling recovery, imposing a -1 circumstance penalty to Reflex saves for 1 round.",
    weight: 1,
    tags: ["movement", "control"],
    effect: { duration: ONE_ROUND, components: [{ type: "modifier", selector: "reflex", value: -1, modifierType: "circumstance", predicate: [] }] }
  }),
  defineWeaponFumbleCard({
    id: "bludgeoning-fumble.ringing-grip",
    localizationKey: "RingingGrip",
    damageType: "bludgeoning",
    tone: "serious",
    impact: "moderate",
    fallbackTitle: "Ringing Grip",
    fallbackDescription: "The weapon shudders violently in the attacker’s hands, imposing a -1 circumstance penalty to attack rolls and Reflex saves for 1 round.",
    weight: 1,
    tags: ["debuff"],
    effect: { duration: ONE_ROUND, components: [{ type: "modifier", selector: ["attack-roll", "reflex"], value: -1, modifierType: "circumstance", predicate: [] }] }
  }),
  defineWeaponFumbleCard({
    id: "bludgeoning-fumble.collapsing-stance",
    localizationKey: "CollapsingStance",
    damageType: "bludgeoning",
    tone: "dramatic",
    impact: "strong",
    fallbackTitle: "Collapsing Stance",
    fallbackDescription: "The attacker’s own momentum buckles its stance, imposing a -1 circumstance penalty to Athletics checks and Reflex saves for 1 round.",
    weight: 1,
    tags: ["control", "debuff"],
    effect: { duration: ONE_ROUND, components: [{ type: "modifier", selector: ["athletics", "reflex"], value: -1, modifierType: "circumstance", predicate: [] }] }
  })
]);
