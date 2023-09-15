const baseURL = "https://api.themoviedb.org/3"
const posterURL = "https://image.tmdb.org/t/p/w500"

const movies = '/discover/movie'
const genres = '/genre/movie/list'
// const search = '/search/movie'

const urls = {
    movies: {
        base: movies,
        byId: (movie_id: number): string => `${movies}/${movie_id}`,
    },
    genres
};

export {
    baseURL,
    urls,
    posterURL
}
