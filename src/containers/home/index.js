import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class Home extends React.Component {
    static propTypes = {
    }

    render() {
        const { } = this;
        return (
            <div>
                <h1>Home</h1>
            </div>
        );
    }
}

const mapStateToProps = () => ({
});

const mapDispatchToProps = dispatch => bindActionCreators({
}, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home);
