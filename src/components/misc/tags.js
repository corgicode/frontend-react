import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Tags extends Component {
    static propTypes = {
        tags: PropTypes.arrayOf(PropTypes.string),
    }

    render() {
        const { tags = [] } = this.props;
        return(
            <span>
                {tags.map((t, key) => {
                    return <span key={ key } className="tag blue-bg">{ t }</span>;
                })}
            </span>
        );
    }
}

export default Tags;
