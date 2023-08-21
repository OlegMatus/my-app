import {createBrowserRouter, Navigate} from "react-router-dom";

import AppLayout from "../layouts/AppLayout";
import EpisodesContainer from "../components/EpisodesContainer/EpisodesContainer";
import CharactersContainer from "../components/CharactersContainer/CharactersContainer";




export const router = createBrowserRouter([
    {
        path: '',
        element: <AppLayout/>,
        children: [
            {
                index: true,
                element: <Navigate to={'episodes'}/>
            },
            {
                path: 'episodes',
                element: <EpisodesContainer/>
            },
            {
                path: 'characters',
                element: <CharactersContainer/>
            }
        ]
    },
])