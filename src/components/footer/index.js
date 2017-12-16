import React from 'react';
import logoTextHover from '../../images/logo-text-hover.png';
import logoText from '../../images/logo-text.png';
import Hoverimage from '../hoverImage';
import '../../styles/_footer.scss';
import { Link } from 'react-router-dom';

class Footer extends React.Component {
    render() {
        return(
            <footer className="footer dark-bg">
                <div className="container inner">
                    <div className="row">
                        <div className="col-md-4 col-sm-6 inner">
                            <h4>About Us</h4>
                            <Link to="/about">
                                <Hoverimage width="168" className="logo" alt="codecorgi logo" image1={logoText} image2={logoTextHover} />
                            </Link>
                            <p>
                                Work through tickets/challenges like a real programmer does on the job.
                                codecorgi provides simulation project management tickets for you
                                to build real products and grow your developer portfolio.
                            </p>
                            <Link to="/about" className="txt-btn">About us</Link>
                        </div>
                        <div className="col-md-4 hidden-md hidden-sm col-sm-6 inner">
                            {/* <h4>Latest works</h4>
                            <div className="row thumbs gap-xs">
                                <div className="col-xs-6 thumb">
                                    <figure className="icon-overlay icn-link">
                                        <a href="portfolio-post.html"><img src="/assets/images/art/work02.jpg" alt=""></a>
                                    </figure>
                                </div>
                            </div> */}
                        </div>
                        <div className="col-md-4 col-sm-6 inner">
                            <h4>Get In Touch</h4>
                            <ul className="contacts">
                                <li><p>We want to hear from you, send us your feedback to:</p></li>
                                {/*
                                <!--<li><i className="icon-location contact"></i> 84 Street, City, State 24813</li>-->
                                <!--<li><i className="icon-mobile contact"></i> +00 (123) 456 78 90</li>-->
                                */}
                                <li><a href="mailto:woof@codecorgi.co"><i className="icon-mail-1 contact"/> woof@codecorgi.co</a></li>
                                <li>For support or questions about the platform:</li>
                                <li><a href="mailto:support@codecorgi.co"><i className="icon-mail-1 contact"/> support@codecorgi.co</a></li>
                            </ul>
                        </div>
                        {/*
                        <div className="col-md-3 col-sm-6 inner">
                            <h4>Free updates</h4>
                            <p>Conecus iure posae volor remped modis aut lor volor accabora incim resto explabo.</p>
                            <form id="newsletter" className="form-inline newsletter" role="form">
                                <label className="sr-only" for="exampleInputEmail">Email address</label>
                                <input type="email" className="form-control" id="exampleInputEmail" placeholder="Enter your email address">
                                <button type="submit" className="btn btn-default btn-submit">Subscribe</button>
                            </form>
                        </div> */}
                    </div>
                </div>
                <div className="footer-bottom">
                    <div className="container inner">
                        <p className="pull-left">© 2017 codecorgi. All rights reserved.</p>
                        <ul className="footer-menu pull-right">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/learning">Learning</Link></li>
                            <li><Link to="/about">About</Link></li>
                            <li><a href="http://services.codecorgi.co/">Services</a></li>
                        </ul>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;
