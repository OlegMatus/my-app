import axios, {AxiosResponse} from "axios";

import {baseURL} from "../constants";

type IRes<DATA> = Promise<AxiosResponse<DATA>>

const apiService = axios.create({
    baseURL,
    params: {
        api_key: '2e1ef303076ae4515565a3813a7e3e0f'
    }
});
apiService.interceptors.request.use(config => {
    const accessToken = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyZTFlZjMwMzA3NmFlNDUxNTU2NWEzODEzYTdlM2UwZiIsInN1YiI6IjY0YzEwMGJiNjA2MjBhMDEzYjBmMDZkOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.G4gEGQMtD1FJAU_PgPUHA4Kn7n1xOXDg36L10qrtvCc"
    if (accessToken){
        config.headers.Authorization = `Bearer ${accessToken}`
    }
    return config
})


export type {
    IRes
}

export {
    apiService
}