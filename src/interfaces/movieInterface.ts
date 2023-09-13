export interface IMovie {
    id: number;
    title: string;
    overview: string;
    vote_average: number;
    genre_ids: number[];
    poster_path: string
}