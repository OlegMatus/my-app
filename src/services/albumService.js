import {apiService} from "./apiService";
import {urlsEndpoint} from "../constants/urlsEndpoint";

export const albumService = {
    getAll: () => apiService.get(urlsEndpoint.albums.base)
}