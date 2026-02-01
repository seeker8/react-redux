import React from 'react';
// use mount for full DOM rendering
import { mount } from 'enzyme';
import { CommentBox } from '../CommentBox';
import  { Root } from '../../Root';

describe('CommentBox component', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = mount(<Root><CommentBox /></Root>);
    });

    afterEach(() => {
        // full rendering mount the component in the DOM, tests can affect each other
        // we use unmount here to prevent that
        wrapper.unmount();
    });

    test('has a textarea and a button', () => {
        expect(wrapper.find('textarea').length).toBe(1);
        expect(wrapper.find('button').length).toBe(2);
    });

    describe('textarea', () => {

        let textarea;
        const userComment = 'user added comment';
        beforeEach(() =>{
            // find the textarea element
            textarea = wrapper.find('textarea');
            // call simulate on the textarea to simulate a user event
            textarea.simulate('change', { target: { value: userComment } });
            // force a re-render to reflect the new state
            wrapper.update();
        });

        test('textarea captures user input', () => {
            expect(wrapper.find('textarea').text()).toBe(userComment);
            //validate the state using prop
            expect(wrapper.find('textarea').prop('value')).toBe(userComment);
        });

        test('submit form', () => {
            // validate the state update
            expect(wrapper.find('textarea').prop('value')).toBe(userComment);

            const form = wrapper.find('form');
            // submit the form
            form.simulate('submit');
            wrapper.update();
            // textarea should be cleared after submit
            expect(wrapper.find('textarea').prop('value')).toBe('');
        });
    });
});