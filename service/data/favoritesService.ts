import { apiRoute } from "../apiRoutes";

export const FavoriteApiService = (server: string) => {
  // TODO - use Axios logic
  const favorites = () => {
    apiRoute(server).favoriteApi.favorites();
    return [];
  };

  const favorite = () => {
    apiRoute(server).favoriteApi.favorite();
    return {};
  };

  return { favorites, favorite };
};
