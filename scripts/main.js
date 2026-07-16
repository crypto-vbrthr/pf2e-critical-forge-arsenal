import { CRITICAL_FORGE_EXPANDED_PACK } from "./packs/critical-forge-expanded.js";

const MODULE_ID = "pf2e-critical-forge-arsenal";
let registrationAttempted = false;

function notifyRegistrationFailure(error) {
  console.error(`${MODULE_ID} | Card-pack registration failed.`, error);

  if (error?.validation) {
    console.error(`${MODULE_ID} | Critical Forge validation report:`, error.validation);
  }

  if (game.user?.isGM) {
    ui.notifications.error(
      game.i18n.localize("PF2ECFA.Notifications.RegistrationFailed"),
      { permanent: true }
    );
  }
}

Hooks.once("pf2eCriticalForgeReady", (forge) => {
  if (registrationAttempted) return;
  registrationAttempted = true;

  try {
    const forModule = forge?.cards?.extensions?.forModule;
    if (typeof forModule !== "function") {
      throw new Error(
        "The active PF2E Critical Forge version does not expose cards.extensions.forModule()."
      );
    }

    const extension = forModule.call(forge.cards.extensions, MODULE_ID);
    if (typeof extension?.registerPacks !== "function") {
      throw new Error(
        "The active PF2E Critical Forge version does not expose extension.registerPacks()."
      );
    }

    const registered = extension.registerPacks([
      CRITICAL_FORGE_EXPANDED_PACK
    ]);

    console.info(`${MODULE_ID} | Registered Critical Forge card packs.`, {
      packIds: registered.map((pack) => pack.id),
      cardCount: registered.reduce((sum, pack) => sum + pack.cards.length, 0)
    });
  } catch (error) {
    notifyRegistrationFailure(error);
  }
});
