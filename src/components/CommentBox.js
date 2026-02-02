import React from 'react';
import { requireAuth } from './requireAuth';

class CommentBoxComponent extends React.Component {
    state = { comment: '' };

    handleChange = (e) => {
        this.setState({ comment: e.target.value });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.saveComment(this.state.comment);
        this.setState({ comment: '' });
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <h4>Add a comment</h4>
                    <textarea value={this.state.comment} onChange={this.handleChange} />
                    <div>
                        <button>Submit Comment</button>
                    </div>
                </form>
                <button data-testid='fetch-button' onClick={this.props.fetchComments}>Fetch Comments</button>
            </div>
        );
    }
}


export const CommentBox = requireAuth(CommentBoxComponent)