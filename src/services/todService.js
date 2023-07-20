import {apiService} from "./apiService";
import {urlsEndpoint} from "../constants/urlsEndpoint";

export const todService = {
    getAll: () => apiService.get(urlsEndpoint.todos.base)
}