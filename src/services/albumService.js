import {apiService} from "./apiService";
import {urlsEndpoint} from "../constants";

export const albumService = {
    getAll: () => apiService.get(urlsEndpoint.albums.base)
}