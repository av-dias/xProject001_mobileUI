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
  activities: () => Promise<any[]>;
}

export interface FavoriteService {
  favorites: () => any[];
  favorite: () => any;
}

export interface ReviewService {
  reviews: () => any[];
}

export const apiService = (server: string): ApiService => ({
  activityService: ActivityApiService(server),
  favoriteService: FavoriteApiService(server),
  reviewService: ReviewApiService(server),
});
