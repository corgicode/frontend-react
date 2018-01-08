import React, { Component } from 'react';
import { readEndpoint } from 'redux-json-api';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { ChallengeType } from '../../types';
import ReactRouterPropTypes from 'react-router-prop-types';
import SingleChallenge from '../../components/challenges/single';
import defaultChallenge from '../../constants/defaults/challenge';

class ChallengeContainer extends Component {
    static propTypes = {
        readEndpoint: PropTypes.func.isRequired,
        challenge: ChallengeType,
        match: ReactRouterPropTypes.match,
        number: PropTypes.string,
    }

    componentWillMount() {
        this.props.readEndpoint(`challenge/${ this.props.number }`);
    }

    render() {
        const { challenge } = this.props;
        return (
            <div>
                {challenge && <SingleChallenge challenge={ challenge } />}
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
    readEndpoint,
}, dispatch);

const mapStateToProps = (state, ownProps) => {
    const { api } = state;
    const { challenges = { data: [] }} = api;
    const number = ownProps.match.params.number;
    const challenge = challenges.data.find((c) => c.attributes.number === number) || { attributes: {} };
    return {
        challenge: { ...challenge, ...defaultChallenge, ...challenge.attributes },
        number,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ChallengeContainer);
