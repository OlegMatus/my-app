import React, {useState} from 'react';
import CommentList from "../../components/CommentList/CommentList";
import {Outlet} from "react-router-dom";
import style from './CommentsPage.module.css'
const CommentsPage = () => {
    const [commentId, setCommentId] = useState(null);
    return (
        <div className={style.CommentsPage}>
            <CommentList setCommentId={setCommentId}/>
            <Outlet context={{commentId}}/>
        </div>
    );
};

export default CommentsPage;