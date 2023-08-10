import React from 'react';
import style from './Episode.module.css'
const Episode = ({episode}) => {
    const {id, name ,episode: chapter, characters} = episode;
    return (
        <div className={style.Episode}>
            <div>id: {id}</div>
            <div>name: {name}</div>
            <div>chapter: {chapter}</div>
        </div>
    );
};

export default Episode;