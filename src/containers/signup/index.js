import React from 'react';
import blueBg from '../../assets/images/blue-bg.jpg';
import femaleOctocat from '../../assets/images/femalecodertocat.png';
import { Link } from 'react-router-dom';
import { BACKEND_URL, PROD_URL } from '../../constants';
import { Helmet } from 'react-helmet';

class Signup extends React.Component {
    render() {
        return(
            <section id="hero" className="dark-bg img-bg img-bg-soft" style={{ backgroundImage: `url(${blueBg})` }}>
                <Helmet>
                    <title>Signup for codecorgi and build your dev profile</title>
                    <meta property="og:type" content="business.business" />
                    <meta property="og:title" content="Signup for codecorgi and build your dev profile" />
                    <meta property="og:url" content={ `${PROD_URL}/signup` } />
                    <meta property="og:image" content={`${femaleOctocat}` } />
                    <meta name="twitter:title" content="Signup for codecorgi and build your dev profile" />
                    <meta name="twitter:image" content={`${femaleOctocat}` } />
                </Helmet>
                <div className="container inner-top-md inner-bottom-sm">
                    <div className="row">
                        <div className="col-md-5 inner-right inner-bottom-xs">
                            <header>
                                <h1>Signup</h1>
                                <p>Use github to create or access your account.</p>
                                <p>
                                    <Link to={`${BACKEND_URL}/api/auth/github`} target="_self" className="btn btn-large">
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

export default Signup;
