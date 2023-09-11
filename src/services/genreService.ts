import {apiService, IRes} from "./apiService";
import {IGenre} from "../interfaces";
import {urls} from "../constants";

const genreService = {
    getAll(): IRes<IGenre[]> {
        return apiService.get(urls.genres)
    }
};

export {
    genreService
}