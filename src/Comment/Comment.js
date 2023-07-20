import React from 'react';

const Comment = ({comment}) => {
    const {postId, id, name, email, body} = comment;
    return (
        <div style={{
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