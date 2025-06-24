import { apiRoute } from "../apiRoutes";

export const FavoriteApiService = (server: string) => {
  // TODO - use Axios logic
  const favorites = async () => {
    apiRoute(server).favoriteApi.favorites();
    return [];
  };

  const favorite = () => {
    apiRoute(server).favoriteApi.favorite();
    return {};
  };

  const favoriteFolders = async () => {
    apiRoute(server).favoriteApi.favoriteFolders();
    return [];
  };

  const addFavorite = async (id: string) => {
    apiRoute(server).favoriteApi.addFavorite();
    return;
  };

  const addFavoriteFolder = async (folder: string) => {
    apiRoute(server).favoriteApi.addFavoriteFolder();
    return;
  };

  const removeFavorite = async (id: string) => {
    apiRoute(server).favoriteApi.removeFavorite();
    return;
  };

  const addFavoriteToFolder = async (id: string, folder: string) => {
    apiRoute(server).favoriteApi.removeFavorite();
    return;
  };

  const folderedFavorites = async () => {
    apiRoute(server).favoriteApi.folderedFavorites();
    return [];
  };

  return {
    favorites,
    favorite,
    favoriteFolders,
    addFavorite,
    addFavoriteFolder,
    removeFavorite,
    addFavoriteToFolder,
    folderedFavorites,
  };
};
