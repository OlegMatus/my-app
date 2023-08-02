import axios from "axios";
import {jsonBaseUrl} from "../constants/urlEndpoint";

const jsonApiService = axios.create({baseURL: jsonBaseUrl});
export {jsonApiService}
