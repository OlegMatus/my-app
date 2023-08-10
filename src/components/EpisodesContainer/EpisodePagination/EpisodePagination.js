import React from 'react';
import style from './EpisodePagination.module.css'
import {useSelector} from "react-redux";
const EpisodePagination = () => {
    const {prevPage,nextPage} = useSelector(state => state.episodes );

    function toPrevPage() {

    }

    function toNextPage() {

    }

    return (
        <div className={style.EpisodePagination}>
            <button disabled={!prevPage} onClick={toPrevPage}>prev</button>
            <button disabled={!nextPage} onClick={toNextPage}>next</button>
        </div>
    );
};

export default EpisodePagination;