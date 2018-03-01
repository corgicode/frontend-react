import React from 'react';
import Hoverimage from '../../components/hoverImage';
import logo from '../../assets/images/logo-large.png';
import logoHover from '../../assets/images/logo-large-hover.png';
import patternBg from '../../assets/images/art/pattern-background03.png';
import tereImg from '../../assets/images/team/tere.png';
import davidImg from '../../assets/images/team/david.png';
import corgiImg from '../../assets/images/team/corginson.png';
import sydneyImg from '../../assets/images/team/sydney.png';
import { Helmet } from 'react-helmet';
import TeamMember from '../../components/about/TeamMember';

class About extends React.Component {
    render() {
        return(
            <main>
                <Helmet>
                    <title>About Us - codecorgi</title>
                    <link rel="canonical" href="https://codecorgi.co/about" />
                    <meta name="description" content="codecorgi provides simulation project tickets so that junior programmers gain competitive abilities. Learn by doing projects applicable to the corporate world." />
                </Helmet>
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
                                    Codecorgi is an an open source platform to practice coding with non trivial
                                    codebases on your own terms, for front-end developers. Showcase your code
                                    and experience. Codecorgi's vision is to help devs advance their career by providing
                                    continuous training and project experience. To help them get over the barrier
                                    that junior developers have when landing their first programming job.
                                </p>
                                <p>
                                    Codecorgi provides simulation project tickets so that junior programmers gain competitive abilities.
                                    Learn by doing projects applicable to the corporate world.
                                </p>
                            </div>
                            <div className="col-sm-6 inner-left-xs inner-bottom-xs">
                                <figure>
                                    <div className="icon-overlay icn-link">
                                        <Hoverimage className="logo" alt="codecorgi logo" image1={logo} image2={logoHover} />
                                    </div>
                                </figure>
                            </div>
                            <div className="col-sm-8 col-xs-12">
                                <h2>Open Source & ready to improve</h2>
                                <p>
                                    No secrets here. All our code is open
                                    source to modify and all our decisions
                                    are available to learn from. So feel free
                                    to poke around our code, question our ideas, or tell us what
                                    new features you want.
                                </p>
                                <p>
                                    <a href="https://github.com/corgicode/frontend-react" target="_blank">Check us out on github</a>
                                </p>
                                <h2>Zero bad vibes</h2>
                                <p>
                                    We’re creating a collaborative & open community,
                                    so take your bad vibes elsewhere. We want
                                    everyone to feel comfortable learning
                                    and making mistakes, chatting with other
                                    collaborators and learning
                                    together.
                                </p>
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
                                <TeamMember
                                    name="Sydney Lai"
                                    title="CEO"
                                    description="Startup growth mentor, award-winning background in sales and business
                                    development @Techstars, @US Dept of Commerce, LGBT Technology Leader by
                                    The White House, Office of Science and Technology Policy, TEDx Speaker."
                                    image={sydneyImg}
                                    links={[{href: 'https://twitter.com/sydneylai', className: 'mg-circle'}]}
                                />
                            </div>
                            <div className="col-sm-6 inner-bottom-sm ">
                                <div className="icon-overlay icn-link">
                                    <TeamMember
                                        name="David Silva"
                                        title="CTO"
                                        description="10+ years of programming experience, Angular speaker,
                                        Developer Bootcamp founder, @ Diamond, Techqueria,
                                        Doctor on Demand, AngelHack, 40 Under 40: Tech Diversity – Silicon Valley."
                                        image={davidImg}
                                        links={[{href: 'https://twitter.com/dvidsilva', className: 'con-s-twitter'}]}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="row inner-top-sm text-center">
                            <div className="col-sm-6 inner-bottom-sm ">
                                <TeamMember
                                    name="Tere Gallarreta"
                                    title="Web Developer"
                                    description="Web Developer who values building bridges between cultures and people, creating beautiful and meaningful things, and connecting people to resources that enrich their lives."
                                    image={tereImg}
                                    links={[{href: 'https://www.linkedin.com/in/tere-gallarreta/', className: 'icon-linkedin'}]}
                                />
                            </div>
                            <div className="col-sm-6 inner-bottom-sm ">
                                <div className="icon-overlay icn-link">
                                    <TeamMember
                                        name="Corginson"
                                        title="Chief Happiness Officer"
                                        image={corgiImg}
                                        links={[{href: 'https://twitter.com/codecorgi', className: 'icon-s-twitter'}]}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        );
    }
}

export default About;
