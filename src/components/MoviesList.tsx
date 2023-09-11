import React, {useEffect} from 'react';

import {useAppDispatch, useAppSelector} from "../hooks";
import {MoviesListCard} from "./MoviesListCard";
import {movieActions} from "../redux";


const MoviesList = () => {
    const {movies} = useAppSelector(state => state.movies);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(movieActions.getMovies())
    }, []);

    return (
        <div>
            MoviesList
            {movies.map(movie => <MoviesListCard key={movie.id} movie={movie}/>)}
        </div>
    );
};

export {MoviesList};