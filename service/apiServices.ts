import { ActivityApiService } from "./data/activityService";
import { FavoriteApiService } from "./data/favoritesService";
import { ReviewApiService } from "./data/reviewService";

/**
 * ApiService should have all api routes implemented
 * This will enforce a unified interface
 */
export interface ApiService {
  activityService: ActivityService;
  favoriteService: FavoriteService;
  reviewService: ReviewService;
}

export interface ActivityService {
  list: () => Promise<any[]>;
}

export interface FavoriteService {
  list: () => any[];
  details: () => any;
}

export interface ReviewService {
  list: () => any[];
}

export const apiService = (server: string): ApiService => ({
  activityService: ActivityApiService(server),
  favoriteService: FavoriteApiService(server),
  reviewService: ReviewApiService(server),
});
