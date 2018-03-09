import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class TeamMember extends Component {
    static propTypes = {
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        name: PropTypes.string,
        image: PropTypes.string,
        links: PropTypes.arrayOf(
            PropTypes.shape({
                href: PropTypes.string.isRequired,
                className: PropTypes.string.isRequired,
            }),
        ),
    }
    static defaultProps = {
        links: [],
    }

    render() {
        return (
            <figure className="member">
                <div className="icon-overlay icn-link">
                    <a><img src={this.props.image} className="img-circle"/></a>
                </div>
                <figcaption>
                    <h2>
                        {this.props.name}
                        <span>{this.props.title}</span>
                    </h2>
                    <p>
                        {this.props.description}
                    </p>
                    <ul className="social">
                        {this.props.links.map((l, key) => (
                            <li key={ key }>
                                <a href={l.href} target="_blank">
                                    <i className={l.className}/>
                                </a>
                            </li>
                        ))}
                    </ul>
                </figcaption>
            </figure>
        );
    }
}

export default TeamMember;
