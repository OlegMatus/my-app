import {jsonApiService} from "./jsonApiService";
import {urlEndpoints} from "../constants/urlEndpoint";

class PostService {
    getAll() {
        return jsonApiService.get(urlEndpoints.json.posts)
    }
}

export const postService = new PostService();