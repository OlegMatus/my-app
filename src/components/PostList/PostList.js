import React, {useEffect, useState} from 'react';
import {Post} from "./Post/Post";
import {postService} from "../../services";
import {useParams} from "react-router-dom";

const PostList = () => {
    const {postId} = useParams();
    const [post, setPost] = useState([null]);
    useEffect(() => {
        postService.getById(postId).then(({data}) => setPost(data))
    }, [postId])
    return (
        <div>
            {post&&<Post post={post}/>};
        </div>
    );
};

export default PostList;