import React from 'react';
import { ProfileType } from '../../types';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import corgiImg from '../../assets/images/team/corginson.png';
import bgImage from '../../assets/images/art/pattern-background03.png';
import { Helmet } from 'react-helmet';
import { PROD_URL, BACKEND_URL } from '../../constants';

class ProfileComponent extends React.Component {
    static propTypes = {
        profile: ProfileType,
        self: PropTypes.bool.isRequired,
    }

    render() {
        const { profile, self } = this.props;
        return (
            <div className="profile-container">
                <Helmet>
                    <title>{ `codecorgi - ${profile.name}'s developer profile`  }</title>
                    <meta property="og:type" content="profile" />
                    <meta property="og:title" content={ `Check ${profile.name}'s developer profile in codecorgi` } />
                    <meta property="og:url" content={ `${PROD_URL}/${profile.profile_url}` } />
                    <meta property="og:image" content={`${profile.avatar.url || corgiImg}` } />
                    <meta name="twitter:title" content={ `codecorgi - ${profile.name}'s developer profile` } />
                    <meta name="twitter:image" content={`${profile.avatar.url || corgiImg}` } />
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
                                            {!profile.avatar.url && <img src={corgiImg} alt={profile.name} />}
                                            {profile.avatar.url && <img src={profile.avatar.url} alt={profile.name} />}
                                        </div>
                                        <span>{profile.name}</span>
                                    </h1>
                                    <p>{profile.profile.tagline}</p>
                                    <p><i className="icon-location" /> {profile.profile.location}</p>
                                </header>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default ProfileComponent;
