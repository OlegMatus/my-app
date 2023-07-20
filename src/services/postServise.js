import {apiService} from "./apiService";
import {urlsEndpoint} from "../constants/urlsEndpoint";

export const postService = {
    getAll: (id) => apiService.get(urlsEndpoint.posts.byId(id))
}