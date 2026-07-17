import {
  defineWeaponFumbleCard,
  DURATIONS
} from "../card-factory.js";

const { ONE_ROUND } = DURATIONS;

export const PIERCING_FUMBLE_CARDS = Object.freeze([
  defineWeaponFumbleCard({
    id: "piercing-fumble.overextended-lunge",
    localizationKey: "OverextendedLunge",
    damageType: "piercing",
    tone: "neutral",
    impact: "light",
    fallbackTitle: "Overextended Lunge",
    fallbackDescription:
      "The failed thrust reaches beyond safe balance and leaves the attacker off-guard for 1 round.",
    weight: 2,
    tags: ["control"],
    effect: {
      duration: ONE_ROUND,
      components: [{ type: "condition", slug: "off-guard" }]
    }
  }),
  defineWeaponFumbleCard({
    id: "piercing-fumble.lost-line",
    localizationKey: "LostLine",
    damageType: "piercing",
    tone: "serious",
    impact: "light",
    fallbackTitle: "Lost Line",
    fallbackDescription:
      "The point wanders from its line, imposing a -1 circumstance penalty to attack rolls and Perception for 1 round.",
    weight: 2,
    tags: ["debuff", "perception"],
    effect: {
      duration: ONE_ROUND,
      components: [{
        type: "modifier",
        selector: ["attack-roll", "perception"],
        value: -1,
        modifierType: "circumstance",
        predicate: []
      }]
    }
  }),
  defineWeaponFumbleCard({
    id: "piercing-fumble.locked-shoulder",
    localizationKey: "LockedShoulder",
    damageType: "piercing",
    tone: "serious",
    impact: "moderate",
    fallbackTitle: "Locked Shoulder",
    fallbackDescription:
      "The failed thrust jars arm and shoulder, leaving the attacker enfeebled 1 for 1 round.",
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
    id: "piercing-fumble.misjudged-distance",
    localizationKey: "MisjudgedDistance",
    damageType: "piercing",
    tone: "dramatic",
    impact: "strong",
    fallbackTitle: "Misjudged Distance",
    fallbackDescription:
      "A badly judged step spoils both distance and recovery, reducing all Speeds by 5 feet and imposing a -1 circumstance penalty to Reflex saves for 1 round.",
    weight: 1,
    tags: ["movement", "debuff"],
    filters: {
      excludedSourceTraits: ["incorporeal"]
    },
    effect: {
      duration: ONE_ROUND,
      components: [
        {
          type: "movement",
          movementType: "all",
          value: -5,
          modifierType: "circumstance"
        },
        {
          type: "modifier",
          selector: "reflex",
          value: -1,
          modifierType: "circumstance",
          predicate: []
        }
      ]
    }
  }),
  defineWeaponFumbleCard({
    id: "piercing-fumble.sightline-snared",
    localizationKey: "SightlineSnared",
    damageType: "piercing",
    tone: "dramatic",
    impact: "moderate",
    fallbackTitle: "Sightline Snared",
    fallbackDescription:
      "Point, shaft, string, or sleeve crosses the attacker's sightline, leaving them dazzled for 1 round.",
    weight: 1,
    tags: ["control", "senses"],
    effect: {
      duration: ONE_ROUND,
      components: [{ type: "condition", slug: "dazzled" }]
    }
  }),
  defineWeaponFumbleCard({
    id: "piercing-fumble.twisted-wrist",
    localizationKey: "TwistedWrist",
    damageType: "piercing",
    tone: "serious",
    impact: "moderate",
    fallbackTitle: "Twisted Wrist",
    fallbackDescription: "The thrust turns against the wrist, leaving the attacker clumsy 1 for 1 round.",
    weight: 1,
    tags: ["debuff"],
    filters: {"excludedSourceTraits": ["incorporeal", "ooze"]},
    effect: { duration: ONE_ROUND, components: [{ type: "condition", slug: "clumsy", value: 1 }] }
  }),
  defineWeaponFumbleCard({
    id: "piercing-fumble.broken-measure",
    localizationKey: "BrokenMeasure",
    damageType: "piercing",
    tone: "neutral",
    impact: "light",
    fallbackTitle: "Broken Measure",
    fallbackDescription: "The failed point attack ruins distance and timing, imposing a -1 circumstance penalty to AC for 1 round.",
    weight: 2,
    tags: ["defense", "debuff"],
    effect: { duration: ONE_ROUND, components: [{ type: "modifier", selector: "ac", value: -1, modifierType: "circumstance", predicate: [] }] }
  }),
  defineWeaponFumbleCard({
    id: "piercing-fumble.snagged-point",
    localizationKey: "SnaggedPoint",
    damageType: "piercing",
    tone: "dramatic",
    impact: "moderate",
    fallbackTitle: "Snagged Point",
    fallbackDescription: "The point catches on armor, terrain, or its own line, reducing all Speeds by 5 feet for 1 round.",
    weight: 1,
    tags: ["movement"],
    filters: {"excludedSourceTraits": ["incorporeal"]},
    effect: { duration: ONE_ROUND, components: [{ type: "movement", movementType: "all", value: -5, modifierType: "circumstance" }] }
  }),
  defineWeaponFumbleCard({
    id: "piercing-fumble.faltering-focus",
    localizationKey: "FalteringFocus",
    damageType: "piercing",
    tone: "serious",
    impact: "light",
    fallbackTitle: "Faltering Focus",
    fallbackDescription: "The missed line leaves the attacker second-guessing every opening, imposing a -1 circumstance penalty to Will saves for 1 round.",
    weight: 2,
    tags: ["debuff", "mental-disruption"],
    filters: {"excludedSourceTraits": ["mindless"]},
    effect: { duration: ONE_ROUND, components: [{ type: "modifier", selector: "will", value: -1, modifierType: "circumstance", predicate: [] }] }
  }),
  defineWeaponFumbleCard({
    id: "piercing-fumble.full-commitment",
    localizationKey: "FullCommitment",
    damageType: "piercing",
    tone: "dramatic",
    impact: "strong",
    fallbackTitle: "Full Commitment",
    fallbackDescription: "The attacker commits everything to empty space and is slowed 1 for 1 round.",
    weight: 1,
    tags: ["control"],
    effect: { duration: ONE_ROUND, components: [{ type: "condition", slug: "slowed", value: 1 }] }
  }),
  defineWeaponFumbleCard({
    id: "piercing-fumble.reckless-lunge", localizationKey: "RecklessLunge", damageType: "piercing",
    tone: "dramatic", impact: "strong", fallbackTitle: "Overextended Lunge",
    fallbackDescription: "The attacker lunges beyond their balance and falls prone.",
    weight: 1, tags: ["control", "melee"], filters: { attackTraits: ["melee"], excludedSourceTraits: ["incorporeal"] },
    effect: { duration: ONE_ROUND, components: [{ type: "condition", slug: "prone" }] }
  }),
  defineWeaponFumbleCard({
    id: "piercing-fumble.wrong-distance", localizationKey: "WrongDistance", damageType: "piercing",
    tone: "neutral", impact: "light", fallbackTitle: "Wrong Distance",
    fallbackDescription: "The attacker badly misjudges reach and timing, imposing a -1 circumstance penalty to attack rolls for 1 round.",
    weight: 2, tags: ["debuff", "precision"],
    effect: { duration: ONE_ROUND, components: [{ type: "modifier", selector: "attack-roll", value: -1, modifierType: "circumstance", predicate: [] }] }
  }),
  defineWeaponFumbleCard({
    id: "piercing-fumble.sprained-wrist", localizationKey: "SprainedWrist", damageType: "piercing",
    tone: "serious", impact: "moderate", fallbackTitle: "Twisted Wrist",
    fallbackDescription: "The failed thrust twists the attacker's wrist and leaves them enfeebled 1 for 1 round.",
    weight: 1, tags: ["debuff"], filters: { excludedSourceTraits: ["incorporeal", "ooze"] },
    effect: { duration: ONE_ROUND, components: [{ type: "condition", slug: "enfeebled", value: 1 }] }
  }),
  defineWeaponFumbleCard({
    id: "piercing-fumble.crossed-eyes", localizationKey: "CrossedEyes", damageType: "piercing",
    tone: "dramatic", impact: "moderate", fallbackTitle: "Crossed Eyes",
    fallbackDescription: "The point flashes back across the attacker's sightline, leaving them dazzled for 1 round.",
    weight: 1, tags: ["senses", "control"],
    effect: { duration: ONE_ROUND, components: [{ type: "condition", slug: "dazzled" }] }
  }),
  defineWeaponFumbleCard({
    id: "piercing-fumble.stuck-in-the-moment", localizationKey: "StuckInTheMoment", damageType: "piercing",
    tone: "serious", impact: "strong", fallbackTitle: "Stuck in the Moment",
    fallbackDescription: "The point catches and the attacker freezes around it, leaving them slowed 1 for 1 round.",
    weight: 1, tags: ["control", "precision"], filters: { excludedSourceTraits: ["incorporeal"] },
    effect: { duration: ONE_ROUND, components: [{ type: "condition", slug: "slowed", value: 1 }] }
  })
]);
