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
  })
]);
