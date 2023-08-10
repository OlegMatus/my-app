import {createBrowserRouter, Navigate} from "react-router-dom";

import MainLayout from "../layouts/MainLayout";
import EpisodesPages from "../Pages/EpisodesPages/EpisodesPages";
import CharactersPages from "../Pages/CharactersPages/CharactersPages";

export const router = createBrowserRouter([
    {
        path:'',
        element:<MainLayout/>,
        errorElement: <h1>PuPuPu...</h1>,
        children: [
            {
               index:true,
                element:<Navigate to={'episodes'}/>
            },
            {
                path:'episodes',
                element:<EpisodesPages/>
            },
            {
                path:'characters',
                element:<CharactersPages/>
            },
            {
                path:'episodes',
                element:<EpisodesPages/>
            },
        ]
    }
])