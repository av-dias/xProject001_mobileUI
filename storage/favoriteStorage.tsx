import { getFromStorage, saveToStorage } from "./baseStorage";

export const getFavoriteFolders = async (key: string) => {
  let favorites = await getRawFavorites(key);
  return Object.keys(favorites);
};

export const getRawFavorites = async (key: string) => {
  let favorites = await getFromStorage(key);
  if (!favorites) return {};
  try {
    return JSON.parse(favorites);
  } catch (e) {
    console.error("Failed to parse favorites JSON:", e);
    return {};
  }
};

export const getFolderWithFavorites = async (key: string) => {
  let favorites = await getFromStorage(key);
  if (!favorites) return [];
  let favJSON;
  try {
    favJSON = JSON.parse(favorites);
  } catch (e) {
    console.error("Failed to parse favorites JSON:", e);
    return [];
  }
  let favoritesByFolder: { activityList: any; id: string; name: string }[] = [];
  Object.keys(favJSON).forEach((folder) => {
    favoritesByFolder.push({
      activityList: favJSON[folder],
      id: folder,
      name: folder,
    });
  });
  return favoritesByFolder;
};

export const getAllUniqueFavorites = async (key: string) => {
  let favorites = await getRawFavorites(key);
  let keys = await getFavoriteFolders(key);
  let listOfUniqueFavorites: any[] = [];

  keys.forEach((folderKey) => {
    listOfUniqueFavorites = listOfUniqueFavorites.concat(
      favorites[folderKey] || []
    );
  });

  return listOfUniqueFavorites;
};

export const addItemToFavoriteFolder = async (
  key: string,
  item: any,
  folder: string
) => {
  let favorites = await getRawFavorites(key);
  favorites[folder] = [...(favorites[folder] || []), item];
  await saveToStorage(key, JSON.stringify(favorites));
};

export const addFavoriteFolder = async (key: string, folder: string) => {
  let favorites = await getRawFavorites(key);
  favorites[folder] = [];
  await saveToStorage(key, JSON.stringify(favorites));
};

/*
 * Removes favorite item from all folders
 */
export const removeFavoriteToFolder = async (key: string, id: string) => {
  let favorites = await getRawFavorites(key);
  let keys = await getFavoriteFolders(key);
  keys.forEach((folderKey) => {
    favorites[folderKey] = favorites[folderKey].filter(
      (favId: string) => favId !== id
    );
  });

  await saveToStorage(key, JSON.stringify(favorites));
};
