import { getFromStorage, saveToStorage } from "./localStorage";

export const getFavoriteFolders = async (key: string) => {
  let favorites = await getRawFavorites(key);
  return Object.keys(favorites);
};

export const getRawFavorites = async (key: string) => {
  let favorites = await getFromStorage(key);
  if (!favorites) return { favorites: [] };
  let favJSON = JSON.parse(favorites);
  return favJSON;
};

export const getFolderWithFavorites = async (key: string) => {
  let favorites = await getFromStorage(key);
  if (!favorites) return { favorites: [] };
  let favJSON = JSON.parse(favorites);
  let favoritesByFolder: { activityList: any; id: string; name: string; }[] = [];
  Object.keys(favJSON).forEach((fav) => {
    favoritesByFolder.push({ activityList: favJSON[fav], id: fav, name: fav });
  });
  return favoritesByFolder;
};

export const getAllUniqueFavorites = async (key: string) => {
  let favorites = await getRawFavorites(key);
  let keys = await getFavoriteFolders(key);
  let listOfUnirqueFavorites: any[] = [];

  keys.map((key) => (listOfUnirqueFavorites = listOfUnirqueFavorites.concat(favorites[key])));

  return listOfUnirqueFavorites;
};

export const addItemToFavoriteFolder = async (key: string, item: any, folder: string) => {
  let favorites = await getRawFavorites(key);
  favorites[folder] = [...favorites[folder], item];
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
  keys.forEach((key) => (favorites[key] = favorites[key].filter((favItem: { id: string }) => favItem.id != id)));

  await saveToStorage(key, JSON.stringify(favorites));
};

/*
  { Favorites: []}
  { Summer:    []}
*/
