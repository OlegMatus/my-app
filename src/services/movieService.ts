import {apiService, IRes} from "./apiService";
import {IMovie, IPagination} from "../interfaces";
import {urls} from "../constants";

const movieService = {
    getAll(page: number, size: number): IRes<IPagination<IMovie>> {
        return apiService.get(urls.movies.base, {params: {page, size}})
    },
    getById(movieId: number): IRes<IMovie> {
        return apiService.get(urls.movies.byId(movieId))
    },
    getByGenres(genre_ids: number, page: number): IRes<IMovie> {
        return apiService.get(urls.movies.base,{params: {with_genres: genre_ids, page}})
    }
};

export {
    movieService
}