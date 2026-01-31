import React from 'react';
// use mount for full DOM rendering
import { mount } from 'enzyme';
import { CommentBox } from '../CommentBox';

describe('CommentBox component', () =>{
    let wrapper;
    beforeEach(() => {
        wrapper = mount(<CommentBox />);
    });

    afterEach(() => {
        // full rendering mount the component in the DOM, tests can affect each other
        // we use unmount here to prevent that
        wrapper.unmount();
    });

    test('has a textarea and a button', () => {
        expect(wrapper.find('textarea').length).toBe(1);
        expect(wrapper.find('button').length).toBe(1);
    });
});