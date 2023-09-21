import axios, {AxiosResponse} from "axios";

import {baseURL} from "../constants";

type IRes<Date> = Promise<AxiosResponse<Date>>

const apiService = axios.create({baseURL});
apiService.interceptors.request.use(request => {
    // const apiToken:string  = process.env["REACT_APP_API_TOKEN "
    const apiToken = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2YzU0YjI4MTdiOTdkZTNhMzczZTVkYzUzZmU2ZDFhYiIsInN1YiI6IjY0YzEwMGJiNjA2MjBhMDEzYjBmMDZkOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ZSRKGDUNjyDbiZoYsFroiH9LVQKVwMrBZsUnzlSqnMI"
        request.headers.Authorization = `Bearer ${apiToken}`
    return request
})

export type {
    IRes
}

export {
    apiService
}