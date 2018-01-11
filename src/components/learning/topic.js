import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export class LearningTopic extends Component {
    static propTypes = {
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        iconClass: PropTypes.string,
        links: PropTypes.arrayOf(
            PropTypes.shape({
                href: PropTypes.string.isRequired,
                author: PropTypes.string.isRequired,
                authorHref: PropTypes.string,
                type: PropTypes.oneOf(['Article', 'Interactive', 'Video', 'Course', 'Guide', 'Compilation', 'Blog', 'Repo']),
                name: PropTypes.string.isRequired,
            }),
        ),
    }

    static defaultProps = {
        iconClass: 'icon-lamp icn lg',
        links: [],
    }

    render() {
        return (
            <div className="topic">
                <div className="row">
                    <div className="col-sm-10">
                        <h2><i className={ this.props.iconClass } /> { this.props.title }</h2>
                        <p className="text-small description">{ this.props.description }</p>
                    </div>
                </div>
                <div className="row">
                    <ul className="arrowed">
                        {this.props.links.map((l, key) => (
                            <li key={ key }>{ l.type }:&nbsp;
                                <Link to={ l.href } target="_blank">
                                    { l.name }
                                </Link>
                                &nbsp;By&nbsp;
                                {l.authorHref && <Link to={ l.href } target="_blank">{ l.author }</Link>}
                                {!l.authorHref && l.author }
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        );
    }
}

export default LearningTopic;
