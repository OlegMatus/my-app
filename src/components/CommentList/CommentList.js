import React, {useEffect, useState} from 'react';
import Comment from "../../Comment/Comment";
import {Link, Outlet} from "react-router-dom";
import{commentService} from "../../services/commentService";
import {AppRoutes} from "../../Routing/AppRoutes";

<Outlet/>
const CommentList = () => {
    const [comments, setComments] = useState([]);
    useEffect(() => {
       commentService.getAll().then(({data}) => setComments(data))
    }, [])
    return (
        <div>
            {comments.map(comment => <Comment key={comment.id} comment={comment}/>)}
            <Link to={`${AppRoutes.COMMENTS}`}/>
        </div>
    );
};

export default CommentList;