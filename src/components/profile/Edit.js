import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { ProfileType } from '../../types';
import TintedHeader from '../misc/TintedHeader';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { noop } from '../../constants/utils';

class ProfileEdit extends React.Component {
    static propTypes = {
        profile: ProfileType,
        initialValues: PropTypes.object,
        onSubmit: PropTypes.func,
        handleSubmit: PropTypes.func,
    }

    render() {
        const { profile = { avatar: {}, profile: {}}, onSubmit, handleSubmit } = this.props;
        return (
            <div>
                <TintedHeader title="Edit Profile" />
                <section className="form">
                    <div className="container">
                        <Link to="/profile" className="btn"><i className="icon-left-1" />Profile</Link>
                        <form onSubmit={handleSubmit(onSubmit)} >
                            <div className="row">
                                <div className="col-xs-7">
                                    <div className="control-group">
                                        <label htmlFor="avatar.url">Avatar Url:</label>
                                        <Field name="avatar.url" component="input" type="text" />
                                    </div>
                                    <div className="control-group">
                                        <label htmlFor="name">Name</label>
                                        <Field name="name" component="input" type="text" />
                                    </div>
                                    <div className="control-group">
                                        <label htmlFor="profile.tagline">Tagline</label>
                                        <Field name="profile.tagline" component="input" type="text" />
                                    </div>
                                </div>
                                <div className="col-xs-5">
                                    {profile.avatar && <img className="img-rounded" height="100" src={profile.avatar.url} alt={profile.name} />}
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-7">
                                    <div className="control-group">
                                        <label htmlFor="profile.bio">Bio</label>
                                        <Field name="profile.bio" component="textarea" type="text" />
                                    </div>
                                    <div className="control-group">
                                        <label htmlFor="profile.company">Company</label>
                                        <Field name="profile.company" component="input" type="text" />
                                    </div>
                                    <div className="control-group">
                                        <label htmlFor="profile.twitter_url">Twitter</label>
                                        <Field name="profile.twitter_url" component="input" type="text" placeholder="https://twitter.com/david" />
                                    </div>
                                    <div className="control-group">
                                        <label htmlFor="profile.linkedin_url">LinkedIn</label>
                                        <Field name="profile.linkedin_url" component="input" type="text" placeholder="https://linkedin.com/in/david" />
                                    </div>
                                    <div className="control-group">
                                        <label htmlFor="profile.blog">Blog Url</label>
                                        <Field name="profile.blog" component="input" type="text" placeholder="https://medium.com/@dvidsilva" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-xs-12">
                                <Link to="/profile" className="btn"><i className="icon-cancel" />Discard</Link>
                                <button type="submit" className="btn btn-primary"><i className="icon-thumbs-up-1" /> Submit</button>
                            </div>
                        </form>
                    </div>
                </section>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        initialValues: ownProps.profile,
        onSubmit: ownProps.onSubmit || noop,
    };
};

export default connect(mapStateToProps, null)(reduxForm({
    form: 'profile/edit',
})(ProfileEdit));
