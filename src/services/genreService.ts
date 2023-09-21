import {apiService, IRes} from "./apiService";
import {IGenre, IPagination} from "../interfaces";
import {urls} from "../constants";

const genreService = {
    getAll(page: number): IRes<IPagination<IGenre>> {
        return apiService.get(urls.genres.base, {params: {page}})
    }
};

export {
    genreService
}