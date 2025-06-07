import { ApiService } from "./apiService";

export const baseUrl = "localhost";

/**
 * ApiRoutes should have all api routes implemented
 * This will enforce a unified interface
 */
export const api: ApiService = {
  activityApi: {
    list: () => {},
  },
  favoriteApi: {
    list: () => {},
    details: () => {},
  },
  reviewApi: {
    list: () => {},
  },
};
