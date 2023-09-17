import {apiService, IRes} from "./apiService";
import {IGenre} from "../interfaces";
import {urls} from "../constants";

const genreService = {
    getAll(): IRes<IGenre> {
        return apiService.get(urls.genres.base)
    },
    getById(id: number): IRes<IGenre> {
        return apiService.get(urls.genres.byId(id))
    }
};

export {
    genreService
}