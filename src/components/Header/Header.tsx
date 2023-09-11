import React from 'react';

import css from './header.module.css'
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <div className={css.Header}>
            Header
            <div className={css.links}>
                <Link to={'movies'}>Movies</Link>
                <Link to={'genres'}>Genres</Link>
                <Link to={'search'}>Search</Link>
            </div>
        </div>
    );
};

export {Header};