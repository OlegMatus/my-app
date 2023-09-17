const baseURL = "https://api.themoviedb.org/3"
// const baseURL = process.env.REACT_APP_API_URL
const posterURL = "https://image.tmdb.org/t/p/w500"

const movies = '/discover/movie'
const genres = '/genre/movie/list'
// const search = '/search/movie'

const urls = {
    movies: {
        base: movies,
        byId: (id: number): string => `${movies}/${id}`
    },
    genres: {
        base: genres,
        byId: (id: number): string => `${genres}/${id}`
    }
};

export {
    baseURL,
    urls,
    posterURL
}
