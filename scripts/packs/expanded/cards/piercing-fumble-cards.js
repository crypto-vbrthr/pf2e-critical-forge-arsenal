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
  }),
  defineWeaponFumbleCard({
    id: "piercing-fumble.false-distance", localizationKey: "FalseDistance", damageType: "piercing",
    tone: "neutral", impact: "light", fallbackTitle: "False Distance",
    fallbackDescription: "The attacker misjudges the final inch and leans into empty space, leaving them off-guard for 1 round.",
    weight: 2, tags: ["control"],
    effect: { duration: ONE_ROUND, components: [{ type: "condition", slug: "off-guard" }] }
  }),
  defineWeaponFumbleCard({
    id: "piercing-fumble.locked-knee", localizationKey: "LockedKnee", damageType: "piercing",
    tone: "serious", impact: "moderate", fallbackTitle: "Locked Knee",
    fallbackDescription: "The failed lunge jars the attacker's stance, reducing land Speed by 10 feet for 1 round.",
    weight: 1, tags: ["movement", "recovery"], filters: { excludedSourceTraits: ["incorporeal", "ooze"] },
    effect: { duration: ONE_ROUND, components: [{ type: "movement", movementType: "land", value: -10, modifierType: "circumstance" }] }
  }),
  defineWeaponFumbleCard({
    id: "piercing-fumble.crossed-line", localizationKey: "CrossedLine", damageType: "piercing",
    tone: "serious", impact: "moderate", fallbackTitle: "Crossed Line",
    fallbackDescription: "The point travels across the attacker's own guard, imposing a -1 circumstance penalty to attack rolls and AC for 1 round.",
    weight: 1, tags: ["debuff", "defense"],
    effect: { duration: ONE_ROUND, components: [{ type: "modifier", selector: ["attack-roll", "ac"], value: -1, modifierType: "circumstance", predicate: [] }] }
  }),
  defineWeaponFumbleCard({
    id: "piercing-fumble.numbed-fingers", localizationKey: "NumbedFingers", damageType: "piercing",
    tone: "serious", impact: "strong", fallbackTitle: "Numbed Fingers",
    fallbackDescription: "The weapon rebounds through the attacker's grip, leaving them clumsy 1 and imposing a -1 circumstance penalty to Reflex saves for 1 round.",
    weight: 1, tags: ["debuff", "recovery"], filters: { excludedSourceTraits: ["construct", "elemental", "incorporeal", "ooze", "undead"] },
    effect: { duration: ONE_ROUND, components: [{ type: "condition", slug: "clumsy", value: 1 }, { type: "modifier", selector: "reflex", value: -1, modifierType: "circumstance", predicate: [] }] }
  }),
  defineWeaponFumbleCard({
    id: "piercing-fumble.lost-point", localizationKey: "LostPoint", damageType: "piercing",
    tone: "dramatic", impact: "moderate", fallbackTitle: "Lost Point",
    fallbackDescription: "The attacker loses sight of the weapon's point amid the failed thrust, becoming dazzled for 1 round.",
    weight: 1, tags: ["senses", "recovery"],
    effect: { duration: ONE_ROUND, components: [{ type: "condition", slug: "dazzled" }] }
  })
