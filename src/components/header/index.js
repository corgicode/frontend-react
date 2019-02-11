import React from 'react';
import { Link } from 'react-router-dom';
import logoTextHover from '../../assets/images/logo-text-hover.png';
import logoText from '../../assets/images/logo-text.png';
import '../../styles/_header.scss';
import Hoverimage from '../hoverImage';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import ReactRouterPropTypes from 'react-router-prop-types';
import PropTypes from 'prop-types';

class Header extends React.Component {
    static propTypes = {
        history: ReactRouterPropTypes.history.isRequired,
        profile: PropTypes.shape({
            authenticated: PropTypes.bool,
            username: PropTypes.string,
        }),
    }

    constructor(props) {
        super(props);
        this.toggleVisibility = this.toggleVisibility.bind(this);
        this.state = {
            visible: false,
        };
        this.props.history.listen(() => {
            this.setState({ visible: false });
        });
    }

    toggleVisibility() {
        this.setState({ visible: !this.state.visible });
    }

    render() {
        const { authenticated } = this.props.profile;

        return (<header className="header">
            <div className="navbar">
                <div className="navbar-header">
                    <div className="container">
                        <ul className="social pull-right">
                            {/* <li><a href="#"><i class="icon-s-facebook"></i></a></li>
                            <li><a href="#"><i class="icon-s-gplus"></i></a></li>
                            <li><a href="#"><i class="icon-s-twitter"></i></a></li>
                            <li><a href="#"><i class="icon-s-pinterest"></i></a></li>
                            <li><a href="#"><i class="icon-s-behance"></i></a></li>
                            <li><a href="#"><i class="icon-s-dribbble"></i></a></li>*/}
                        </ul>
                        <Link className="navbar-brand"  to="/">
                            <Hoverimage width="168" className="logo" alt="codecorgi logo" image1={logoText} image2={logoTextHover} />
                        </Link>
                        <a className="navbar-toggle btn responsive-menu pull-right red-button" onClick={this.toggleVisibility}><i className="icon-menu-1"/></a>
                    </div>
                </div>
                <div className="yamm">
                    <div className={'navbar-collapse visible-md visible-lg ' + (this.state.visible ? 'visible-sm visible-xs' : '')}>
                        <div className="container">
                            <Link className="navbar-brand"  to="/">
                                <Hoverimage width="168" className="logo" alt="codecorgi logo" image1={logoText} image2={logoTextHover} />
                            </Link>
                            <ul className="nav navbar-nav">
                                <li>
                                    <Link to="/challenges">Challenges</Link>
                                </li>
                                <li>
                                    {!authenticated && <Link className="red-button" to="/join" onClick={this.toggleVisibility}>Join</Link>}
                                    {authenticated && <Link className="red-button" to="/profile" onClick={this.toggleVisibility}>Profile</Link>}
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </header>);
    }
}

function mapStateToProps() {
    return {};
}

function mapDispatchToProps() {
    return {};
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header));
