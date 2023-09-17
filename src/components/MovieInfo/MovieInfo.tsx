import React, {useEffect} from 'react';
import {FC, PropsWithChildren} from 'react';

import {IMovie} from "../../interfaces";
import {movieActions} from "../../redux";
import {useAppDispatch} from "../../hooks";
import {useSearchParams} from "react-router-dom";

interface IProps extends PropsWithChildren {
    movieDetail: IMovie,
}

const MovieInfo: FC<IProps> = ({movieDetail}) => {
    const dispatch = useAppDispatch();
    const [query, ] = useSearchParams(null);
    useEffect(() => {
        dispatch(movieActions.getByGenres({with_genres: query.get('with_genres')}))
    }, [query,dispatch]);

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