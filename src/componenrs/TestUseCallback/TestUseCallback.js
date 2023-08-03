import React from 'react';
import {memo} from "react";

const TestUseCallback = ({posts,createPost}) => {
    console.log('ReRender...')

    return (
        <div>
            {posts.map((post,idx)=><p key={idx}>{post}</p>)}
            <button onClick={createPost}>New Post</button>
        </div>
    );
};

export default memo(TestUseCallback);