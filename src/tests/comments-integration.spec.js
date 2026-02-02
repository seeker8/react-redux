import React from 'react';
import { mount } from 'enzyme';
import { Root } from '../Root';
import { App } from '../components/App'
import axios from 'axios';


test('can fetch a list of comments and display them', () => {
    axios.get = jest.fn().mockReturnValue({
        data: [{name: 'Comment 1'}, {name: 'Comment 2'}, {name: 'Comment 3'}]
    });
    const wrapper = mount(
        <Root>
            <App />
        </Root>
    );
    wrapper.find('button[data-testid="fetch-button"]').simulate('click');
    expect(wrapper.find('li').length).toEqual(3);
});