import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { SubmitType } from '../../types';
import { Link } from 'react-router-dom';
import Moment from '../misc/moment';

class SubmitList extends Component {
    static propTypes = {
        submits: PropTypes.arrayOf(SubmitType),
    }

    render() {
        const { submits } = this.props;

        return(
            <div>
                {submits.map((s) => (
                    s && s.attributes &&
                    <div key={ s.id }>
                        <p>Submission for: <strong> {s.attributes.challenge.number }&nbsp;</strong>
                            <Link to={`/challenge/${s.attributes.challenge.number}/${ s.attributes.challenge.title }`}>{ s.attributes.challenge.title } </Link>
                        </p>
                        <p><strong>Description:</strong> { s.attributes.description }</p>
                        <p>Submitted: <Moment date={ s.attributes.createdAt } /></p>
                        <p>
                            <Link to={`/submit/${ s.id }`} className="btn btn-primary">View Details</Link>
                        </p>
                    </div>
                ))}
            </div>
        );
    }
}

export default SubmitList;
