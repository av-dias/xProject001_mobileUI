import storage from "../constants/storage";
import { getFromStorage, saveToStorage } from "./localStorage";

const UPDATE_VERSION = "4";

export const checkUpdates = async () => {
  let currentVersion = await getFromStorage(storage.devUpdates);
  let favorites = await getFromStorage(storage.favorite);

  if (currentVersion != UPDATE_VERSION) {
    if (favorites) {
      let favJSON = JSON.parse(favorites);
      if (!favJSON.favorites) {
        console.log("==>Applying dev updates...");
        let newFavorites = { favorites: favJSON };
        await saveToStorage(storage.favorite, JSON.stringify(newFavorites));
        await saveToStorage(storage.devUpdates, JSON.stringify(UPDATE_VERSION));
      } else {
        console.log("==>No dev updates required...");
      }
    } else {
      console.log("==>No dev updates required...");
    }
  } else {
    console.log("==>No dev updates required...");
  }
};
