import React, {FC, PropsWithChildren, useEffect} from 'react';

import {useAppDispatch, useAppSelector} from "../../hooks";
import {MoviesListCard} from "./MoviesListCard";
import {movieActions} from "../../redux";
import {useSearchParams} from "react-router-dom";

interface IProps extends PropsWithChildren {

}

const MoviesList: FC<IProps> = () => {
    const {movies, error} = useAppSelector(state => state.movies);
    const dispatch = useAppDispatch();
    const [query, ] = useSearchParams({page: '1'});
    
    // console.log(movies);
    useEffect(() => {
        dispatch(movieActions.getMovies({page: +query.get('page')}))
    }, [query,dispatch]);

    return (
        <div>
            MoviesList
            <div>{error && <span>Not Found!!!</span>}</div>
            {movies?.map(movie => <MoviesListCard key={movie.id} movie={movie}/>)}
        </div>
    );
};

export {MoviesList};