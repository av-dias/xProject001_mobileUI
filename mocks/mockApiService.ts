import { ApiService } from "../service/apiServices";
import {
  addFavoriteFolder,
  addItemToFavoriteFolder,
  getAllUniqueFavorites,
  getFavoriteFolders,
  getFolderWithFavorites,
  removeFavoriteToFolder,
} from "../storage/favoriteStorage";
import storageKeys from "../storage/storageKeys";
export const baseUrl = "localhost";

// Activity Mocks
import { activityListHandlerMock } from "./data/activity/activityList";
// Review Mocks
import { reviewListHandlerMock } from "./data/review/reviewList";

export const mockApiService: ApiService = {
  activityService: {
    activities: () => Promise.resolve(activityListHandlerMock),
  },
  favoriteService: {
    favorites: () =>
      Promise.resolve(getAllUniqueFavorites(storageKeys.favorite)),
    favorite: () => {},
    favoriteFolders: () =>
      Promise.resolve(getFavoriteFolders(storageKeys.favorite)),
    addFavorite: (id: string, folder) =>
      Promise.resolve(
        addItemToFavoriteFolder(storageKeys.favorite, id, folder)
      ),
    addFavoriteFolder: (folder: string) =>
      Promise.resolve(addFavoriteFolder(storageKeys.favorite, folder)),
    removeFavorite: (id: string) =>
      Promise.resolve(removeFavoriteToFolder(storageKeys.favorite, id)),
    addFavoriteToFolder: (id: string, folder: string) =>
      Promise.resolve(
        addItemToFavoriteFolder(storageKeys.favorite, id, folder)
      ),
    folderedFavorites: () =>
      Promise.resolve(getFolderWithFavorites(storageKeys.favorite)),
  },
  reviewService: {
    reviews: () => reviewListHandlerMock,
  },
};
