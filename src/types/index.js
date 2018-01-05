/** File contains common prop type shapes and functions  */
import PropTypes from 'prop-types';

export const ProfileType = PropTypes.shape({
    authenticated: PropTypes.bool,
    username: PropTypes.string,
});
