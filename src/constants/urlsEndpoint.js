const baseURL = 'https://jsonplaceholder.typicode.com'

const Endpoints = {
    TODOS: '/todos',
    ALBUMS: '/albums',
};
const urlsEndpoint = {
    todos: {
        base: Endpoints.TODOS,
        // byId: (id) => `${Endpoints.TODOS}/${id} `
    },
    albums: {
        base: Endpoints.ALBUMS,
    },
}
export {baseURL, urlsEndpoint}