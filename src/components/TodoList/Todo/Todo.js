import React from 'react';

const Todo = ({todo}) => {
    const {userId, id, title, completed} = todo;
    return (
        <div style={{
            width: '50%',
            backgroundColor: "lightgreen",
            display: "flex",
            flexFlow: "column",
            border: "solid grey",
            borderRadius: '10px',
            margin: '10px',
        }}>
            <div>userId: {userId}</div>
            <div>id: {id}</div>
            <div>title: {title}</div>
            <div>completed: {completed}</div>
        </div>
    );
};

export default Todo;