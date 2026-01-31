import React from 'react';
import { shallow } from 'enzyme';
import { App } from '../App';
import { CommentBox } from '../CommentBox';
import  { CommentList } from '../CommnentList';

describe('App component', () =>{

    test('shows a comment box',  () => {
        // renders App without rendering its children
        const wrapper = shallow(<App />);
        expect(wrapper.find(CommentBox).length).toEqual(1);
    });

    test('shows a comment List', () =>{
        const wrapper = shallow(<App />);
        expect(wrapper.find(CommentList).length).toEqual(1);
    });

});