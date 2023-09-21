import React, {useEffect} from 'react';
import {FC, PropsWithChildren} from 'react';
import {useParams} from "react-router-dom";

import {useAppDispatch, useAppSelector} from "../hooks";
import {movieActions} from "../redux";
import {MovieInfo} from "../components";

interface IProps extends PropsWithChildren {

}

const MovieDetailsPage: FC<IProps> = () => {
    const dispatch = useAppDispatch();
    const {currentMovie, isLoading} = useAppSelector(state => state.movies);
    const { id } = useParams<{ id: string }>();

    useEffect(() => {
        dispatch(movieActions.getMovieById({id: +id}))
    }, [id,dispatch]);

    if (isLoading) {
        return <div>Loading...</div>;
    }
    return (

        <div>
            {currentMovie && <MovieInfo movieDetail={currentMovie}/>}
        </div>
    );
};

export {MovieDetailsPage};