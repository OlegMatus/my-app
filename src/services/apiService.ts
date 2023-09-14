import axios, {AxiosResponse} from "axios";

import {baseURL} from "../constants";

type IRes<Date> = Promise<AxiosResponse<Date>>

const apiService = axios.create({
    baseURL,
    // params: {
    //     include_adult: false,
    //     include_video: false,
    //     sort_by: 'popularity.desc',
    //     api_key: '2e1ef303076ae4515565a3813a7e3e0f'
    // }
});
apiService.interceptors.request.use(request => {
    const token:string  = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyZTFlZjMwMzA3NmFlNDUxNTU2NWEzODEzYTdlM2UwZiIsInN1YiI6IjY0YzEwMGJiNjA2MjBhMDEzYjBmMDZkOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.G4gEGQMtD1FJAU_PgPUHA4Kn7n1xOXDg36L10qrtvCc"
        request.headers.Authorization = `Bearer ${token}`
    return request
})

export type {
    IRes
}

export {
    apiService
}