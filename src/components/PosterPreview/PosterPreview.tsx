import React from 'react';
import {FC, PropsWithChildren} from 'react';

import {posterURL} from "../../constants";
import {IMovie} from "../../interfaces";

interface IProps extends PropsWithChildren {
    poster_path: string,
    movie: IMovie
}

const PosterPreview: FC<IProps> = ({poster_path, movie}) => {
    return (
        <div>
            <img src={`${posterURL}/${poster_path}`} alt={poster_path}/>
        </div>
    );
};

export {PosterPreview};