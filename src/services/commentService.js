import {jsonApiService} from "./jsonApiService";
import {urlEndpoints} from "../constants/urlEndpoint";

class CommentService{
    getAll(){
        return jsonApiService.get(urlEndpoints.json.comments)
    }
}
export const commentService = new CommentService();