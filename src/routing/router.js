import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import CarsPage from "../pages/CarsPage";

export const router = createBrowserRouter([
    {
        element:<MainLayout/>,
        errorElement: <h1>!!!PuPuPu...</h1>,
        children:[
            {
                path:'',
                element:<div>Hello World!</div>
            },
            {
                path:'cars',
                element:<CarsPage/>
            },
        ]
    }
])