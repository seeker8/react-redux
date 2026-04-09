import React from 'react';
import { mount } from 'enzyme';
import { Root } from '../../Root';
import { CommentList } from '../CommnentList';

let wrapper;
beforeEach(() => {
    wrapper = mount(
        <Root initialState={{comments: ['Comment 1', 'Comment 2']}}>
            <CommentList />
        </Root>
    );
});

test('creates one li per comment', () => {
    expect(wrapper.find('li').length).toEqual(2);
});

test('shows the text for each comment', () => {
    expect(wrapper.render().text()).toContain('Comment 1');
    expect(wrapper.render().text()).toContain('Comment 2');
});
