import React from 'react';
import { ProfileType, SubmitType } from '../../types';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import corgiImg from '../../assets/images/team/corginson.png';
import bgImage from '../../assets/images/art/pattern-background03.png';
import { Helmet } from 'react-helmet';
import { PROD_URL, BACKEND_URL } from '../../constants';
import ReactMarkdown from 'react-markdown';
import SubmitList from '../submit/list';
import _get from 'lodash/get';
import linkRenderer from '../misc/linkRenderer';
import { ensureUrl } from '../../constants/utils';

class ProfileComponent extends React.Component {
    static propTypes = {
        profile: ProfileType,
        self: PropTypes.bool.isRequired,
        submits: PropTypes.arrayOf( SubmitType ),
    }

    render() {
        const { profile, self, submits } = this.props;
        return (
            <div className="profile-container">
                <Helmet>
                    <title>{ `codecorgi - ${profile.name}'s developer profile`  }</title>
                    <meta property="og:type" content="profile" />
                    <meta property="og:title" content={ `Check ${profile.name}'s developer profile in codecorgi` } />
                    <meta property="og:url" content={ `${PROD_URL}/${profile.profile_url}` } />
                    <meta property="og:image" content={`${_get(profile, 'avatar.url', undefined) || corgiImg}` } />
                    <meta name="twitter:title" content={ `codecorgi - ${profile.name}'s developer profile` } />
                    <meta name="twitter:image" content={`${_get(profile, 'avatar.url', undefined) || corgiImg}` } />
                </Helmet>
                <section className="tint-bg img-bg-softer" style={{ backgroundImage: `url(${bgImage})` }}>
                    <div className="container header-container">
                        {self && <div className="options">
                            <Link className="btn" to="/profile/edit">Edit</Link>
                            <Link className="btn" to={`${BACKEND_URL}/api/auth/logout`} target="_self">Logout</Link>
                        </div>}
                        <div className="row">
                            <div className="col-md-12 text-center">
                                <header>
                                    <h1>
                                        <div className="profile-image">
                                            {!_get(profile, 'avatar.url', undefined) && <img src={ corgiImg } alt={ profile.name } />}
                                            {_get(profile, 'avatar.url', undefined) && <img src={ _get(profile, 'avatar.url', '') } alt={ profile.name } />}
                                        </div>
                                        <span>{ profile.name }</span>
                                    </h1>
                                    <p>{ _get(profile, 'profile.tagline', '') }</p>
                                    <p><i className="icon-location" /> { _get(profile, 'profile.location', '') }</p>
                                </header>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="container profile-body" style={{ margin: '30px auto' }}>
                    <div className="row">
                        <div className="col-xs-12">
                            <ReactMarkdown source={ _get(profile, 'profile.bio', '') } renderers={{ link: linkRenderer }}  />
                        </div>
                    </div>
                    {submits && submits.length > 0 &&
                        <div className="row" style={{ marginBottom: '30px' }}>
                            <h3>Submissions</h3>
                            <div className="col-xs-12">
                                <SubmitList submits={ submits } />
                            </div>
                        </div>
                    }
                    {profile.projects && profile.projects.length > 0 &&
                        <div className="row" style={{ marginBottom: '30px' }}>
                            <h3>Projects</h3>
                            <div className="col-xs-12">
                                {profile.projects.map((p, index) => (
                                    <div className="project" key={ index }>
                                        <p><Link to={ ensureUrl(p.url) } target="_blank">{ p.name }</Link></p>
                                        <p>{ p.description }</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    }
                </section>
            </div>
        );
    }
}

export default ProfileComponent;
