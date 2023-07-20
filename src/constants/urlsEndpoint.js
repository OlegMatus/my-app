const baseURL = 'https://jsonplaceholder.typicode.com'

const Endpoints = {
    TODOS: '/todos',
    ALBUMS: '/albums',
    COMMENTS: '/comments',
    POSTS: '/comments/posts'
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
        byId: (id) => `${Endpoints.COMMENTS}/${id}`
    },
    posts: {
        base: Endpoints.POSTS,
    },
}
export {baseURL, urlsEndpoint}