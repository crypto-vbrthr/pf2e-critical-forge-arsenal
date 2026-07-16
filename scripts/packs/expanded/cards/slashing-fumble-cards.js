import {
  defineWeaponFumbleCard,
  DURATIONS
} from "../card-factory.js";

const { ONE_ROUND } = DURATIONS;

export const SLASHING_FUMBLE_CARDS = Object.freeze([
  defineWeaponFumbleCard({
    id: "slashing-fumble.overdrawn-arc",
    localizationKey: "OverdrawnArc",
    damageType: "slashing",
    tone: "neutral",
    impact: "light",
    fallbackTitle: "Overdrawn Arc",
    fallbackDescription:
      "The missed cut travels too far and leaves the attacker off-guard for 1 round.",
    weight: 2,
    tags: ["control"],
    effect: {
      duration: ONE_ROUND,
      components: [{ type: "condition", slug: "off-guard" }]
    }
  }),
  defineWeaponFumbleCard({
    id: "slashing-fumble.twisted-edge",
    localizationKey: "TwistedEdge",
    damageType: "slashing",
    tone: "serious",
    impact: "light",
    fallbackTitle: "Twisted Edge",
    fallbackDescription:
      "The weapon turns awkwardly in the grip, imposing a -1 circumstance penalty to attack rolls for 1 round.",
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
    id: "slashing-fumble.open-flank",
    localizationKey: "ArsenalOpenFlank",
    damageType: "slashing",
    tone: "dramatic",
    impact: "moderate",
    fallbackTitle: "Open Flank",
    fallbackDescription:
      "The sweeping miss carries the guard aside, imposing a -1 circumstance penalty to AC for 1 round.",
    weight: 1,
    tags: ["defense", "debuff"],
    effect: {
      duration: ONE_ROUND,
      components: [{
        type: "modifier",
        selector: "ac",
        value: -1,
        modifierType: "circumstance",
        predicate: []
      }]
    }
  }),
  defineWeaponFumbleCard({
    id: "slashing-fumble.tangled-follow-through",
    localizationKey: "TangledFollowThrough",
    damageType: "slashing",
    tone: "serious",
    impact: "moderate",
    fallbackTitle: "Tangled Follow-Through",
    fallbackDescription:
      "Weapon, clothing, and footwork disagree at once, leaving the attacker clumsy 1 for 1 round.",
    weight: 1,
    tags: ["control"],
    filters: {
      excludedSourceTraits: ["incorporeal"]
    },
    effect: {
      duration: ONE_ROUND,
      components: [{ type: "condition", slug: "clumsy", value: 1 }]
    }
  }),
  defineWeaponFumbleCard({
    id: "slashing-fumble.lost-tempo",
    localizationKey: "SlashingLostTempo",
    damageType: "slashing",
    tone: "dramatic",
    impact: "strong",
    fallbackTitle: "Lost Tempo",
    fallbackDescription:
      "The failed cut consumes the attacker's rhythm, leaving them slowed 1 for 1 round.",
    weight: 1,
    tags: ["control"],
    effect: {
      duration: ONE_ROUND,
      components: [{ type: "condition", slug: "slowed", value: 1 }]
    }
  })
]);
