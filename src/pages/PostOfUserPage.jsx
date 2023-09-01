// import React from 'react';
// import {useLoaderData, useLocation} from "react-router-dom";
// import PostOfUser from "../components/PostOfUser";
//
// const PostOfUserPage = () => {
//     const {state: userFromPreviousPage} = useLocation();
//     const posts = useLoaderData();
//     return (
//         <div>
//             {JSON.stringify(userFromPreviousPage)}
//             <hr/>
//             {posts.map(post => <PostOfUser key={post.id} post={post}/>)}
//         </div>
//     );
// };
//
// export default PostOfUserPage;