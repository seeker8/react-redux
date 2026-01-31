import {render, screen  } from '@testing-library/react';
import { App } from '../App';

test('CommentBox is rendered',  () => {
    render(<App />);
    const commentBox = screen.getByText(/CommentBox component/i)
    expect(commentBox).toBeInTheDocument();
})