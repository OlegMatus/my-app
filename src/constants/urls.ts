const baseURL = process.env.REACT_APP_API

const movies = '/movies'
const genres = '/genres'

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
