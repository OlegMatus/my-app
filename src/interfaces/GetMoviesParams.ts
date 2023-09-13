import {IMovie} from "./movieInterface";

export interface IMoviesParams{
    page: number;
    results: IMovie[];
    total_pages: number;
}