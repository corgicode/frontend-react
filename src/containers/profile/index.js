import React from 'react';
import { connect } from 'react-redux';
import { ProfileType, SubmitType } from '../../types';
import ReactRouterPropTypes from 'react-router-prop-types';
import { readEndpoint } from 'redux-json-api';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import E404 from '../404/';
import ProfileComponent from '../../components/profile';
import _get from 'lodash/get';
import LoadingLarge from '../../components/loading/Large';

class Profile extends React.Component {
    static propTypes = {
        readEndpoint: PropTypes.func.isRequired,
        profile: ProfileType,
        match: ReactRouterPropTypes.match,
        username: PropTypes.string,
        self: PropTypes.bool.isRequired,
        submits: PropTypes.arrayOf(SubmitType),
    }

    constructor(props) {
        super(props);
        this.state = {
            loading: true,
        };
    }

    componentWillMount() {
        this.props.readEndpoint(`profile/${this.props.username || ''}`).then((r) => {
            this.setState({ loading: false });
            const user = _get(r, 'body.data[0]', null);
            if (user) {
                this.props.readEndpoint(`submit/all/user/${ user.id }`);
            }
        });
    }

    render() {
        const { profile, self, submits, username } = this.props;

        return(
            <LoadingLarge loading={ this.state.loading } title={username ? `Loading profile for ${username}` : '' }>
                {this.props.profile && <ProfileComponent profile={profile} self={self} submits={ submits }/>}
                {!this.props.profile && <E404 />}
            </LoadingLarge>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    const { profile, api } = state;
    const { users = {data: [] }, submit = {data: []} } = api;

    const username = ownProps.match.params.username ? ownProps.match.params.username : profile.username;
    const user = users.data.find((u) => u.attributes.username === username);
    const submits = submit.data.filter(s => s.attributes._user === user.id);

    return {
        profile: user ? user.attributes : undefined,
        username,
        self: !ownProps.match.params.username || ownProps.match.params.username === profile.username,
        submits,
    };
};

const mapDispatchToProps = (dispatch) => bindActionCreators({
    readEndpoint,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
