import {createBrowserRouter} from "react-router-dom";

import UsersPage from "./pages/UsersPage";
import MainLayout from "./layouts/MainLayout";
import PostsPage from "./pages/PostsPage";
import CommentsPage from "./pages/CommentsPage";
import {getAllUsers} from "./services/user.apiService";
import PostOfUserPage from "./pages/PostOfUserPage";
import {getPostOfUserService} from "./services/postOfuserService";
import {getPosts} from "./services/posts.apiService";
import Comment from "./components/Comment";
import CommentsPost from "./components/CommentsPost";
import {getCommentsPost} from "./services/commentsService";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout/>,
        children: [
            {
                path: 'users',
                element: <UsersPage/>,
                loader: getAllUsers
            },
            {
                path: 'posts',
                element: <PostsPage/>,
                loader: getPosts,
                children: [
                    {
                        path: ':id',
                        element: <CommentsPost/>,
                        loader: getCommentsPost
                    }
                ]
            },
            {
                path: 'comments',
                element: <CommentsPage/>
            },
            {
                path: 'users/:id',
                element: <PostOfUserPage/>,
                loader: getPostOfUserService
            }
        ]
    }
]);