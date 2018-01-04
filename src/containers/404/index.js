import React from 'react';
import { Link } from 'react-router-dom';
import corgi404 from '../../assets/images/404corgi.png';
import blueBg from '../../assets/images/blue-bg.jpg';
import { Helmet } from 'react-helmet';

class e404 extends React.Component {
    render() {
        return(
            <main>
                <Helmet>
                    <title>Page not found - codecorgi</title>
                    <link rel="canonical" href="https://codecorgi.co/404" />
                    <meta name="description" content="codecorgi provides simulation project tickets so that junior programmers gain competitive abilities. Learn by doing projects applicable to the corporate world." />
                </Helmet>
                <section id="hero" className="dark-bg img-bg img-bg-soft" style={{ backgroundImage: `url(${blueBg})` }}>
                    <div className="container inner-top-md inner-bottom-sm">
                        <div className="row">
                            <div className="col-md-5 inner-right inner-bottom-xs">
                                <header>
                                    <h1>404 - Not found</h1>
                                    <p>We couldn't find the page you requested, but we found this cute corgi.
                                    </p>
                                </header>
                            </div>
                            <div className="col-md-7">
                                <div>
                                    <img src={corgi404} alt="404 corgi" />
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

export default e404;
