import React from 'react';
import { shallow } from 'enzyme';
import { App } from '../App';
import { CommentBox } from '../CommentBox';
import  { CommentList } from '../CommnentList';

describe('App component', () =>{
    let wrapper;
    beforeEach(() => {
        // renders App without rendering its children
        wrapper = shallow(<App />);
    });

    test('shows a comment box',  () => {
        expect(wrapper.find(CommentBox).length).toEqual(1);
    });

    test('shows a comment List', () =>{
        const wrapper = shallow(<App />);
        expect(wrapper.find(CommentList).length).toEqual(1);
    });

});