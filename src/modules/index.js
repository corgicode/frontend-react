import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as api } from 'redux-json-api';
import profileReducer from './profile';
import { reducer as formReducer } from 'redux-form';

export default combineReducers({
    router: routerReducer,
    api,
    form: formReducer,
    profile: profileReducer,
});
