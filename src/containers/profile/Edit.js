import React from 'react';
import ProfileForm from '../../components/profile/Edit';
import { readEndpoint, updateResource } from 'redux-json-api';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { ProfileType } from '../../types';
import ReactRouterPropTypes from 'react-router-prop-types';

class ProfileEdit extends React.Component {
    static propTypes = {
        readEndpoint: PropTypes.func,
        updateResource: PropTypes.func,
        profile: ProfileType,
        history: ReactRouterPropTypes.history,
        authenticated: PropTypes.bool,
    }

    constructor(props) {
        super(props);
        this.state = {
            loading: true,
        };
        this.onSubmit = this.onSubmit.bind(this);
    }

    componentWillMount() {
        this.props.readEndpoint('/profile')
            .then(() => this.setState({ loading: false }))
            .catch(() => this.setState({ loading: false }));
    }

    componentWillReceiveProps() {
        if (!this.props.authenticated && !this.state.loading) {
            this.props.history.push('/');
        }
    }

    onSubmit(data) {
        const user = {
            type: 'users',
            id: data.id,
            attributes: data,
        };
        this.props.updateResource(user);
    }

    render() {
        return (
            <div className="profile-container">
                {!this.state.loading && <ProfileForm profile={this.props.profile} onSubmit={this.onSubmit} />}
            </div>);
    }
}

const mapStateToProps = (state) => {
    const { profile, api } = state;
    const { users = {data: [] }} = api;

    const user = users.data.find((u) => u.attributes.username === profile.username);

    return {
        profile: user ? user.attributes : undefined,
        authenticated: profile.authenticated,
    };
};

const mapDispatchToProps = (dispatch) => bindActionCreators({
    readEndpoint,
    updateResource,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ProfileEdit);
