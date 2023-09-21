import React, {useEffect} from 'react';
import {FC, PropsWithChildren} from 'react';

import {IMovie} from "../../interfaces";
import {posterURL} from "../../constants";
import {useAppSelector} from "../../hooks";

interface IProps extends PropsWithChildren {
    movieDetail: IMovie,
}

const MovieInfo: FC<IProps> = ({movieDetail}) => {
    const {poster_path} = useAppSelector(state => state.movies);
    useEffect(() => {

    }, []);

    const {title, overview, vote_average, release_date} = movieDetail;
    return (
        <div>
            <img src={`${posterURL}/${poster_path}`} alt={poster_path} />

            <div>title: {title}</div>
            <div>overview: {overview}</div>
            <div>vote_average: {vote_average}</div>
            <div>release_date: {release_date}</div>

        </div>
    );
};

export {MovieInfo};