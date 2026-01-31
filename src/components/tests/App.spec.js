import React from 'react';
import { shallow } from 'enzyme';
import { App } from '../App';
import { CommentBox } from '../CommentBox';

test('App is rendered',  () => {
    // renders App without rendering its children
  const wrapper = shallow(<App />);
  expect(wrapper.find(CommentBox).length).toEqual(1);
});