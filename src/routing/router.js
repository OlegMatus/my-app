import {createBrowserRouter, Navigate} from "react-router-dom";

import MainLayout from "../layouts/MainLayout";
import CarsPage from "../pages/CarsPage";
import PostPage from "../pages/PostPage";
import CommentPage from "../pages/CommentPage";

const router = createBrowserRouter([
    {
        path: '',
        element: <MainLayout/>,
        children: [
            {
                index: true,
                element: <Navigate to={'cars'}/>
            },
            {
                path: 'cars',
                element: <CarsPage/>
            },
            {
                path: 'posts',
                element: <PostPage/>
            },
            {
                path: 'comments',
                element: <CommentPage/>
            }

        ]
    }
])
export default router