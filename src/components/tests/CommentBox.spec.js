import React from 'react';
// use mount for full DOM rendering
import { mount } from 'enzyme';
import { CommentBox } from '../CommentBox';
import { text } from 'cheerio';

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

    test('textarea captures user input', () => {
        // find the textarea element
        const textarea = wrapper.find('textarea');
        // call simulate on the textarea to simulate a user event
        textarea.simulate('change', { target: { value: 'new comment' } });
        // force a re-render to reflect the new state
        wrapper.update();
        expect(wrapper.find('textarea').text()).toBe('new comment');
        //validate the state using prop
        expect(wrapper.find('textarea').prop('value')).toBe('new comment');
    });

    test('submit form', () => {
        const form = wrapper.find('form');

        // add a comment first
        const textarea = wrapper.find('textarea');
        textarea.simulate('change', { target: { value: 'another comment' } });
        wrapper.update();
        // validate the state update
        expect(wrapper.find('textarea').prop('value')).toBe('another comment');

        // submit the form
        form.simulate('submit');
        wrapper.update();
        // textarea should be cleared after submit
        expect(wrapper.find('textarea').prop('value')).toBe('');
    });
});