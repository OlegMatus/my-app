import React, {Component} from 'react';

import {postService} from "../../services/postService";
import PostComponent from "../PostComponent/PostComponent";

class PostsComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: []
        }
    }

    componentDidMount() {
        postService.getAll().then(({data}) => this.setState({posts: data}))
    }

    render() {
        return (
            <div>
                {this.state.posts.map(post => <PostComponent key={post.id} post={post}/>)}
            </div>
        );
    }
}

export default PostsComponent;