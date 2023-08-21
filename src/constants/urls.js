const baseURL=process.env.REACT_APP_API

const episodes = '/episode'
const characters = '/character'
const urls = {
    episodes,
    characters: {
        byIds: (ids) => `${characters}/${ids}`
    }
}
export {
    baseURL,
    urls
}