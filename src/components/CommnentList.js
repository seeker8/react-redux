import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class CommentListComponent extends React.Component {
    renderComments() {
        return this.props.comments.map((comment) => {
            return <li key={comment}>{comment}</li>;
        });
    }

    render() {
        return (
            <div>
                <ul>
                    {this.renderComments()}
                </ul>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return { comments: state.comments };
};

export const CommentList = connect(mapStateToProps, actions)(CommentListComponent);