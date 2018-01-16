import React, { Component } from 'react';
import Moment from 'moment';
import PropTypes from 'prop-types';

class MomentComponent extends Component {
    static propTypes = {
        date: PropTypes.string,
        format: PropTypes.string,
    }

    static defaultProps = {
        format: 'MMMM Do YYYY',
    }

    render() {
        return(<span>{ Moment(this.props.date).format(this.props.format) }</span>);
    }
}

export default MomentComponent;
