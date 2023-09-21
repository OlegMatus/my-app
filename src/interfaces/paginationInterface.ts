import {IMovie} from "./movieInterface";

export interface IPagination<DATA> {
    id: number,
    // genre_ids: number,
    currentMovie: IMovie,
    page: number,
    total_pages: number,
    size: number,
    prev: string,
    next: string,
    results: DATA[]
}