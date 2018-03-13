import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ensureUrl } from '../../constants/utils';

class linkRenderer extends Component {
    static propTypes = {
        href: PropTypes.string,
        children: PropTypes.oneOfType([
            PropTypes.node,
            PropTypes.arrayOf(PropTypes.node),
        ]),
    }

    render() {
        const url = ensureUrl(this.props.href);
        return(
            <a href={ url } target={ url.startsWith('/') ? '' : '_blank' }>
                { this.props.children }
            </a>
        );
    }
}

export default linkRenderer;
