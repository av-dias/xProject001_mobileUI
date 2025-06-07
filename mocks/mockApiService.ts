import { ApiService } from "../service/apiService";
import { activityListHandlerMock } from "./data/activity/activityList";
import { favoriteListHandlerMock } from "./data/favorites/favoriteList";
import { reviewListHandlerMock } from "./data/review/reviewList";
export const baseUrl = "localhost";

export const mockApi: ApiService = {
  activityApi: {
    list: () => activityListHandlerMock,
  },
  favoriteApi: {
    list: () => favoriteListHandlerMock,
    details: () => {},
  },
  reviewApi: {
    list: () => reviewListHandlerMock,
  },
};
