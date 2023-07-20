import React, {useEffect, useState} from 'react';
import Post from "../Post/Post";
import {postService} from "../../services/postServise";

const PostList = () => {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        postService.getAll().then(({data}) => setPosts(data))
    }, [])
    return (
        <div>
            {posts.map(post => <Post key={post.id} post={post}/>)}
        </div>
    );
};

export default PostList;