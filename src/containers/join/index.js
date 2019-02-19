import React from 'react';
import logoSquared from 'Images/logo-squared.png';
import { PROD_URL } from '../../constants';
import { Helmet } from 'react-helmet';
import { readEndpoint } from 'redux-json-api';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import ReactRouterPropTypes from 'react-router-prop-types';
import { reduxForm } from 'redux-form';
import JoinForm from 'Components/join/form';


class SignupContainer extends React.Component {
    static propTypes = {
        readEndpoint: PropTypes.func.isRequired,
        authenticated: PropTypes.bool.isRequired,
        history: ReactRouterPropTypes.history.isRequired,
    }

    componentWillReceiveProps() {
        if (this.props.authenticated) {
            this.props.history.push('/profile');
        }
    }

    render() {
        return(
            <React.Fragment>
                <JoinForm />
                <Helmet>
                    <title>Signup for codecorgi and build your dev profile</title>
                    <meta property="og:title" content="Signup for codecorgi and build your dev profile" />
                    <meta property="og:url" content={ `${PROD_URL}/join` } />
                    <meta property="og:image" content={`${ logoSquared }` } />
                    <meta name="twitter:title" content="Signup for codecorgi and build your dev profile" />
                    <meta name="twitter:image" content={`${ logoSquared }` } />
                </Helmet>
            </React.Fragment>
        );
    }
}

const mapStateToProps = (state) => {
    const { profile } = state;
    return {
        authenticated: profile.authenticated || false,
    };
};

const mapDispatchToProps = (dispatch) => bindActionCreators({
    readEndpoint,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(reduxForm({
    form: 'join',
    enableReinitialize: false,
})(SignupContainer));
