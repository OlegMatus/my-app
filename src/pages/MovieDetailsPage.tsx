import React, {useEffect} from 'react';
import {FC, PropsWithChildren} from 'react';
import {useAppDispatch, useAppSelector} from "../hooks";
import {movieActions} from "../redux";
import {useParams} from "react-router-dom";
import {MovieInfo} from "../components";

interface IProps extends PropsWithChildren {

}

const MovieDetailsPage: FC<IProps> = () => {
const dispatch = useAppDispatch();
const {movieDetail} = useAppSelector(state => state.movies);
    const { id } = useParams<{ id: string }>();


    useEffect(() => {
        dispatch(movieActions.getMovieById({id: Number(id)}))
    }, [dispatch, id]);

    return (

        <div>
            <MovieInfo movieDetail={movieDetail}/>
        </div>
    );
};

export {MovieDetailsPage};