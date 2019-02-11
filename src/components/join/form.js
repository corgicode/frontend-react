/** @jsx jsx */
import React from 'react';
import StyledLink from 'Lib/buttons/Link';
import blueBg from 'Images/blue-bg.jpg';
import femaleOctocat from 'Images/femalecodertocat.png';
import { BACKEND_URL } from 'Constants';
import { jsx } from '@emotion/core';
import { Link } from 'react-router-dom';

class JoinForm extends React.Component {
    render() {
        return (
            <section css={{  backgroundImage: `url(${blueBg})` }}>
                <div className="container inner-top-md inner-bottom-sm">
                    <div className="row">
                        <div className="col-md-5 inner-right inner-bottom-xs">
                            <header>
                                <h1>Join</h1>
                                <p>You'll use your email to log in, your username is used when displaying submissions and comments.</p>
                                <p>
                                    <StyledLink to={`${BACKEND_URL}/api/auth/github`} css={{ fontSize: '18px', padding: '15px 35px 17px', marginTop: '35px' }}>
                                        Submit
                                    </StyledLink>
                                </p>
                                <p> Have an account?
                                    <Link to={`${BACKEND_URL}/api/auth/github`}>
                                        Log in
                                    </Link>
                                </p>
                                <p>
                                    <Link to={`${BACKEND_URL}/api/auth/github`}>
                                        Forgot Password?
                                    </Link>
                                </p>
                            </header>
                        </div>
                        <div className="col-md-7">
                            <div>
                                <img src={femaleOctocat} alt="Female coder octocat by jeejkang" />
                                <p className="text-center">
                                    <a href="https://octodex.github.com/femalecodertocat" target="_blank">
                                        Female coder octocat
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default JoinForm;
