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
    }

    componentWillMount() {
        this.props.getProfile();
    }

    render() {
        return(
            <div>
                <Header />
                <Routes />
                <Footer />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    const { api } = state;
    return {
        api,
    };
};

const mapDispatchToProps = (dispatch) => bindActionCreators({
    getProfile,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);
