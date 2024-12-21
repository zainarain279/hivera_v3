import logger from "./utils/logger_2.js";
import { settings } from "./config.js";

// Inline JSON data
const apiData = {
  clayton: "https://tonclayton.fun/api/aT83M535-617h-5deb-a17b-6a335a67ffd5",
  pineye: "https://api2.pineye.io/api",
  memex: "https://memex-preorder.memecore.com",
  pocketfi: "https://bot.pocketfi.org",
  kat: "https://apiii.katknight.io/api",
  pinai: "https://prod-api.pinai.tech",
  hivera: "https://app.hivera.org",
  midas: "https://api-tg-app.midas.app/api",
  copyright:
    "If api changes please contact Airdrop Hunter Super Speed tele team (https://t.me/AirdropScript6) for more information and updates!| Have any issues, please contact: https://t.me/AirdropScript6",
};

async function checkBaseUrl() {
  logger.info("Checking API...");
  
  if (settings.ADVANCED_ANTI_DETECTION) {
    const result = getBaseApi();
    if (result.endpoint) {
      logger.info("No change in API!", "success");
      return result;
    }
  }

  return {
    endpoint: settings.BASE_URL,
    message: apiData.copyright,
  };
}

function getBaseApi() {
  if (apiData?.hivera) {
    return { endpoint: apiData.hivera, message: apiData.copyright };
  } else {
    return {
      endpoint: null,
      message: apiData.copyright,
    };
  }
}

export { checkBaseUrl };