import React, { Component } from 'react';
import TextInput from '../fields/Text';
import TextArea from '../fields/TextArea';
import TintedHeader from '../misc/TintedHeader';
import PropTypes from 'prop-types';
import { ChallengeType } from '../../types';
import { required } from '../../constants/validation';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';

class SubmitForm extends Component {
    static propTypes = {
        title: PropTypes.string,
        challenge: ChallengeType,
        initialValues: PropTypes.object,
        onSubmit: PropTypes.func,
        handleSubmit: PropTypes.func,
    }

    render() {
        const { challenge } = this.props;

        return(
            <div>
                <TintedHeader title={ this.props.title } />
                <section className="form">
                    <div className="container">
                        <h2>Challenge #{challenge.number}: { challenge.title }</h2>
                        <form onSubmit={ this.props.handleSubmit(this.props.onSubmit) } >
                            <div className="row">
                                <div className="col-sm-7">
                                    <Field name="repo"
                                        validate={[ required('Please enter an url for your profile picture.')]}
                                        component={ TextInput } label=" Github/PublicRepo URL" />
                                    <Field name="demo"
                                        component={ TextInput } label="Demo URL" />
                                    <p className="help-text">You can host your project for free using&nbsp;
                                        <Link to="https://pages.github.com/" target="_blank">Github Pages</Link>,
                                        <Link to="https://firebase.google.com/docs/hosting/" target="_blank">Firebase Hosting</Link> or
                                        <Link to="https://pages.gitlab.io/" target="_blank">GitLab Pages</Link>.
                                    </p>
                                    <Field name="description" component={ TextInput } label="Description" placeholder="I used Bootstrap to display..."/>
                                    <Field name="advantage" placeholder="It was easy for me to..." component={ TextArea } label="This is what I did best"/>
                                    <p>You can use markdown in this textarea.</p>
                                    <Field name="struggle" placeholder="It was hard for me to..." component={ TextArea } label="This was harder for me"/>
                                    <p>You can use markdown in this textarea.</p>
                                    <div className="col-xs-12">
                                        <button type="submit" className="btn btn-primary"><i className="icon-thumbs-up-1" /> Submit</button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </section>
            </div>);
    }
}

const mapStateToProps = (state, ownProps) => {
    const challengeId = ownProps.challenge && ownProps.challenge.id;
    return {
        challenge: ownProps.challenge,
        initialValues: {
            challenge: challengeId,
        }
    };
};

export default connect(mapStateToProps, null)(reduxForm({
    form: 'profile/edit',
})(SubmitForm));
