import React from 'react';
import { mount } from 'enzyme';
import { Root } from '../Root';
import { App } from '../components/App';
import moxios from 'moxios';

describe('Comments App', () => {
    let wrapper;
    beforeEach(() => {
        moxios.install();
        wrapper = mount(
            <Root>
                <App />
            </Root>
        );
    });

    afterEach(() => {
        wrapper.unmount();
        moxios.uninstall();
    });

    test('can fetch a list of comments and display them', (done) => {
        moxios.stubRequest('http://jsonplaceholder.typicode.com/comments', {
            status: 200,
            response: [{ name: 'Comment 1' }, { name: 'Comment 2' }, { name: 'Comment 3' }]
        });
        wrapper.find('button[data-testid="fetch-button"]').simulate('click');
        moxios.wait(() => {
            wrapper.update();
            expect(wrapper.find('li').length).toEqual(3);
            done();
        });
    });
});