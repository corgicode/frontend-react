import React, { Component } from 'react';
import { ChallengeType } from '../../types';
import { Link } from 'react-router-dom';

class ChallengeShort extends Component {
    static propTypes = {
        challenge: ChallengeType,
    }

    render() {
        const { challenge } = this.props;
        return(
            <div className="row">
                <div className="challenge white-bg">
                    <h2 className="post-title">
                        <Link to={challenge.url}>
                            <small>Challenge {challenge.number}:</small>
                            {challenge.title}
                        </Link>
                    </h2>
                    <ul className="meta">
                        <li>
                            <strong>Difficulty:</strong>
                            {Array((challenge.head.difficulty || 1)).map((k) => {
                                return <i key={ k } className="icon-attention" />;
                            })}
                        </li>
                        <li>
                            <i className="icon-block-1" />
                            <strong>Resolution:</strong> Unresolved</li>
                        <li>
                            <i className="icon-attention-circle" />
                            <strong>Priority:</strong> <span>{ challenge.head.priority }</span>
                        </li>
                    </ul>
                    <p>{challenge.body.short_description &&  challenge.body.short_description }</p>
                    <p>{!challenge.body.short_description && challenge.body.description }</p>
                    <p>
                        <i className="icon-tags" />
                        <strong>Tags:</strong>
                        {challenge.tags.map((t, key) => {
                            return <span key={ key } className="tag blue-bg">{ t }</span>;
                        })}
                    </p>
                    <Link to={challenge.url} className="btn">Details</Link>
                    <Link to={ `/challenge/submit/${challenge.id}` } className="btn">
                        Submit Answer <i className="icon icon-right-1" />
                    </Link>
                </div>
            </div>
        );
    }
}

export default ChallengeShort;
