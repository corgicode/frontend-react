import React from 'react';
import PropTypes from 'prop-types';

class hoverImage extends React.Component {
    static propTypes = {
        image1: PropTypes.string,
        image2: PropTypes.string,
        width: PropTypes.string,
        className: PropTypes.string,
        alt: PropTypes.string,
    }

    constructor(props) {
        super(props);
        this.mouseOver = this.mouseOver.bind(this);
        this.mouseOut = this.mouseOut.bind(this);
        this.state = {
            hover: false,
        };
    }

    mouseOver = () => {
        this.setState({ hover: true });
    }
    mouseOut() {
        this.setState({ hover: false });
    }

    render() {
        const { image1, image2, width, className, alt } = this.props;
        return (<img src={this.state.hover ? image2 : image1 } width={width || '168'} className={className} alt={alt || 'codecorgi'} onMouseEnter={this.mouseOver} onMouseLeave={this.mouseOut} />);
    }
}

export default hoverImage;
