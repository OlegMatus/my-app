import React, {Component} from 'react';

class PostComponent extends Component {
    render() {
        const {id, title, body} = this.props.post;
        return (
            <div>
                <div>id: {id}</div>
                <div>title: {title}</div>
                <div>body: {body}</div>
            </div>
        );
    }
}

export default PostComponent;