,
  defineWeaponFumbleCard({
    id: "piercing-fumble.false-measure",
    localizationKey: "FalseMeasure",
    damageType: "piercing",
    tone: "neutral",
    impact: "moderate",
    fallbackTitle: "False Measure",
    fallbackDescription: "The attacker misjudges distance and timing, taking a -1 circumstance penalty to attack rolls and Perception for 1 round.",
    weight: 1,
    tags: ["precision", "debuff"],
    effect: {
      duration: ONE_ROUND,
      components: [
        {
          "type": "modifier",
          "selector": [
            "attack-roll",
            "perception"
          ],
          "value": -1,
          "modifierType": "circumstance",
          "predicate": []
        }
      ]
    }
  }),
  defineWeaponFumbleCard({
    id: "piercing-fumble.overextended-point",
    localizationKey: "OverextendedPoint",
    damageType: "piercing",
    tone: "dramatic",
    impact: "strong",
    fallbackTitle: "Overextended Point",
    fallbackDescription: "The thrust reaches far past safety, leaving the attacker off-guard and clumsy 1 for 1 round.",
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
          "type": "condition",
          "slug": "clumsy",
          "value": 1
        }
      ]
    }
  }),
  defineWeaponFumbleCard({
    id: "piercing-fumble.jammed-line",
    localizationKey: "JammedLine",
    damageType: "piercing",
    tone: "serious",
    impact: "moderate",
    fallbackTitle: "Jammed Line",
    fallbackDescription: "The point catches on ground, armor, or scenery, reducing the attacker’s land Speed by 10 feet for 1 round.",
    weight: 1,
    tags: ["precision", "movement"],
    effect: {
      duration: ONE_ROUND,
      components: [
        {
          "type": "movement",
          "movementType": "land",
          "value": -10,
          "modifierType": "circumstance"
        }
      ]
    }
  }),
  defineWeaponFumbleCard({
    id: "piercing-fumble.stung-wrist",
    localizationKey: "StungWrist",
    damageType: "piercing",
    tone: "serious",
    impact: "moderate",
    fallbackTitle: "Stung Wrist",
    fallbackDescription: "The failed thrust snaps back through the wrist, leaving the attacker enfeebled 1 for 1 round.",
    weight: 1,
    tags: ["precision", "debuff"],
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
  defineWeaponFumbleCard({
    id: "piercing-fumble.tunnel-vision",
    localizationKey: "TunnelVision",
    damageType: "piercing",
    tone: "dramatic",
    impact: "strong",
    fallbackTitle: "Tunnel Vision",
    fallbackDescription: "Fixation on the missed opening narrows the attacker’s awareness, leaving them dazzled and imposing a -1 circumstance penalty to Will saves for 1 round.",
    weight: 1,
    tags: ["precision", "senses", "debuff"],
    effect: {
      duration: ONE_ROUND,
      components: [
        {
          "type": "condition",
          "slug": "dazzled"
        },
        {
          "type": "modifier",
          "selector": "will",
          "value": -1,
          "modifierType": "circumstance",
          "predicate": []
        }
      ]
    }
  }),
  defineWeaponFumbleCard({
    id: "piercing-fumble.short-measure",
    localizationKey: "ShortMeasure",
    damageType: "piercing",
    tone: "neutral",
    impact: "light",
    fallbackTitle: "Short Measure",
    fallbackDescription: "The thrust falls short and exposes the attacker, leaving it off-guard for 1 round.",
    weight: 2,
    tags: ["control"],
    effect: { duration: ONE_ROUND, components: [{ type: "condition", slug: "off-guard" }] }
  }),
  defineWeaponFumbleCard({
    id: "piercing-fumble.wrenched-point",
    localizationKey: "WrenchedPoint",
    damageType: "piercing",
    tone: "serious",
    impact: "moderate",
    fallbackTitle: "Wrenched Point",
    fallbackDescription: "The weapon twists against resistance, imposing a -1 circumstance penalty to attack rolls for 1 round.",
    weight: 1,
    tags: ["debuff"],
    effect: { duration: ONE_ROUND, components: [{ type: "modifier", selector: "attack-roll", value: -1, modifierType: "circumstance", predicate: [] }] }
  }),
  defineWeaponFumbleCard({
    id: "piercing-fumble.overlong-lunge",
    localizationKey: "OverlongLunge",
    damageType: "piercing",
    tone: "dramatic",
    impact: "strong",
    fallbackTitle: "Overlong Lunge",
    fallbackDescription: "The attacker lunges beyond a stable base, reducing its land Speed by 10 feet and leaving it clumsy 1 for 1 round.",
    weight: 1,
    tags: ["movement", "debuff"],
    effect: { duration: ONE_ROUND, components: [{ type: "movement", movementType: "land", value: -10, modifierType: "circumstance" }, { type: "condition", slug: "clumsy", value: 1 }] }
  }),
  defineWeaponFumbleCard({
    id: "piercing-fumble.shaken-grip",
    localizationKey: "ShakenGrip",
    damageType: "piercing",
    tone: "serious",
    impact: "moderate",
    fallbackTitle: "Numbed Fingers",
    fallbackDescription: "A harsh vibration runs through the grip, leaving the attacker clumsy 1 for 1 round.",
    weight: 1,
    tags: ["debuff"],
    filters: { excludedTargetTraits: ["incorporeal", "ooze"] },
    effect: { duration: ONE_ROUND, components: [{ type: "condition", slug: "clumsy", value: 1 }] }
  }),
  defineWeaponFumbleCard({
    id: "piercing-fumble.broken-alignment",
    localizationKey: "BrokenAlignment",
    damageType: "piercing",
    tone: "neutral",
    impact: "moderate",
    fallbackTitle: "Lost Line",
    fallbackDescription: "The failed thrust ruins distance and timing, imposing a -1 circumstance penalty to attack rolls and Perception for 1 round.",
    weight: 1,
    tags: ["debuff", "senses"],
    effect: { duration: ONE_ROUND, components: [{ type: "modifier", selector: ["attack-roll", "perception"], value: -1, modifierType: "circumstance", predicate: [] }] }
  })
]);
