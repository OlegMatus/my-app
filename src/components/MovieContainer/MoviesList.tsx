import React, {FC, PropsWithChildren, useEffect} from 'react';

import {useAppDispatch, useAppSelector} from "../../hooks";
import {MoviesListCard} from "./MoviesListCard";
import {movieActions} from "../../redux";

interface IProps extends PropsWithChildren {

}

const MoviesList: FC<IProps> = () => {
    const {movies,currentPage, error} = useAppSelector(state => state.movies);
    const dispatch = useAppDispatch();

    // console.log(movies);
    useEffect(() => {
        dispatch(movieActions.getMovies())
    }, [dispatch,currentPage]);

    return (
        <div>
            MoviesList
            <div>{error && <span>Not Found!!!</span>}</div>
            {movies?.map(movie => <MoviesListCard key={movie.id} movie={movie}/>)}
        </div>
    );
};

export {MoviesList};