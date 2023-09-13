import React from 'react';
import {FC, PropsWithChildren} from 'react';

interface IProps extends PropsWithChildren {
poster_path: string
}

const PosterPreview: FC<IProps> = ({poster_path}) => {
    return (
        <div>
            PosterPreview
        </div>
    );
};

export {PosterPreview};