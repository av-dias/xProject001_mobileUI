// services/apiClient.ts
import axios, { InternalAxiosRequestConfig } from "axios";

const apiClient = axios.create({
  baseURL: "", // Replace with your base URL
});

/**
 * Interceptor to handle request configuration.
 * @param config - The Axios request configuration
 * @returns The modified request configuration
 */
apiClient.interceptors.request.use(
  async (config: InternalAxiosRequestConfig<any>) => {
    return config;
    /**
     * TODO: Add Token handling logic here
     * Store the token in base storage
     * Create tokenStorage
     */
  }
);

// Retry logic on 401
/**
 * Interceptor to handle error responses.
 * @param error - The Axios error object
 * @return The original request if retry is needed, otherwise the error
 */
apiClient.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (error.response?.status === 401 && !originalRequest._retry) {
      /**
       * If the request fails with a 401 status,
       * it indicates that the user is not authenticated.
       * implement a token refresh logic here
       */
    }

    return apiClient(originalRequest);
  }
);

export default apiClient;
