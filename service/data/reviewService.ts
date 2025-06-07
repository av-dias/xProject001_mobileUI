import { activeApi } from "../serviceSelector";

export const ReviewService = () => {
  const serviceApi = activeApi;

  const list = () => {
    return serviceApi.reviewApi.list();
  };

  return { list };
};
