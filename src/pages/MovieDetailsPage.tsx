import React, {useEffect} from 'react';
import {FC, PropsWithChildren} from 'react';
import {useAppDispatch, useAppSelector} from "../hooks";
import {movieActions} from "../redux";
import {useParams, useSearchParams} from "react-router-dom";
import {MovieInfo} from "../components";

interface IProps extends PropsWithChildren {

}

const MovieDetailsPage: FC<IProps> = () => {
    const dispatch = useAppDispatch();
    const {movieDetail, isLoading} = useAppSelector(state => state.movies);
    // const {id} = useParams<{ id: string }>();

    useEffect(() => {
        // dispatch(movieActions.getMovieById({}))
    }, [dispatch,]);

    if (isLoading) {
        return <div>Loading...</div>;
    }
    return (

        <div>
            {movieDetail && <MovieInfo movieDetail={movieDetail}/>}
        </div>
    );
};

export {MovieDetailsPage};