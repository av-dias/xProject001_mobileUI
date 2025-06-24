import storage from "../storage/storageKeys";
import { getFromStorage, saveToStorage } from "../storage/baseStorage";
import { DEFAULT_FAVORITE_FOLDER } from "../constants/enums";

const UPDATE_VERSION = "4";

export const checkUpdates = async () => {
  let currentVersion = await getFromStorage(storage.devUpdates);
  let favorites = await getFromStorage(storage.favorite);

  if (currentVersion != UPDATE_VERSION) {
    if (favorites) {
      let favJSON = JSON.parse(favorites);
      if (!favJSON[DEFAULT_FAVORITE_FOLDER]) {
        console.log("==> Applying dev updates...");
        let newFavorites = { favorites: favJSON };
        await saveToStorage(storage.favorite, JSON.stringify(newFavorites));
        await saveToStorage(storage.devUpdates, JSON.stringify(UPDATE_VERSION));
      } else {
        console.log("==> No dev updates required... Favorites already exist");
      }
    } else {
      console.log("==> Favorites is empty... Creating favorites...");
      let newFavorites = { [DEFAULT_FAVORITE_FOLDER]: [] };
      await saveToStorage(storage.favorite, JSON.stringify(newFavorites));
      await saveToStorage(storage.devUpdates, JSON.stringify(UPDATE_VERSION));
    }
  } else {
    console.log("==> No dev updates required...");
  }
};
