import React from 'react';
import {useSelector} from "react-redux";

import css from './Header.module.css'

import {Box, LinearProgress} from "@mui/material";

const Header = () => {
    const {isLoading} = useSelector(state => state.progress);
    const {current} = useSelector(state => state.episodes);

    return (
        <div>
        <div className={css.Header}>{current?current:'Rick & Morty'}</div>
            {
                isLoading && (
            <Box sx={{ width: '100%', height: '5px' }}>
                <LinearProgress />
            </Box>
                )
            }
        </div>
    );
};

export default Header;