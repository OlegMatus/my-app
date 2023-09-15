import React from 'react';
import {FC, PropsWithChildren} from 'react';

import {IDetail} from "../../interfaces/movieDetailsInterface";

interface IProps extends PropsWithChildren {
    movieDetail: IDetail,
}

const MovieInfo: FC<IProps> = ({movieDetail}) => {
    const {title, overview, vote_average, release_date} = movieDetail;
    return (
        <div>
            <div>title: {title}</div>
            <div>overview: {overview}</div>
            <div>vote_average: {vote_average}</div>
            <div>release_date: {release_date}</div>
        </div>
    );
};

export {MovieInfo};