import React from 'react';
import {FC, PropsWithChildren} from 'react';
import {IMovie} from "../interfaces";

interface IProps extends PropsWithChildren {
movie: IMovie
}

const MoviesListCard: FC<IProps> = ({movie}) => {
    const {id, title, overview, rating,genre } = movie;
    return (
        <div>
            <div>id: {id}</div>
            <div>title: {title}</div>
            <div>overview: {overview}</div>
            <div>rating: {rating}</div>
            <div>genre: {genre}</div>
        </div>
    );
};

export {MoviesListCard};