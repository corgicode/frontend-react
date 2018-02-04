import React, { Component } from 'react';
import { readEndpoint } from 'redux-json-api';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { ChallengesType } from '../../types';
import ChallengesList from '../../components/challenges/list.js';
import { PROD_URL } from '../../constants';
import { Helmet } from 'react-helmet';

class ChallengesContainer extends Component {
    static propTypes = {
        readEndpoint: PropTypes.func.isRequired,
        challenges: ChallengesType,
    }

    componentWillMount() {
        this.props.readEndpoint('challenges');
    }

    render() {
        const { challenges } = this.props;
        return (
            <div>
                <Helmet>
                    <title>codecorgi - checkout the available challenges</title>
                    <meta property="og:title" content="codecorgi - checkout the available challenges" />
                    <meta property="og:url" content={ `${PROD_URL}/challenges` } />
                    <meta name="twitter:title" content="codecorgi - checkout the available challenges" />
                </Helmet>
                <ChallengesList challenges={ challenges } />
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
    readEndpoint,
}, dispatch);

const mapStateToProps = (state) => {
    const { api } = state;
    const { challenges = { data: []}} = api;
    return {
        challenges: challenges.data,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ChallengesContainer);
