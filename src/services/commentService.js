import {apiService} from "./apiService";
import {urlsEndpoint} from "../constants";

export const commentService = {
    getAll: () => apiService.get(urlsEndpoint.comments.base)
}