import React from 'react';
import { ProfileType } from '../../types';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import corgiImg from '../../assets/images/team/corginson.png';
import bgImage from '../../assets/images/art/pattern-background03.png';

class ProfileComponent extends React.Component {
    static propTypes = {
        profile: ProfileType,
        self: PropTypes.bool.isRequired,
    }

    render() {
        const { profile, self } = this.props;
        console.log(profile);
        return (
            <div className="profile-container">
                <section className="tint-bg img-bg-softer" style={{ backgroundImage: `url(${bgImage})` }}>
                    <div className="container header-container">
                        {self && <div className="options">
                            <Link className="btn" to="/profile/edit">Edit</Link>
                            <Link className="btn" to="/api/auth/logout" target="_self">Logout</Link>
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
