import { ApiService } from "../service/apiServices";
export const baseUrl = "localhost";

// Activity Mocks
import { activityListHandlerMock } from "./data/activity/activityList";
// Favorites Mocks
import { favoriteListHandlerMock } from "./data/favorites/favoriteList";
// Review Mocks
import { reviewListHandlerMock } from "./data/review/reviewList";

export const mockApiService: ApiService = {
  activityService: {
    list: () => Promise.resolve(activityListHandlerMock),
  },
  favoriteService: {
    list: () => favoriteListHandlerMock,
    details: () => {},
  },
  reviewService: {
    list: () => reviewListHandlerMock,
  },
};
