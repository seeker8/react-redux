import React from 'react';
import { mount } from 'enzyme';
import { CommentBox } from '../CommentBox';

describe('CommentBox component', () =>{
    let wrapper;
    beforeEach(() => {
        wrapper = mount(<CommentBox />);
    });

    afterEach(() => {
        
    });

    test('has a textarea and a button', () => {
        expect(wrapper.find('textarea').length).toBe(1);
        expect(wrapper.find('button').length).toBe(1);
    });
});