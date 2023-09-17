import React from 'react';
import {FC, PropsWithChildren} from 'react';

import {MoviesList} from "../components";
import {PaginationMovie} from "../components/Pagination/PaginationMovie";
import {Outlet} from "react-router-dom";

interface IProps extends PropsWithChildren {

}

const MoviesPage: FC<IProps> = () => {

    return (
        <div>
            <MoviesList/>
            <PaginationMovie/>
            <Outlet/>
        </div>
    );
};

export {MoviesPage};