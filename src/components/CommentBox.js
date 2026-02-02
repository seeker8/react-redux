import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/index';

class CommentBoxComponent extends React.Component {
    state = { comment: '' };

    shouldNavigateAway() {
        if (!this.props.auth) {
            this.props.history.push('/');
        }
    }

    componentDidMount() {
        this.shouldNavigateAway();
    }

    componentDidUpdate() {
        this.shouldNavigateAway();
    }

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

const mapStateToProps = (state) => {
    return {
        auth: state.auth
    };
};

export const CommentBox = connect(mapStateToProps, actions)(CommentBoxComponent);