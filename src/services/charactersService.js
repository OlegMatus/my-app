import {apiService} from "./apiService";
import {urls} from "../constants";

const charactersService = {
    getByIds:(iDs) => apiService.get(urls.characters.byIds(iDs))
}
export {
    charactersService
}