import React from 'react';
import { CommentBox } from './CommentBox';
import { CommentList } from './CommnentList';

export const App = () => {
    return (
        <div>
            <CommentBox />
            <CommentList />
        </div>
    )
}