import { apiRoute } from "../apiRoutes";

export const ReviewApiService = (server: string) => {
  const list = () => {
    // TODO - use Axios logic
    apiRoute(server).reviewApi.reviews();
    return [];
  };

  return { list };
};
