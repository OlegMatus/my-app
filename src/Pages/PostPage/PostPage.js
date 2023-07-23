import React from 'react';
import PostList from "../../components/PostList/PostList";
import style from './PostPage.module.css'
const PostPage = () => {
    return (
        <div className={style.PostPage}>
          <PostList/>
        </div>
    );
};

export default PostPage;