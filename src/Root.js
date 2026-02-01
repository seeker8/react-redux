import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { rootReducer } from './reducers/index';

export const Root = ({ children, initialState = {} }) => {
    return (
        <Provider store={createStore(rootReducer, initialState)}>
            {children}
        </Provider>
    );
};