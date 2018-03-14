import React, { Component } from 'react';
import { ChallengeType } from '../../types';
import TintedHeader from '../misc/TintedHeader';
import DifficultyStars from '../misc/difficulty';
import Tags from '../misc/tags';
import Moment from '../misc/moment';
import ReactMarkdown from 'react-markdown';
import { Link } from 'react-router-dom';
import { ensureUrl } from '../../constants/utils';
import linkRenderer from '../misc/linkRenderer';

class SingleChallenge extends Component {
    static propTypes = {
        challenge: ChallengeType,
    }

    render() {
        const { challenge } = this.props;
        return(
            <div>
                <TintedHeader title={challenge.title} subtitle={ challenge.body.short_description } />
                <section className="container">
                    <div style={{ maxWidth: '800px', width: '92%', marginLeft: 'auto', marginRight: 'auto', marginTop: '60px', marginBottom: '120px' }}>
                        <div className="ticket-data row pricing">
                            <div className="col-sm-6 plan">
                                <ul className="features">
                                    <li>
                                        <i className="icon-user" />
                                        <strong>Owner:</strong> {challenge.head.owner}
                                    </li>
                                    <li>
                                        <i className="icon-asterisk" />
                                        <strong>Difficulty:</strong>
                                        <DifficultyStars difficulty={ challenge.head.difficulty } />
                                    </li>
                                    <li>
                                        <i className="icon-th-list" />
                                        <strong>Type:</strong> { challenge.head.challenge_type }
                                    </li>
                                    <li>
                                        <i className="icon-tags" />
                                        <strong>Tags:&nbsp;</strong>
                                        <Tags tags={ challenge.tags } />
                                    </li>
                                </ul>
                            </div>
                            <div className="col-sm-6 plan">
                                <ul className="features">
                                    <li>
                                        <i className="icon-calendar" />
                                        <strong>Date Created:</strong> <Moment date={ challenge.head.date_created } />
                                    </li>
                                    <li>
                                        <i className="icon-attention-circle" />
                                        <strong>Priority:</strong> {challenge.head.priority}
                                    </li>
                                    <li>
                                        <i className="icon-help-circle" />
                                        <strong>Status:</strong> { challenge.head.status }
                                    </li>
                                    <li>
                                        <i className="icon-block-1" />
                                        <strong>Resolution:</strong> { challenge.head.resolution }
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <a className="anchor" id="description" />
                        <div className="grey-box">
                            <h2>Description</h2>
                            <div className="description">
                                <ReactMarkdown source={ challenge.body.description } renderers={{ link: linkRenderer }} />
                            </div>
                            <a className="anchor" id="attachments" />
                            <h2>Attachments</h2>
                            <div className="attachments">
                                <ul>
                                    {challenge.body.attachments.map((a, key) => (
                                        <li key={ key }>
                                            <i className="icon-install" />
                                            <a href={ ensureUrl(a.url) } title={ a.name } target="_blank">
                                                { a.name }
                                            </a>
                                        </li>
                                    ))}
                                    {(!challenge.body.attachments || challenge.body.attachments.length < 1 ) &&
                                        <li>This challenge does not have any attachments.</li>
                                    }
                                </ul>
                            </div>
                        </div>
                        <div className="row">
                            <Link to={ `/submit/new/${challenge.number}` } className="btn btn-large">
                                Submit Answer <i className="icon icon-right-1" />
                            </Link>
                        </div>
                        <h2>Extra Points</h2>
                        <div className="extra-points">
                            <a className="anchor" id="extra-points" />
                            {challenge.body.extra_points &&
                                <ReactMarkdown source={challenge.body.extra_points} renderers={{ link: linkRenderer }} />
                            }
                            {!challenge.body.extra_points &&
                                <p>The requirements are complete as is.</p>
                            }
                        </div>
                        <a className="anchor" id="technical" />
                        <h2>Technical Notes</h2>
                        <div className="technical-notes">
                            <ReactMarkdown source={challenge.technical_notes} renderers={{ link: linkRenderer }} />
                            <p>When you're done, push to your repo and submit your answer.</p>
                        </div>
                        <a className="anchor" id="source" />
                        <h2>Source:</h2>
                        <div className="source">
                            {challenge.source.map((s, key) => (
                                <p key={ key }>
                                    <strong>{s.name}:&nbsp;</strong>
                                    <a href={ ensureUrl(s.url)} title={ `${challenge.title} - ${s.name}`} target="_blank">{ s.url }</a>
                                </p>
                            ))}
                        </div>
                        <a className="anchor" id="procedure" />
                        <h2>Procedure:</h2>
                        <div className="procedure">
                            <ReactMarkdown source={ challenge.procedure } renderers={{ link: linkRenderer }} />
                            <p>Look at our <Link to="/learning">help</Link> section for more information about this.</p>
                        </div>
                        <a className="anchor" id="coding" />
                        <h2>Coding</h2>
                        <div className="coding">
                            {challenge.coding && <ReactMarkdown source={ challenge.coding } renderers={{ link: linkRenderer }} />}
                            {!challenge.coding &&
                                <div>
                                    <p>To create your answer follow this steps:</p>
                                    <ol>
                                        <li><a href="https://help.github.com/articles/fork-a-repo/" target="_blank">Fork</a>
                                            the repo to your account, or download the zip file</li>
                                        <li>Solve the ticket</li>
                                        <li>Commit your code</li>
                                        <li>Push your changes</li>
                                        <li>Publish your version in <a href="https://pages.github.com/" target="_blank">Github Pages</a> or
                                            <a href="https://firebase.google.com/docs/hosting/" target="_blank">Firebase Hosting</a></li>
                                        <li>Submit your response</li>
                                    </ol>
                                </div>
                            }
                        </div>
                        <a className="anchor" id="troubleshooting" />
                        <h2>Troubleshooting | Help</h2>
                        <div className="troubleshooting">
                            <p>If you have need clarification with the project, files, or description, open an issue on github.</p>
                            <p>For questions with the platform, email us at support@codecorgi.co</p>
                            <p>For help with github or coding, consult our <Link to="/learning">Learning and Resources</Link> page,
                            where you will find information and links to tutorials and other content.</p>
                        </div>
                        <div className="row">
                            <Link to={ `/submit/new/${challenge.number}` } className="btn btn-large">
                                Submit Answer <i className="icon icon-right-1" />
                            </Link>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default SingleChallenge;
