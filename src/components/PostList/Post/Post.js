import React from 'react';
import {useOutletContext} from "react-router-dom";

const Post = ({post}) => {
    const {userId, id, title, body} = post;
    const {commentId} = useOutletContext();
    return (
        <div>
            <h2>Comment: {commentId}</h2>
           <div>userId: {userId}</div>
           <div>id: {id}</div>
           <div>title: {title}</div>
           <div>body: {body}</div>
        </div>
    );
};

export{Post};