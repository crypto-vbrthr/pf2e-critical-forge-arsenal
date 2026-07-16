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
  })
]);
