import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import heroImage from '../../assets/images/hero-image.jpg';
import ticketImage from '../../assets/images/homepage/ticket.png';
import bgImage from '../../assets/images/art/pattern-background02.png';
import purdyImage from '../../assets/images/homepage/purdy-mac.png';
import formImage from '../../assets/images/homepage/3-submission-form.png';
import blueBg from '../../assets/images/blue-bg.jpg';
import { Helmet } from 'react-helmet';

class Home extends React.Component {
    static propTypes = {
    }

    constructor(props) {
        super(props);
        this.state = {
            submitted: false,
        };
        this.submitForm = this.submitForm.bind(this);
    }

    submitForm() {
        this.setState({ submitted: true });
        if (window && window.ga) {
            window.ga('send', 'event', 'Newsletter', 'subscribe', 'Homepage');
        }
        this.refs.form.submit();
    }

    render() {
        return (
            <main>
                <Helmet>
                    <title>codecorgi</title>
                    <link rel="canonical" href="https://codecorgi.co/" />
                    <meta name="description" content="Work through tickets/challenges like a real programmer does on the job. Codecorgi provides simulation project management tickets for you to build real products and grow your developer portfolio." />
                </Helmet>
                <section className="tall" style={{ backgroundImage: `url(${heroImage})`, backgroundSize: 'cover' }}>
                    <div className="container">
                        <h1 className="main white-text">Grow your developer profile</h1>
                        <div className="fadeInDown-3">
                            <Link to="/challenges/" className="btn btn-large">Get started now</Link>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="container inner-top-md inner-bottom-sm">
                        <div className="row">
                            <div className="col-md-5 inner-right inner-bottom-xs">
                                <header>
                                    <h1>How it works</h1>
                                    <p>
                                        Work through tickets/challenges like a real programmer does on the job. Codecorgi provides
                                        simulation project management tickets for you to build real products and
                                        grow your developer portfolio.
                                    </p>
                                </header>
                                <div><a href="/challenges/" className="btn btn-large btn-one">View Challenges</a></div>
                            </div>
                            <div className="col-md-7">
                                <figure>
                                    <div className="icon-overlay icn-link">
                                        <img src={ticketImage} alt="Sample challenge in codecorgi" />
                                    </div>
                                    <figcaption className="bordered no-top-border"/>
                                </figure>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="dark-bg img-bg-softer" style={{ backgroundImage: `url(${bgImage})` }}>
                    <div className="container inner">
                        <div className="row">
                            <div className="col-sm-8 col-sm-offset-2 text-center">
                                <header>
                                    <h1>Work on a ticket,<br />
                                    get feedback on your code</h1>
                                </header>
                            </div>
                            <div className="row">
                                <div className="col-sm-10 col-sm-offset-1 portfolio gap">
                                    <p className="text-center"><strong>Pick a challenge from our list, and share your solution with the community.</strong></p>
                                    <p className="text-center"><strong>Give and receive feedback from other developers.</strong></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="container inner-top inner-bottom-sm">
                        <div className="row">
                            <div className="col-md-8 col-md-offset-2 text-center">
                                <header>
                                    <h1>Code in your environment, submit to publish your code for review</h1>
                                </header>
                            </div>
                        </div>
                        <div className="row">
                            <div className="inner-top-sm">
                                <div className="col-sm-6">
                                    <figure>
                                        <div className="icon-overlay icn-link">
                                            <img src={purdyImage} alt="Code in your environment" />
                                        </div>
                                    </figure>
                                </div>
                                <div className="col-sm-6">
                                    <figure>
                                        <div className="icon-overlay icn-link">
                                            <img src={formImage} alt="submit to publish your code for review" />
                                        </div>
                                    </figure>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="tall" className="dark-bg img-bg img-bg-soft" style={{ backgroundImage: `url(${blueBg})` }}>
                    <div className="container inner">
                        <div className="row">
                            <div className="col-sm-8 col-sm-offset-2 text-center">
                                {!this.state.submitted &&
                                <div>
                                    <header>
                                        <h1>Codecorgi is in Beta!</h1>
                                        <p>Sign up and receive updates in our progress</p>
                                    </header>
                                    <form id="newsletter" ref="form" className="form-inline newsletter" role="form" action="//codecorgi.us15.list-manage.com/subscribe/post?u=8e17bb4ce74c59b458f46f84f&amp;id=7165cac077" method="post"  target="_blank" noValidate>
                                        <label className="sr-only" htmlFor="exampleInputEmail">Email address</label>
                                        <input type="email" name="EMAIL" className="form-control" placeholder="Enter your email address" />
                                        <button type="submit" onClick={this.submitForm} className="btn btn-large btn-submit">Subscribe</button>
                                        <div style={{ position: 'absolute', left: '-5000px' }} aria-hidden="true">
                                            <input type="text" name="b_8e17bb4ce74c59b458f46f84f_7165cac077" tabIndex="-1" value="" />
                                        </div>
                                    </form>
                                </div>
                                }
                                {this.state.submitted &&
                                    <div className="thankyou">
                                        <h1>Thanks for subscribing!</h1>
                                        <p>Check your email for a confirmation.</p>
                                    </div>
                                }
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        );
    }
}

const mapStateToProps = () => ({
});

const mapDispatchToProps = dispatch => bindActionCreators({
}, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home);
