import {apiService, IRes} from "./apiService";
import {IMovie} from "../interfaces";
import {urls} from "../constants";

const movieService = {
    getAll(): IRes<IMovie[]> {
        return apiService.get(urls.movies.base)
    }
};

export {
    movieService
}