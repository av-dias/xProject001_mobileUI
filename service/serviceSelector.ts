import { mockApi } from "../mocks/mockApiService";
import { ApiService } from "./apiService";
import { api } from "./apiRoutes";

// Assume this is set somewhere dynamically
export let serverIsOnline = false;

export const activeApi: ApiService = serverIsOnline ? api : mockApi;
