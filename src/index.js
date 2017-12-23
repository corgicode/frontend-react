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

store.dispatch(setAxiosConfig({
    baseURL: 'http://localhost:9500/api',
    headers: {
        'Content-Type': 'application/json',
    },
}));

render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <div>
                <App />
            </div>
        </ConnectedRouter>
    </Provider>,
    target
);
