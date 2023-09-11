import {createBrowserRouter} from "react-router-dom";

import {MainLayout} from "./layouts";
import {MoviesPage} from "./pages";
import {GenrePage} from "./pages";
import {MovieDetailsPage} from "./pages";

const router = createBrowserRouter([
    {
        path: '',
        element: <MainLayout/>,
        children: [
            // {
            //     index: true,
            //     element: <Navigate to={'movies'}/>
            // },
            {
                path: 'movies',
                element: <MoviesPage/>,
                children: [
                    {
                        path: ':id',
                        element: <MovieDetailsPage/>
                    }
                ]
            },
            {
                path: 'genres',
                element: <GenrePage/>
            }
        ]
    }
]);

export {
    router
}