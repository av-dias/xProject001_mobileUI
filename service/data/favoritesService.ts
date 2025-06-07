import { activeApi } from "../serviceSelector";

export const FavoriteService = () => {
  const serviceApi = activeApi;

  const list = () => {
    return serviceApi.favoriteApi.list();
  };

  const details = () => {
    return serviceApi.favoriteApi.details;
  };

  return { list, details };
};
