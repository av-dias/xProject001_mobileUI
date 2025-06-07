/**
 * ApiService should have all api routes implemented
 * This will enforce a unified interface
 */
export interface ApiService {
  activityApi: ActivityApi;
  favoriteApi: FavoriteApi;
  reviewApi: ReviewApi;
}

export interface ActivityApi {
  list: () => [];
}

export interface FavoriteApi {
  list: () => [];
  details: () => [];
}

export interface ReviewApi {
  list: () => [];
}
