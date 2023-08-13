import React from 'react';
import style from './EpisodePagination.module.css'
import {useSelector} from "react-redux";
import {useSearchParams} from "react-router-dom";
const EpisodePagination = () => {
    const {prevPage,nextPage} = useSelector(state => state.episodes );
const [,setQuery] = useSearchParams();

    const toPrevPage = () => {
setQuery(prev => ({...prev, page: +prev.get('page')-1}))
    }

    const toNextPage = () => {
        setQuery(prev => ({...prev, page: +prev.get('page')+1}))
    }

    return (
        <div className={style.EpisodePagination}>
            <button disabled={!prevPage} onClick={toPrevPage}>prev</button>
            <button disabled={!nextPage} onClick={toNextPage}>next</button>
        </div>
    );
};

export default EpisodePagination;