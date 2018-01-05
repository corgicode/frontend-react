import React from 'react';
import bgImage from '../../assets/images/art/pattern-background03.png';
import PropTypes from 'prop-types';

class TintedHeader extends React.Component {
    static propTypes = {
        title: PropTypes.string.isRequired,
    }

    render() {
        return (
            <section className="tint-bg img-bg-softer" style={{ backgroundImage: `url(${bgImage})` }}>
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12 text-center">
                            <header>
                                <h1>{this.props.title}</h1>
                            </header>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default TintedHeader;
