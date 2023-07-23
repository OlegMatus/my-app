import {apiService} from "./apiService";
import {urlsEndpoint} from "../constants";

export const todService = {
    getAll: () => apiService.get(urlsEndpoint.todos.base)
}