import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { rootReducer } from './reducers/index';

export const Root = ({ children }) => {
    return (
        <Provider store={createStore(rootReducer, {})}>
            {children}
        </Provider>
    );
};