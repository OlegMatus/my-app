const baseURL = 'https://jsonplaceholder.typicode.com'

const Endpoints = {
    TODOS: '/todos',
    ALBUMS: '/albums',
    COMMENTS: '/comments',
    POSTS: '/posts'
};
const urlsEndpoint = {
    todos: {
        base: Endpoints.TODOS,
    },
    albums: {
        base: Endpoints.ALBUMS,
    },
    comments: {
        base: Endpoints.COMMENTS,
    },
    posts: {
        base: Endpoints.POSTS,
        byId: (id) => `${Endpoints.POSTS}/${id}`

    },
}
export {baseURL, urlsEndpoint}