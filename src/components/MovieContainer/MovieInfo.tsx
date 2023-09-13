import React from 'react';
import {FC, PropsWithChildren} from 'react';

import {IMovie} from "../../interfaces";

interface IProps extends PropsWithChildren {
movie: IMovie
}

const MovieInfo: FC<IProps> = ({movie}) => {
    const {title, overview, vote_average} = movie;
    return (
        <div>
            <div>title: {title}</div>
            <div>overview: {overview}</div>
            <div>vote_average: {vote_average}</div>
        </div>
    );
};

export {MovieInfo};