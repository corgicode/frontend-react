import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { BACKEND_URL } from '../../constants';
import SubmitForm from '../../components/submit/form';
import { readEndpoint, createResource } from 'redux-json-api';
import { ChallengeType } from '../../types';

class SubmitFormContainer extends Component {
    static propTypes = {
        profile: PropTypes.shape({
            authenticated: PropTypes.bool,
        }),
        createResource: PropTypes.func,
        readEndpoint: PropTypes.func,
        number: PropTypes.string,
        challenge: ChallengeType,
    }

    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
    }

    componentWillMount() {
        this.props.readEndpoint(`challenge/${ this.props.number }`);
    }

    onSubmit(data) {
        const submit = {
            type: 'submit',
            attributes: { ...data, challenge: this.props.challenge.id },
        };
        this.props.createResource(submit);
    }

    render() {
        const { profile, challenge } = this.props;
        return(
            <main>
                {profile.authenticated && challenge &&
                    <div>
                        <SubmitForm title="Add a Submission" challenge={ { id: challenge.id, ...challenge.attributes } } onSubmit={ this.onSubmit } />
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
    const { challenges = { data: []} } = api;
    const number = ownProps.match.params.number;
    const challenge = challenges.data.find(c => c.attributes && c.attributes.number === number);
    return {
        number,
        challenge,
        profile: {
            authenticated: profile.authenticated,
        },
    };
};

const mapDispatchToProps = (dispatch) => bindActionCreators({
    readEndpoint,
    createResource,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(SubmitFormContainer);
