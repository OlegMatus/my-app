import {owuApiService} from "./owuApiService";
import {urlEndpoints} from "../constants/urlEndpoint";

class CarService{
    getAll(){
        return owuApiService.get(urlEndpoints.owu.cars)
    }
}
export const carService = new CarService();