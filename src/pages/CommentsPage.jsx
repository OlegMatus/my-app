import React from 'react';
import {useLoaderData} from "react-router-dom";

import CommentsPost from "../components/CommentsPost";

const CommentsPage = () => {
    const comments = useLoaderData();

    return (
        <div>
            {comments.map(comment => <CommentsPost key={comment.id} comment={comment}/>)}
        </div>
    );
};

export default CommentsPage;