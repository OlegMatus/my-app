import {createBrowserRouter, Outlet} from "react-router-dom";
import TList from "../components/TodoList/TList";
import {NavBar} from "../components/Navbar/NavBar";
import AlbumList from "../components/AlbumList/AlbumList";
import {AppRoutes} from "./AppRoutes";
import CommentList from "../components/CommentList/CommentList";
import PostList from "../components/PostList/PostList";

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
                element: <TList/>
            },
            {
                path: AppRoutes.ALBUMS,
                element: <AlbumList/>
            },
            {
                path: AppRoutes.COMMENTS,
                element: <CommentList/>,
                children: [{
                    path: AppRoutes.POSTS,
                    element: <PostList/>,
                }]
            }
        ]
    },

])