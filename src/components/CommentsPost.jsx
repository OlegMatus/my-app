import React from 'react';
import {useLocation} from "react-router-dom";

const CommentsPost = ({comment}) => {
    const {state: {id}} = useLocation();
    const {name, email} = comment;

    return (
        <div>
            <div>CommentOfPost {id}</div>
            <div>name: {name}</div>
            <div>email: {email}</div>
        </div>
    );
};

export default CommentsPost;