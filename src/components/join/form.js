import React from 'react';
import Link from 'Lib/buttons/Link';
import blueBg from 'Images/blue-bg.jpg';
import femaleOctocat from 'Images/femalecodertocat.png';
import { BACKEND_URL } from 'Constants';

class JoinForm extends React.Component {
    render() {
        return (
            <section id="hero" className="dark-bg img-bg img-bg-soft" style={{ backgroundImage: `url(${blueBg})` }}>
                <div className="container inner-top-md inner-bottom-sm">
                    <div className="row">
                        <div className="col-md-5 inner-right inner-bottom-xs">
                            <header>
                                <h1>Signup</h1>
                                <p>Use github to create or access your account.</p>
                                <p>
                                    <Link to={`${BACKEND_URL}/api/auth/github`} target="_self" css={{ fontSize: '18px', padding: '15px 35px 17px', marginTop: '35px' }}>
                                        <i className="icon-github" />
                                        Github Signup
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
