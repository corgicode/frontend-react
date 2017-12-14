import React from 'react';
import { push } from 'react-router-redux';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import {
    increment,
    incrementAsync,
    decrement,
    decrementAsync
} from '../../modules/counter';

class Home extends React.Component {
    static propTypes = {
        count: PropTypes.number,
        increment: PropTypes.func,
        isIncrementing: PropTypes.bool,
        incrementAsync: PropTypes.func,
        decrement: PropTypes.func,
        decrementAsync: PropTypes.func,
        isDecrementing: PropTypes.bool,
    }

    render() {
        const { props } = this;
        return (
            <div>
                <h1>Home</h1>
                <p>Count: {props.count}</p>
                <p>
                    <button onClick={props.increment} disabled={props.isIncrementing}>Increment</button>
                    <button onClick={props.incrementAsync} disabled={props.isIncrementing}>Increment Async</button>
                </p>
                <p>
                    <button onClick={props.decrement} disabled={props.isDecrementing}>Decrement</button>
                    <button onClick={props.decrementAsync} disabled={props.isDecrementing}>Decrement Async</button>
                </p>
                <p><button onClick={() => props.changePage()}>Go to about page via redux</button></p>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    count: state.counter.count,
    isIncrementing: state.counter.isIncrementing,
    isDecrementing: state.counter.isDecrementing
});

const mapDispatchToProps = dispatch => bindActionCreators({
    increment,
    incrementAsync,
    decrement,
    decrementAsync,
    changePage: () => push('/about-us')
}, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home);
