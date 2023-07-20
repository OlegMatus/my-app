import React from 'react';

const Album = ({album}) => {
    const {userId, id, title} = album;
    return (
        <div style={{
            width: '50%',
            backgroundColor: "lightblue",
            display: "flex",
            flexFlow: "column",
            border: "solid grey",
            borderRadius: '10px',
            margin: '10px',
            justifyContent: "center"
        }}>
            <div>userId: {userId}</div>
            <div>id: {id}</div>
            <div>title: {title}</div>
        </div>
    );
};

export default Album;