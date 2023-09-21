import {createBrowserRouter, Navigate} from "react-router-dom";

import {MainLayout} from "./layouts";
import {MoviesPage} from "./pages";
import {GenrePage} from "./pages";
import {MovieDetailsPage} from "./pages";
import {SearchPage} from "./pages";
import React from "react";

const router = createBrowserRouter([
        {
            path: '',
            element: <MainLayout/>,
            children: [
                {
                    index: true,
                    element: <Navigate to={'movies'}/>
                },
                {
                    path: 'movies',
                    element: <MoviesPage/>,
                },
                {
                    path: 'movies/:id',
                    element: <MovieDetailsPage/>
                },

                {
                    path: 'genres',
                    element: <GenrePage/>
                },
                {
                    path: 'search',
                    element: <SearchPage/>
                }
            ]
        }
    ])
;

export {
    router
}