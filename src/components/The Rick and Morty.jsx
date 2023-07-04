import React from 'react';

const TheRickAndMorty = (props) => {
    const{id,name,status,species,gender,image}=props
    return (
        <div>
            <h2><b>ID</b>: {id}</h2>
            <p><b>Name</b>: {name}</p>
            <p><b>Status</b>: {status}</p>
            <p><b>Species</b>: {species}</p>
            <p><b>Gender</b>: {gender}</p>
            <img src={image} alt={name}/>
        </div>
    );
};

export default TheRickAndMorty;