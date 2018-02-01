import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { readEndpoint, createResource } from 'redux-json-api';
import { withRouter } from 'react-router';
import ReactRouterPropTypes from 'react-router-prop-types';

import { BACKEND_URL } from '../../constants';
import SubmitForm from '../../components/submit/form';
import { SubmitType } from '../../types';

class SubmitFormContainer extends Component {
    static propTypes = {
        profile: PropTypes.shape({
            authenticated: PropTypes.bool,
        }),
        createResource: PropTypes.func,
        readEndpoint: PropTypes.func,
        number: PropTypes.string,
        challenge: PropTypes.string,
        submission: SubmitType,
        history: ReactRouterPropTypes.history,
    }

    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
    }

    componentWillMount() {
        this.props.readEndpoint(`submit/user/${ this.props.number }`);
        this.props.readEndpoint(`challenge/${ this.props.number }`);
    }

    componentWillReceiveProps() {
        if (this.props.submission && this.props.submission.id) {
            this.props.history.push(`/submit/edit/${this.props.submission.id}`);
        }
    }

    onSubmit(data) {
        const submit = {
            type: 'submit',
            attributes: { ...data, challenge: this.props.challenge.id },
        };
        this.props.createResource(submit).then(r => {
            let id;
            if (r && r.data && r.data[0] && r.data[0].id) {
                id = r.data[0].id;
                this.props.history.push(`/submit/${id}`);
            }
            // else idk, show an error?
        });
    }

    render() {
        const { profile, challenge } = this.props;
        return(
            <main>
                {profile.authenticated && challenge &&
                    <div>
                        <SubmitForm title="Add a Submission" subtitle="Get feedback and save to your portfolio!" challenge={ { id: challenge.id, ...challenge.attributes } } onSubmit={ this.onSubmit } />
                    </div>
                }
                {!profile.authenticated &&
                     <div className="container">
                         <p><strong>Sign up to create a submission.</strong></p>
                         <Link to={`${BACKEND_URL}/api/auth/github`} target="_self" className="btn btn-large">
                            Signup with github
                         </Link>
                     </div>
                }
            </main>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    const { profile = {}, api } = state;
    const { challenges = { data: []}, submit: submissions = { data: []}} = api;
    const number = ownProps.match.params.number;
    const challenge = challenges.data.find(c => c.attributes && c.attributes.number === number);
    const submission = challenge ? submissions.data.find(s => s.attributes.challenge === challenge.id ) : undefined;
    return {
        number,
        challenge,
        submission: submission ? { ...submission.attributes, id: submission.id } : {},
        profile: {
            authenticated: profile.authenticated,
        },
    };
};

const mapDispatchToProps = (dispatch) => bindActionCreators({
    readEndpoint,
    createResource,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(SubmitFormContainer));
