import React, {useEffect} from 'react';
import {FC, PropsWithChildren} from 'react';
import {useSearchParams} from "react-router-dom";

import {genreActions} from "../redux";
import {useAppDispatch, useAppSelector} from "../hooks";

interface IProps extends PropsWithChildren {
}

const GenrePage: FC<IProps> = () => {
    const {genres} = useAppSelector(state => state.genres);
    const dispatch = useAppDispatch();
    const [query] = useSearchParams({page: '1'});


    useEffect(() => {
        dispatch(genreActions.getGenres({page: +query.get('page')}))
    }, [dispatch,query]);
    return (
        <div>
            {genres?.map(genre => <div>name: {genre.name}</div>)}
        </div>
    );
};

export {GenrePage};