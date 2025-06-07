import { activeApi } from "../serviceSelector";

export const MapPageService = () => {
  const serviceApi = activeApi;

  const list = () => {
    return serviceApi.activityApi.list();
  };

  return { list };
};
