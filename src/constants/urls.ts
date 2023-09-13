const baseURL = process.env.REACT_APP_API

const movies = '/discover/movie'
const genres = '/genre/movie/list'
const search = '/search/movie'

const urls = {
    movies: {
        base: movies,
        byId: (id: number): string => `${movies}/${id}`
    },
    genres
};

export {
    baseURL,
    urls
}
