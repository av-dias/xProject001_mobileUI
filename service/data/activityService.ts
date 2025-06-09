import { apiRoute } from "../apiRoutes";

export const ActivityApiService = (server: string) => {
  const list = async () => {
    // TODO - use Axios logic
    const response = await fetch(apiRoute(server).activityApi.activities());

    if (!response.ok) {
      console.log("Failed to fetch activities");
      return [];
    }

    const data: [] = await response.json();
    return data;
  };

  return { list };
};
