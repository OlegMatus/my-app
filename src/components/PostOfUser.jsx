import React from 'react';
import {useNavigate} from "react-router-dom";

const PostOfUser = ({post}) => {
// const navigate = useNavigate();
    const {title, body} = post;
    return (
        <div>
            <ul>
                <li><b>title: {title}</b></li>
                <li>body: {body}</li>
            </ul>
            {/*<button onClick={() => navigate('post.id',{state: {...post}})}>show post</button>*/}
        </div>
    );
};

export default PostOfUser;