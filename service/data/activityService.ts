import apiClient from "../apiClient";
import { apiRoute } from "../apiRoutes";

export const ActivityApiService = (server: string) => {
  const activities = async () => {
    // TODO - use Axios logic
    const response = await apiClient.get(
      apiRoute(server).activityApi.activities()
    );

    if (!response.status || response.status !== 200) {
      console.log("Failed to fetch activities");
      return [];
    }

    const data: [] = await response.data;
    return data;
  };

  return { activities };
};
