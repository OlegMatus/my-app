import {createBrowserRouter, Outlet} from "react-router-dom";
import TList from "../components/TodoList/TList";
import {NavBar} from "../components/Navbar/NavBar";
import AlbumList from "../components/AlbumList/AlbumList";

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
                path: '/',
                element: <div>Hello World!</div>
            },
            {
                path: '/todos',
                element: <TList/>
            },
            {
                path: '/albums',
                element: <AlbumList/>
            }
        ]
    },

])