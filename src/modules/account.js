import { writeEndpoint } from 'redux-json-api';

export const USER_CREATED = 'USER_CREATED';

export function signedUp(profile, authenticated = true) {
    return {
        type: USER_CREATED,
        attributes: {
            authenticated,
            id: `${profile.id}`,
            ...profile,
        }
    };
}

export function signUp(data) {
    return (dispatch) => {
        dispatch(writeEndpoint('/accounts')).then(response => {
            if (_get(response, 'body.data[0].attributes', undefined)) {
                dispatch(signedUp(response.body.data[0].attributes, true));
            }
        });
    };
}
