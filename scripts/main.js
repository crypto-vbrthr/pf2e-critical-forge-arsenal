import {
  buildCriticalForgeExpandedPacks
} from "./packs/critical-forge-expanded.js";
import {
  isArsenalPackEnabled,
  MODULE_ID,
  registerArsenalSettings
} from "./settings.js";

let extensionController = null;
let settingsRegistered = false;
let refreshQueued = false;
let packsRegistered = false;

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

function currentPacks() {
  if (!settingsRegistered) return [];
  return buildCriticalForgeExpandedPacks(isArsenalPackEnabled);
}

function registerCurrentPacks({ replace = false } = {}) {
  if (!extensionController || !settingsRegistered) return [];

  const registered = extensionController.registerPacks(currentPacks(), { replace });
  packsRegistered = true;
  console.info(`${MODULE_ID} | Registered Critical Forge card packs.`, {
    packIds: registered.map((pack) => pack.id),
    enabledPackIds: registered.filter((pack) => pack.enabled !== false).map((pack) => pack.id),
    cardCount: registered.reduce((sum, pack) => sum + pack.cards.length, 0)
  });
  return registered;
}

function registerWhenReady() {
  if (!extensionController || !settingsRegistered || packsRegistered) return [];
  return registerCurrentPacks();
}

function queuePackRefresh() {
  if (!extensionController || !settingsRegistered || refreshQueued) return;
  refreshQueued = true;

  queueMicrotask(() => {
    refreshQueued = false;
    try {
      registerCurrentPacks({ replace: true });
      if (game.user?.isGM) {
        ui.notifications.info(game.i18n.localize("PF2ECFA.Notifications.PackSelectionUpdated"));
      }
    } catch (error) {
      notifyRegistrationFailure(error);
    }
  });
}

Hooks.once("init", () => {
  try {
    registerArsenalSettings(queuePackRefresh);
    settingsRegistered = true;
    registerWhenReady();
  } catch (error) {
    notifyRegistrationFailure(error);
  }
});

Hooks.once("pf2eCriticalForgeReady", (forge) => {
  try {
    const forModule = forge?.cards?.extensions?.forModule;
    if (typeof forModule !== "function") {
      throw new Error(
        "The active PF2E Critical Forge version does not expose cards.extensions.forModule()."
      );
    }

    extensionController = forModule.call(forge.cards.extensions, MODULE_ID);
    if (typeof extensionController?.registerPacks !== "function") {
      throw new Error(
        "The active PF2E Critical Forge version does not expose extension.registerPacks()."
      );
    }

    registerWhenReady();
  } catch (error) {
    notifyRegistrationFailure(error);
  }
});
