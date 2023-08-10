import React from 'react';
import Episodes from "../../components/EpisodesContainer/Episodes/Episodes";
import EpisodePagination from "../../components/EpisodesContainer/EpisodePagination/EpisodePagination";

const EpisodesPages = () => {
    return (
        <div>
            <Episodes/>
            <EpisodePagination/>
        </div>
    );
};

export default EpisodesPages;