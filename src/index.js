import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import store, { history } from './store';
import { setAxiosConfig } from 'redux-json-api';
import App from './containers/app';

import 'sanitize.css/sanitize.css';
import './styles/main.scss';

const target = document.querySelector('#root');

// https://github.com/stonecircle/redux-json-api/pull/41
// https://github.com/axios/axios#request-config
store.dispatch(setAxiosConfig({
    baseURL: '/api',
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json',
    },
}));

render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <App />
        </ConnectedRouter>
    </Provider>,
    target
);
