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
  favorites: () => Promise<any[]>;
  favorite: () => any;
  favoriteFolders: () => Promise<any[]>;
  addFavorite: (id: string, folder: string) => Promise<void>;
  addFavoriteFolder: (folder: string) => Promise<void>;
  removeFavorite: (id: string) => Promise<void>;
  addFavoriteToFolder: (id: string, folder: string) => Promise<void>;
  folderedFavorites: () => Promise<any[]>;
}

export interface ReviewService {
  reviews: () => any[];
}

export const apiService = (server: string): ApiService => ({
  activityService: ActivityApiService(server),
  favoriteService: FavoriteApiService(server),
  reviewService: ReviewApiService(server),
});
