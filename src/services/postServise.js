import {apiService} from "./apiService";
import {urlsEndpoint} from "../constants";

export const postService = {
    getById: (id) => apiService.get(urlsEndpoint.posts.byId(id))
}