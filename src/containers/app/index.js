import React from 'react';
import Header from '../../components/header';
import Footer from '../../components/footer';
import Routes from '../../routes';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getProfile } from '../../modules/profile';
import PropTypes from 'prop-types';

class App extends React.Component {
    static propTypes = {
        getProfile: PropTypes.func.isRequired,
        profile: PropTypes.shape({
            authenticated: PropTypes.bool,
            name: PropTypes.string,
            username: PropTypes.username,
        }),
    }

    componentWillMount() {
        this.props.getProfile();
    }

    render() {
        const { profile } = this.props;
        return(
            <div>
                <Header profile={profile} />
                <Routes />
                <Footer />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    const { profile } = state;
    return {
        profile: {
            authenticated: profile.authenticated,
            name: profile.name,
            username: profile.username,
        },
    };
};

const mapDispatchToProps = (dispatch) => bindActionCreators({
    getProfile,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);
