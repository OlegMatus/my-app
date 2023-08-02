import axios from "axios";

import {owuBaseUrl} from "../constants/urlEndpoint";

const owuApiService = axios.create({baseURL:owuBaseUrl})
export {owuApiService}