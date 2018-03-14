import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';
import TintedHeader from '../../components/misc/TintedHeader';
import { SubmitType, ShortUserType, ChallengeType } from '../../types';
import { Link } from 'react-router-dom';
import linkRenderer from '../misc/linkRenderer';

class SubmitDetails extends Component {
    static propTypes = {
        submission: SubmitType,
        challenge: ChallengeType,
        user: ShortUserType,
    }

    render() {
        const { challenge, submission, user } = this.props;
        return(
            <main>
                <TintedHeader title={ `Submission for: #${challenge.number} ${challenge.title}` } />
                <div className="container">
                    <h3>Answer to: <Link to={`/challenge/${challenge.url}`}>{challenge.title}</Link></h3>
                    <p>By: <Link to={`/profile/${user.username}` }>{ user.username }</Link></p>
                    {submission.repo && <p><strong>Repo</strong> : <Link to={ submission.repo }>{submission.repo}</Link></p>}
                    {submission.demo && <p><strong>Demo URL</strong>: <Link to={ submission.demo }>{submission.demo}</Link></p>}
                    <p><strong>Description</strong></p>
                    <ReactMarkdown source={ submission.description } renderers={{ link: linkRenderer }} />
                    <p><strong>Advantage</strong></p>
                    <ReactMarkdown source={ submission.advantage } renderers={{ link: linkRenderer }}/>
                    <p><strong>Struggle</strong></p>
                    <ReactMarkdown source={ submission.struggle } renderers={{ link: linkRenderer }}/>
                </div>
                <div className="container">
                    <h3>Comments</h3>
                    <p>codecorgi doesn't support comments yet :( add comments on the repo if possible.</p>
                </div>
            </main>
        );
    }
}

export default SubmitDetails;
