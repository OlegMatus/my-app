import axios from "axios";
import {baseURL} from "../constants/urlsEndpoint";

export const apiService = axios.create({baseURL: baseURL});