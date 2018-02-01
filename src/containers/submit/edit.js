import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { readEndpoint, updateResource } from 'redux-json-api';
import { withRouter } from 'react-router';
import ReactRouterPropTypes from 'react-router-prop-types';

import { BACKEND_URL } from '../../constants';
import SubmitForm from '../../components/submit/form';
import { ChallengeType, SubmitType } from '../../types';

class EditSubmitContainer extends Component {
    static propTypes = {
        profile: PropTypes.shape({
            authenticated: PropTypes.bool,
        }),
        updateResource: PropTypes.func,
        readEndpoint: PropTypes.func,
        id: PropTypes.string,
        challenge: ChallengeType,
        submission: SubmitType,
        history: ReactRouterPropTypes.history,
    }

    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
    }

    componentWillMount() {
        this.props.readEndpoint(`submit/${ this.props.id }`);
    }

    onSubmit(data) {
        const submit = {
            type: 'submit',
            attributes: { ...data, challenge: this.props.challenge.id },
            id: data.id,
        };
        this.props.updateResource(submit).then(r => {
            console.log(r, 'saved');
        });
    }

    render() {
        const { profile, challenge, submission } = this.props;
        return(
            <main>
                {profile.authenticated && challenge && submission &&
                    <div>
                        <SubmitForm title="Edit Submission" submission={ submission } challenge={ { id: challenge.id, ...challenge.attributes } } onSubmit={ this.onSubmit } />
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
    const { /* challenges = { data: []}, */ submit: submissions = { data: []}} = api;
    const id = ownProps.match.params.id;
    const submission = submissions.data.find((c) => c.id === id) || { attributes: {} };
    const challenge = submission.attributes && submission.attributes.challenge || { attributes: {} };
    return {
        id,
        challenge,
        submission: submission ? { ...submission.attributes, id: submission.id } : {},
        profile: {
            authenticated: profile.authenticated,
        },
    };
};

const mapDispatchToProps = (dispatch) => bindActionCreators({
    readEndpoint,
    updateResource,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(EditSubmitContainer));
