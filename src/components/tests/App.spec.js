import {render } from '@testing-library/react';
import { App } from '../App';

test('CommentBox is rendered',  () => {
    const { getByText } = render(<App />);
    expect(getByText(/CommentBox/i)).toBeInTheDocument();
});