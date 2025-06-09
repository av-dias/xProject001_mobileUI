import { mockApiService } from "../mocks/mockApiService";
import { apiService, ApiService } from "./apiServices";

export const activeApi = (
  isServerOnline: boolean,
  server: string
): ApiService => (isServerOnline ? apiService(server) : mockApiService);
