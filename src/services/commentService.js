import {apiService} from "./apiService";
import {urlsEndpoint} from "../constants/urlsEndpoint";

export const commentService = {
    getAll: () => apiService.get(urlsEndpoint.comments.base)
}