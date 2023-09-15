import React from 'react';
import {FC, PropsWithChildren} from 'react';

import {IMovie} from "../../interfaces";

import css from './MovieCard.module.css'
import {PosterPreview} from "../PosterPreview";
import {StarsRating} from "../StarsRating";
import {Link} from "react-router-dom";

interface IProps extends PropsWithChildren {
    movie: IMovie
}

const MoviesListCard: FC<IProps> = ({movie}) => {
    const {title, vote_average, poster_path} = movie;
    return (
        <div className={css.MovieCard}>
            <PosterPreview poster_path={poster_path}/>
            <div><b>{title}</b></div>
            <StarsRating vote_average={vote_average}/>
            <Link to={`/movies/${movie.id}`}/>
        </div>
    );
};

export {MoviesListCard};