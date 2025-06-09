import { apiRoute } from "../apiRoutes";

export const FavoriteApiService = (server: string) => {
  // TODO - use Axios logic
  const list = () => {
    apiRoute(server).favoriteApi.favorites();
    return [];
  };

  const details = () => {
    apiRoute(server).favoriteApi.favorite();
    return {};
  };

  return { list, details };
};
