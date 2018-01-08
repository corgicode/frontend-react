import React, { Component } from 'react';
import { readEndpoint } from 'redux-json-api';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { ChallengesType } from '../../types';
import ChallengesList from '../../components/challenges/list.js';

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
        return (<ChallengesList challenges={ challenges } />);
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
