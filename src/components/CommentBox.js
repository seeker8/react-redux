import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/index';

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
            <form onSubmit={this.handleSubmit}>
                <h4>Add a comment</h4>
                <textarea value={this.state.comment} onChange={this.handleChange}/>
                <div>
                    <button>Submit Comment</button>
                </div>
            </form>
        );
    }
}

export const CommentBox = connect(null, actions)(CommentBoxComponent);