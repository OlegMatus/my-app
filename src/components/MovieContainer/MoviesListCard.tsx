import React from 'react';
import {FC, PropsWithChildren} from 'react';

import {IMovie} from "../../interfaces";

import css from './MovieCard.module.css'
import {PosterPreview} from "../PosterPreview";
import {StarsRating} from "../StarsRating/StarsRating";
import {MovieInfo} from "./MovieInfo";

interface IProps extends PropsWithChildren {
    movie: IMovie
}

const MoviesListCard: FC<IProps> = ({movie}) => {
    const { title, vote_average, poster_path} = movie;
    return (
        <div className={css.MovieCard}>
           <PosterPreview poster_path={poster_path}/>
            <div>{title}</div>
            <StarsRating vote_average={vote_average}/>
            {/*<MovieInfo movie={movie}/>*/}
        </div>
    );
};

export {MoviesListCard};