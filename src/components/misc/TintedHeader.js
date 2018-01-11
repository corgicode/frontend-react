import React from 'react';
import bgImage from '../../assets/images/art/pattern-background03.png';
import PropTypes from 'prop-types';

class TintedHeader extends React.Component {
    static propTypes = {
        title: PropTypes.string,
        subtitle: PropTypes.string,
        children: PropTypes.oneOfType([
            PropTypes.arrayOf(PropTypes.node),
            PropTypes.node,
        ]),
        id: PropTypes.string,
    }

    render() {
        return (
            <section id={ this.props.id } className="tint-bg img-bg-softer" style={{ backgroundImage: `url(${bgImage})` }}>
                <div className="container inner">
                    <div className="row">
                        <div className="col-xs-12 text-center">
                            <header>
                                <h1>{this.props.title}</h1>
                                {this.props.subtitle && <p>{this.props.subtitle}</p>}
                            </header>
                            {this.props.children &&
                                <div className="row">
                                    <div className="col-sm-10 col-sm-offset-1">
                                        {this.props.children}
                                    </div>
                                </div>
                            }
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default TintedHeader;
