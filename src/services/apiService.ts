import axios, {AxiosResponse} from "axios";
import {baseURL} from "../constants";
import {Dispatch, SetStateAction} from "react";

type IRes <DATA> = Promise<AxiosResponse<DATA>>
type ITrig <S> = Dispatch<SetStateAction<S>>
type IFUpdate <S> = Dispatch<SetStateAction<S>>
const apiService = axios.create({baseURL});

export type {
    IRes,
    ITrig,
    IFUpdate
}
export {
    apiService,
}