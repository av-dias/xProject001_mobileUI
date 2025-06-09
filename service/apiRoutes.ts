// TODO: We will need to assign the baseUrl
// using the Settings page
export const baseUrl = "localhost";

export interface ActivityRoute {
  activities: () => string;
}

export interface FavoriteRoute {
  favorites: () => string;
  favorite: () => string;
}

export interface ReviewRoute {
  reviews: () => string;
}

export interface ApiRoute {
  activityApi: ActivityRoute;
  favoriteApi: FavoriteRoute;
  reviewApi: ReviewRoute;
}

/**
 * ApiRoutes should have all api routes implemented
 * This will enforce a unified interface
 */
export const apiRoute = (server: string): ApiRoute => ({
  activityApi: {
    activities: () => `http://${server}:8080/activities/`,
  },
  favoriteApi: {
    favorites: () => server + "/favorities/",
    favorite: () => server + "/favorite/",
  },
  reviewApi: {
    reviews: () => server + "/reviews/",
  },
});
