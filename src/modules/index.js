import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as api } from 'redux-json-api';

export default combineReducers({
    router: routerReducer,
    api,
});
