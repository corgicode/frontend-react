import React, { Component } from 'react';
import Teapot from '../../assets/images/teapot.png';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import blueBg from '../../assets/images/blue-bg.jpg';

class EasterEgg extends Component {
    static propTypes = {
        type: PropTypes.string.isRequired,
    }

    render() {
        return (
            <main>
                <Helmet>
                    <title>I'm a teapot - codecorgi</title>
                    <link rel="canonical" href="https://codecorgi.co/418" />
                    <meta name="description" content="The Hyper Text Coffee Pot Control Protocol (HTCPCP) is a facetious communications protocol for controlling, monitoring, and diagnosing coffee pots." />
                </Helmet>
                <section id="hero" className="dark-bg img-bg img-bg-soft" style={{ backgroundImage: `url(${blueBg})` }}>
                    <div className="container inner-top-md inner-bottom-sm">
                        <div className="row">
                            <div className="col-md-5 inner-right inner-bottom-xs">
                                <header>
                                    <h1>418 - <small> Hyper Text Coffee Pot Control Protocol</small></h1>
                                    <p>We couldn't find the page you requested, but we found this cute corgi.</p>
                                </header>
                            </div>
                            <div className="col-md-7">
                                <div>
                                    <img src={ Teapot } alt="418 corgi" />
                                    <p><Link to="http://thegrandteapot.tumblr.com/post/52537967638/corgi-teapot" target="_blank">Afternoon tea in Tumblr</Link></p>
                                </div>
                                <Link to="/" className="btn btn-large">Homepage</Link>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        );
    }
}

export default EasterEgg;
