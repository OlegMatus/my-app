import React from 'react';
import {useNavigate} from "react-router-dom";

const Comment = ({comment, setCommentId}) => {
    const {postId, id, name, email, body} = comment;
    const navigate = useNavigate();
    const handleClick =()=>{
    navigate(`posts/${postId}`)
       setCommentId(id)
    }
    return (
        <div  onClick={handleClick} style={{
            width: '50%',
            backgroundColor: "linen",
            display: "flex",
            flexFlow: "column",
            border: "solid grey",
            borderRadius: '10px',
            margin: '10px',
        }}>
            <div>postId: {postId}</div>
            <div>id: {id}</div>
            <div>name: {name}</div>
            <div>email: {email}</div>
            <div>body: {body}</div>
        </div>
    );
};

export default Comment;