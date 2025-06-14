import { apiRoute } from "../apiRoutes";

export const ReviewApiService = (server: string) => {
  const reviews = () => {
    // TODO - use Axios logic
    apiRoute(server).reviewApi.reviews();
    return [];
  };

  return { reviews };
};
