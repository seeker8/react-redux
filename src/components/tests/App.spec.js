import React from 'react';
import ReactDOM from 'react-dom';
import { App } from '../App';

test('CommentBox is rendered',  () => {
    const container = document.createElement('div');
    ReactDOM.render(<App />, container);
    expect(container.innerHTML).toContain('CommentBox component');
    ReactDOM.unmountComponentAtNode(container);
});