import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { ProfileType } from '../../types';
import TintedHeader from '../misc/TintedHeader';
import TextInput from '../fields/Text';
import TextArea from '../fields/TextArea';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { noop } from '../../constants/utils';
import { required } from '../../constants/validation';

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
                                <div className="col-sm-7">
                                    <Field name="avatar.url"
                                        validate={[ required('Please enter an url for your profile picture.')]}
                                        component={ TextInput } label="Avatar Url" type="text" />
                                    <Field name="name"
                                        validate={[ required('Please enter your name.')]}
                                        component={ TextInput } label="Name" type="text" />
                                    <Field name="profile.tagline"
                                        component={ TextInput } label="Tagline" type="text" />
                                </div>
                                <div className="col-sm-5">
                                    {profile.avatar && <img className="img-rounded" height="100" src={profile.avatar.url} alt={profile.name} />}
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-xs-12 col-sm-12 col-md-7">
                                    <Field name="profile.bio"
                                        component={ TextArea } label="Bio" type="text" />
                                    <Field name="profile.company"
                                        component={ TextInput } label="Company" type="text" />
                                    <Field name="profile.twitter_url"
                                        placeholder="https://twitter.com/david"
                                        component={ TextInput } label="Twitter" type="text" />
                                    <Field name="profile.linkedin_url"
                                        placeholder="https://linkedin.com/in/david"
                                        component={ TextInput } label="LinkedIn" type="text" />
                                    <Field name="profile.blog"
                                        placeholder="https://medium.com/@dvidsilva"
                                        component={ TextInput } label="Blog" type="text" />
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
