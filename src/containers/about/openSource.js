import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { PROD_URL } from '../../constants';
import octoCorgi from '../../assets/images/octo-corgi.png';
import patternBg from '../../assets/images/art/pattern-background03.png';

class WeAreOpenSource extends Component {
    render() {
        return(
            <div>
                <Helmet>
                    <title>Codecorgi is open source - contribute now!</title>
                    <meta property="og:title" content="Checkout codecorgi and make the platform better." />
                    <meta property="og:url" content={ `${PROD_URL}/about/open-source` } />
                    <meta property="og:image" content={`${octoCorgi}` } />
                    <meta name="twitter:title" content="Checkout codecorgi and make the platform better" />
                    <meta name="twitter:image" content={`${octoCorgi}` } />
                </Helmet>
                <section id="hero" className="tint-bg img-bg-softer" style={{backgroundRepeat: 'repeat', backgroundImage: `url(${patternBg})`}}>
                    <div className="container inner-top-md inner-bottom-sm">
                        <div className="row">
                            <div className="col-md-5 inner-right inner-bottom-xs">
                                <header>
                                    <h1>Open Source & Ready To Improve</h1>
                                    <p>
                                        No secrets here. All our code is open
                                        source to modify and all our decisions
                                        are available to learn from. So feel free
                                        to poke around our code, question our ideas, or tell us what
                                        new features you want.
                                    </p>
                                </header>
                            </div>
                            <div className="col-md-7 col-sm-12">
                                <div>
                                    <img src={ octoCorgi } alt="Octo corgi" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="who-we-are">
                    <div className="container ">
                        <div className="col-sm-6 col-sm-12">
                            <h2>Github</h2>
                            <p>
                                We have two repos/projects. One for the API, another
                                for the front end.
                                The Api is a standard express application with Mongo
                                as the database. It uses passport for authentication,
                                mailchimp for the newsletter and
                                mandrill for transactional emails.
                                We use something
                                called json-api to serialize the responses. The
                                frontend is a react application and it uses the
                                container/component pattern.
                            </p>
                            <p>
                                <strong>
                                    <a href="https://github.com/corgicode/api" target="_blank">Api / Backend</a>
                                </strong>
                            &nbsp;-&nbsp;
                                <strong>
                                    <a href="https://github.com/corgicode/frontend-react" target="_blank">Front End</a>
                                </strong>
                            </p>
                            <h2>Kanban</h2>
                            <p>
                                The roadmap is organized in contained in github issues
                                in every repo. You can create or pickup issues from there, or
                                leave comments with suggestions.
                                A tool called <a href="https://waffle.io" target="_blank">waffle </a>
                                helps us manage the roadmap and priorities, what is currently
                                being worked on, and what has been released.
                            </p>
                            <p>
                                <strong>
                                    <a href="https://waffle.io/corgicode/api" target="_blank">Api / Backend</a>
                                </strong>
                            &nbsp;-&nbsp;
                                <strong>
                                    <a href="https://waffle.io/corgicode/frontend-react" target="_blank">Front End</a>
                                </strong>
                            </p>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default WeAreOpenSource;
