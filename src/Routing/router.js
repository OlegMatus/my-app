import {createBrowserRouter, Outlet} from "react-router-dom";

import {NavBar} from "../components/Navbar/NavBar";
import {AppRoutes} from "./AppRoutes";
import TList from "../components/TodoList/TList";
import PostList from "../components/PostList/PostList";
import CommentList from "../components/CommentList/CommentList";
import AlbumList from "../components/AlbumList/AlbumList";
import TodosPage from "../Pages/TodosPage/TodosPage";
import AlbumsPage from "../Pages/AlbumsPage/AlbumsPage";
import CommentsPage from "../Pages/CommentsPage/CommentsPage";
import PostPage from "../Pages/PostPage/PostPage";


const AppLayout = () => (
    <>
        <NavBar/>
        <Outlet/>
    </>
);
export const router = createBrowserRouter([
    {
        element: <AppLayout/>,
        errorElement: <h1> Ups...ERROR!!!</h1>,
        children: [
            {
                path: AppRoutes.MAIN,
                element: <div style={{
                    display: "flex",
                    justifyContent: "center",
                    backgroundColor: "yellow",
                    fontSize: "60px",
                    color: "blue"
                }}><b>СЛАВА УКРАЇНІ!</b></div>
            },
            {
                path: AppRoutes.TODOS,
                element: <TodosPage/>
            },
            {
                path: AppRoutes.ALBUMS,
                element: <AlbumsPage/>
            },
            {
                path: AppRoutes.COMMENTS,
                element: <CommentsPage/>,
                children: [{
                    path: AppRoutes.POSTS,
                    element: <PostPage/>,
                }]
            }
        ]
    },

])