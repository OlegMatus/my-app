import {apiService, IRes} from "./apiService";
import {IMovie, IPagination} from "../interfaces";
import {urls} from "../constants";
import {IDetail} from "../interfaces/movieDetailsInterface";

const movieService = {
    getAll(page: number): IRes<IPagination<IMovie>> {
        return apiService.get(urls.movies.base, {params: {page}})
    },
    getById(id: number): IRes<IDetail> {
        return apiService.get(urls.movies.byId(id))
    }
};

export {
    movieService
}