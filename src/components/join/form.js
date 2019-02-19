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
            <section css={{  backgroundImage: `url(${blueBg})`,
                backgroundSize: 'cover',
                padding: '40px 20px 80px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                '> div': { padding: '10px 20px', flexGrow: 1, maxWidth: 450, },
                '@media (max-width: 860px)': {
                    flexDirection: 'column',
                    paddingBottom: 40,
                    '> div': { maxWidth: '90%' },
                }
            }}>
                <div css={{ background: 'white', borderRadius: '6px', padding: '18px', margin: '0 20px' }}>
                    <header css={{ p: { fontSize: 16 }}}>
                        <form css={{  }}>
                            <h1>Create an account</h1>
                            <p>You&apos;ll use your email to log in, your username is used when displaying submissions and comments.</p>
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
                <div css={{ }}>
                    <img src={logoSquared} alt="codecorgi logo" ariaIgnore />
                </div>
            </section>
        );
    }
}

export default JoinForm;
