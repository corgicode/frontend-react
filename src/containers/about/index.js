import React from 'react';
import Hoverimage from '../../components/hoverImage';
import logo from '../../assets/images/logo-large.png';
import logoHover from '../../assets/images/logo-large-hover.png';
import patternBg from '../../assets/images/art/pattern-background03.png';
import tereImg from '../../assets/images/team/tere.png';
import davidImg from '../../assets/images/team/david.png';
import corgiImg from '../../assets/images/team/corginson.png';
import sydneyImg from '../../assets/images/team/sydney.png';

class About extends React.Component {
    render() {
        return(
            <main>
                <section id="hero" className="tint-bg img-bg-softer" style={{backgroundRepeat: 'repeat', backgroundImage: `url(${patternBg})`}}>
                    <div className="container inner">
                        <div className="row">
                            <div className="col-sm-10 aos-init aos-animate" data-aos="fade-up">
                                <header>
                                    <h1>Hi, we are codecorgi!</h1>
                                </header>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="who-we-are">
                    <div className="container inner-md">
                        <div className="row inner-top-xs">
                            <div className="col-sm-6 inner-right-xs inner-bottom-xs">
                                <h2>Our Mission</h2>
                                <p>
                                    Codecorgi is a visual portfolio for front-end developers to showcase their code
                                    and experience. Codecorgi's vision is to help employ the workforce by providing
                                    developers continuous training and project experience. Our company believes
                                    that junior developers have a difficulty landing their first programming
                                    career.
                                </p>
                                <p>
                                    Our founders want to help novice developers get hired and expand their
                                    opportunities regardless of where they are educated or located. Codecorgi sees
                                    newly minted programmers as underemployed, in a role these students did not
                                    invest time and money for.
                                </p>
                                <p>
                                    Codecorgi provides simulation project tickets so that junior programmers gain competitive abilities. Learn by doing projects applicable to the corporate world.
                                </p>
                            </div>
                            <div className="col-sm-6 inner-left-xs inner-bottom-xs">
                                <figure>
                                    <div className="icon-overlay icn-link">
                                        <Hoverimage className="logo" alt="codecorgi logo" image1={logo} image2={logoHover} />
                                    </div>
                                </figure>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="team" className="light-bg">
                    <div className="container inner-top inner-bottom-sm">
                        <div className="row">
                            <div className="col-md-8 col-sm-10 center-block text-center">
                                <header>
                                    <h1>Our Team</h1>
                                </header>
                            </div>
                        </div>
                        <div className="row inner-top-sm text-center">
                            <div className="col-sm-6 inner-bottom-sm ">
                                <figure className="member">
                                    <div className="icon-overlay icn-link">
                                        <a><img src={sydneyImg} className="img-circle"/></a>
                                    </div>
                                    <figcaption>
                                        <h2>
                                            Sydney Lai
                                            <span>CEO</span>
                                        </h2>
                                        <p>
                                            Startup growth mentor, award-winning background in sales and business
                                            development @Techstars, @US Dept of Commerce, LGBT Technology Leader by
                                            The White House, Office of Science and Technology Policy, TEDx Speaker.
                                        </p>
                                        <ul className="social">
                                            <li><a href="https://twitter.com/sydneylai" target="_blank"><i className="icon-s-twitter"/></a></li>
                                        </ul>
                                    </figcaption>
                                </figure>
                            </div>
                            <div className="col-sm-6 inner-bottom-sm ">
                                <figure className="member">
                                    <div className="icon-overlay icn-link">
                                        <a><img src={davidImg} className="img-circle"/></a>
                                    </div>
                                    <figcaption>
                                        <h2>
                                            David Silva
                                            <span>CTO</span>
                                        </h2>
                                        <p>10+ years of programming experience, Angular speaker,
                                            Developer Bootcamp founder, @ Diamond, Techqueria,
                                            Doctor on Demand, AngelHack, 40 Under 40: Tech Diversity – Silicon Valley.
                                        </p>
                                        <ul className="social">
                                            <li><a href="https://twitter.com/dvidsilva" target="_blank"><i className="icon-s-twitter"/></a></li>
                                        </ul>
                                    </figcaption>
                                </figure>
                            </div>
                        </div>
                        <div className="row inner-top-sm text-center">
                            <div className="col-sm-6 inner-bottom-sm ">
                                <figure className="member">
                                    <div className="icon-overlay icn-link">
                                        <a><img src={tereImg} className="img-circle" /></a>
                                    </div>
                                    <figcaption>
                                        <h2>
                                            Tere Gallarreta
                                            <span>Web Developer</span>
                                        </h2>
                                        <p>Web Developer who values building bridges between cultures and people, creating beautiful and meaningful things, and connecting people to resources that enrich their lives.</p>
                                        <ul className="social">
                                            <li><a href="https://www.linkedin.com/in/tere-gallarreta/" target="_blank"><i className="icon-linkedin"/></a></li>
                                        </ul>
                                    </figcaption>
                                </figure>
                            </div>
                            <div className="col-sm-6 inner-bottom-sm ">
                                <figure className="member">
                                    <div className="icon-overlay icn-link">
                                        <a><img src={corgiImg} className="img-circle" /></a>
                                    </div>
                                    <figcaption>
                                        <h2>
                                            Corginson
                                            <span>Chief Happiness Officer</span>
                                        </h2>
                                        <p/>
                                        <ul className="social">
                                            <li><a href="https://twitter.com/codecorgi" target="_blank"><i className="icon-s-twitter"/></a></li>
                                        </ul>
                                    </figcaption>
                                </figure>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        );
    }
}

export default About;
