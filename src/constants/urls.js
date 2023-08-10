const baseURL=process.env.APP_REACT_API

const cars='/cars'

const urls = {
    cars: {
        base: cars,
        byId: (id) => `${cars}/${id}`
    }
}
export {
    baseURL,
    urls
}