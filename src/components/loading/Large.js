import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TintedHeader from '../../components/misc/TintedHeader';

class LoadingLarge extends Component {
    static propTypes = {
        children: PropTypes.oneOfType([
            PropTypes.node,
            PropTypes.arrayOf(PropTypes.node),
        ]).isRequired,
        loading: PropTypes.bool,
        data: PropTypes.any,
        title: PropTypes.string,
        minimun: PropTypes.number,
    };

    static defaultProps = {
        title: 'Loading...',
        minimun: 800,
    }

    constructor(props) {
        super(props);
        this.state = {
            minimunElapsed: false,
        };
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                minimunElapsed: true,
            });
        }, this.props.minimun);
    }

    render() {
        return(
            <div>
                {
                    (this.state.minimunElapsed && (!this.props.loading || this.props.data)) ?
                        this.props.children :
                        <TintedHeader title={ this.props.title } />
                }
            </div>
        );
    }
}

export default LoadingLarge;
