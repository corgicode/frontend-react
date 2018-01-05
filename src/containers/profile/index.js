import React from 'react';
import { connect } from 'react-redux';
import { ProfileType } from '../../types';
import ReactRouterPropTypes from 'react-router-prop-types';
import { readEndpoint } from 'redux-json-api';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import E404 from '../404/';
import ProfileComponent from '../../components/profile';

class Profile extends React.Component {
    static propTypes = {
        readEndpoint: PropTypes.func.isRequired,
        profile: ProfileType,
        match: ReactRouterPropTypes.match,
        username: PropTypes.string,
        self: PropTypes.bool.isRequired,
    }

    constructor(props) {
        super(props);
        this.state = {
            loading: true,
        };
    }

    componentWillMount() {
        this.props.readEndpoint(`profile/${this.props.username || ''}`).then(() => {
            this.setState({ loading: false });
        });
    }

    render() {
        const { profile, self } = this.props;
        return(
            <div>
                {this.state.loading && <h2>Loading...</h2>}
                {!this.state.loading && this.props.profile && <ProfileComponent profile={profile} self={self} />}
                {!this.state.loading && !this.props.profile && <E404 />}
            </div>);
    }
}

const mapStateToProps = (state, ownProps) => {
    const { profile, api } = state;
    const { users = {data: [] }} = api;

    const username = ownProps.match.params.username ? ownProps.match.params.username : profile.username;
    const user = users.data.find((u) => u.attributes.username === username);

    return {
        profile: user ? user.attributes : undefined,
        username,
        self: !ownProps.match.params.username || ownProps.match.params.username === profile.username,
    };
};

const mapDispatchToProps = (dispatch) => bindActionCreators({
    readEndpoint,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
