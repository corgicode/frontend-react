import React, { Component } from 'react';
import { readEndpoint } from 'redux-json-api';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { ChallengeType, SubmitType, ShortUserType } from '../../types';
import ReactRouterPropTypes from 'react-router-prop-types';
import { PROD_URL } from '../../constants';
import SubmitDetails from '../../components/submit/single';

class ChallengeContainer extends Component {
    static propTypes = {
        readEndpoint: PropTypes.func.isRequired,
        challenge: ChallengeType,
        match: ReactRouterPropTypes.match,
        submission: SubmitType,
        user: ShortUserType,
        id: PropTypes.string,
    }

    componentWillMount() {
        this.props.readEndpoint(`submit/${ this.props.id }`);
    }

    render() {
        const { challenge, submission, user } = this.props;
        return (
            <div style={{ margin: '30px auto' }} >
                {submission && challenge && <Helmet>
                    <title>{ `codecorgi | submission for: ${ challenge.title }` }</title>
                    <meta property="og:title" content={ `codecorgi | submission for: ${ challenge.title }` } />
                    <meta property="og:url" content={ `${PROD_URL}/${ challenge.url }` } />
                    <meta name="twitter:title" content={ `codecorgi | submission for: ${ challenge.title }` } />
                </Helmet>}
                {submission && challenge && user._id &&
                    <SubmitDetails submission={ submission } challenge={ challenge } user={ user } />
                }
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
    readEndpoint,
}, dispatch);

const mapStateToProps = (state, ownProps) => {
    const { api } = state;
    const { /* challenges = { data: [] }, */ submit: submissions = { data: [] }} = api;
    const id = ownProps.match.params.id;

    const submission = submissions.data.find((c) => c.id === id) || { attributes: {} };
    const challenge = submission.attributes && submission.attributes.challenge || { attributes: {} };
    const user = submission.attributes._user || {};

    return {
        challenge,
        submission: { id: submission.id, ...submission.attributes },
        user,
        id,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ChallengeContainer);
