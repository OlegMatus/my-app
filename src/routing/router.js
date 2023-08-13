import {createBrowserRouter} from "react-router-dom";

import MainLayout from "../layouts/MainLayout";
import CarsContainer from "../components/Container/CarsContainer";

export const router = createBrowserRouter([
    {
        element: <MainLayout/>,
        errorElement: <h1>!!!PuPuPu...</h1>,
        children: [
            {
                path: '',
                element: <div>Hello World!</div>
            },
            {
                path: 'cars',
                element: <CarsContainer/>
            },
        ]
    }
])