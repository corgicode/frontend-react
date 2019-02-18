/** @jsx jsx */
import { jsx } from '@emotion/core';
import React from 'react';
import StyledLink from 'Lib/buttons/Link';
import blueBg from 'Images/blue-bg.jpg';
import logoSquared from 'Images/logo-squared.png';
import { BACKEND_URL } from 'Constants';
import { Link } from 'react-router-dom';
import { Field } from 'redux-form';
import { BasicInput } from 'Components/fields/';

class JoinForm extends React.Component {
    render() {
        return (
            <section css={{  backgroundImage: `url(${blueBg})` }}>
                <div className="container inner-top-md inner-bottom-sm">
                    <div className="row">
                        <div className="col-md-6 inner-right inner-bottom-xs">
                            <header css={{ p: { fontSize: 16 }}}>
                                <form css={{ background: 'white', borderRadius: '8px', padding: '18px', margin: '0 10px' }}>
                                    <h1>Create an account</h1>
                                    <p>You'll use your email to log in, your username is used when displaying submissions and comments.</p>
                                    <Field name="username" component={ BasicInput } type="text" required placeholder="Username" />
                                    <Field name="email" component={ BasicInput } type="email" required placeholder="Email"/>
                                    <Field name="password" component={ BasicInput } type="password" required placeholder="Password"/>
                                    <p>
                                        <StyledLink to={`${BACKEND_URL}/api/auth/github`} css={{ fontSize: '18px', padding: '15px 35px 17px' }}>
                                            Submit
                                        </StyledLink>
                                    </p>
                                    <p> Have an account?&nbsp;
                                        <Link to={`${BACKEND_URL}/api/auth/github`}>
                                            Log in
                                        </Link>
                                    </p>
                                </form>
                            </header>
                        </div>
                        <div className="col-md-6">
                            <div css={{ margin: '10x 20px', textAlign: 'center', }}>
                                <img src={logoSquared} alt="codecorgi logo" ariaIgnore />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default JoinForm;
