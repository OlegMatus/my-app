import React, {useEffect, useState} from 'react';
import Comment from "./Comment/Comment";
import{commentService} from "../../services";

const CommentList = ({setCommentId}) => {
    const [comments, setComments] = useState([]);

    useEffect(() => {
       commentService.getAll().then(({data}) => setComments(data))
    }, [])
    return (
        <div>
            {comments.map(comment => <Comment key={comment.id} comment={comment} setCommentId={setCommentId}/>)}
        </div>
    );
};

export default CommentList;