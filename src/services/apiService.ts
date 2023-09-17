import axios, {AxiosResponse} from "axios";

import {baseURL} from "../constants";

type IRes<Date> = Promise<AxiosResponse<Date>>

const apiService = axios.create({baseURL});
apiService.interceptors.request.use(request => {
    // const apiToken:string  = process.env["REACT_APP_API_TOKEN "]
    const apiToken = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyZTFlZjMwMzA3NmFlNDUxNTU2NWEzODEzYTdlM2UwZiIsInN1YiI6IjY0YzEwMGJiNjA2MjBhMDEzYjBmMDZkOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.G4gEGQMtD1FJAU_PgPUHA4Kn7n1xOXDg36L10qrtvCc"
        request.headers.Authorization = `Bearer ${apiToken}`
    return request
})

export type {
    IRes
}

export {
    apiService
}