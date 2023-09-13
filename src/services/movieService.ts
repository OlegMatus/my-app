import {apiService, IRes} from "./apiService";
import {IMovie} from "../interfaces";
import {urls} from "../constants";

const movieService = {
    getAll(page: number): IRes<IMovie[]> {
        return apiService.get(urls.movies.base, {params: {page}})
    }
};

export {
    movieService
}