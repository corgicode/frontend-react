import _merge from 'lodash/merge';
import _get from 'lodash/get';
export const PROFILE_RECEIVED = 'PROFILE_RECEIVED';
import { readEndpoint } from 'redux-json-api';

export function receiveProfile(profile, authenticated = true) {
    return {
        type: PROFILE_RECEIVED,
        attributes: {
            authenticated,
            id: `${profile.id}`,
            ...profile,
        }
    };
}

export function getProfile() {
    return (dispatch) => {
        dispatch(readEndpoint('/profile')).then(response => {
            if (_get(response, 'body.data[0].attributes', undefined)) {
                dispatch(receiveProfile(response.body.data[0].attributes, true));
            }
        });
    };
}

export default function(state = {}, action) {
    switch(action.type) {
        case PROFILE_RECEIVED:
            return _merge({}, state, action.attributes);
        default:
            return state;
    }
}
