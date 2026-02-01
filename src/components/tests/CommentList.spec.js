import React from 'react';
import { mount } from 'enzyme';
import { Root } from '../../Root';
import { CommentList } from '../CommnentList';

let wrapper;
beforeEach(() => {
    wrapper = mount(
        <Root initialState={['Comment 1', 'Comment 2']}>
            <CommentList />
        </Root>
    );
});

test('creates one li per comment', () => {
    expect(wrapper.find('li').length).toEqual(2);
});

