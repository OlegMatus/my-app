import React from 'react';
import {FC, PropsWithChildren} from 'react';
import {posterURL} from "../../constants";

interface IProps extends PropsWithChildren {
poster_path: string
}

const PosterPreview: FC<IProps> = ({poster_path}) => {
    return (
        <div>
            <img src={`${posterURL}/${poster_path}`} alt={poster_path}/>
        </div>
    );
};

export {PosterPreview};