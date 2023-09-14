import React from 'react';
import {FC, PropsWithChildren} from 'react';

import {MoviesList} from "../components";
import {Pagination} from "./Pagination";
import {Outlet} from "react-router-dom";

interface IProps extends PropsWithChildren {

}
const MoviesPage: FC<IProps> = () => {
    return (
        <div>
            <MoviesList/>
            <Pagination/>
            <Outlet/>
        </div>
    );
};

export {MoviesPage};