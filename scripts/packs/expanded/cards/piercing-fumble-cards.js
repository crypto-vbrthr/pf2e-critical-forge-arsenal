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
  })
]);
