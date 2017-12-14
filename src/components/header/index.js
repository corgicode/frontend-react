import React from 'react';
import { Link } from 'react-router-dom';
import logoTextHover from '../../images/logo-text-hover.png';
import logoText from '../../images/logo-text.png';
import '../../styles/_header.scss';

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.mouseOver = this.mouseOver.bind(this);
        this.mouseOut = this.mouseOut.bind(this);
        this.toggleVisibility = this.toggleVisibility.bind(this);
        this.state = {
            hover: false,
            visible: false,
        };
    }

    mouseOver = () => {
        this.setState({hover: true});
    }
    mouseOut() {
        this.setState({hover: false});
    }

    toggleVisibility() {
        this.setState({ visible: !this.state.visible });
    }

    render() {
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
                        <Link className="navbar-brand" onClick={this.toggleVisibility} to="/">
                            {this.state.hover && <img src={logoTextHover} width="168" className="logo" alt="codecorgi logo" onMouseEnter={this.mouseOver} onMouseLeave={this.mouseOut} />}
                            {!this.state.hover && <img src={logoText} width="168" className="logo" alt="codecorgi logo" onMouseEnter={this.mouseOver} onMouseLeave={this.mouseOut} />}
                        </Link>
                        <a className="navbar-toggle btn responsive-menu pull-right red-button" onClick={this.toggleVisibility}><i className="icon-menu-1"/></a>
                    </div>
                </div>
                <div className="yamm">
                    <div className={'navbar-collapse visible-md visible-lg' + (this.state.visible ? 'visible-sm visible-xs' : '')}>
                        <div className="container">
                            <Link className="navbar-brand" onClick={this.toggleVisibility} to="/">
                                {this.state.hover && <img src={logoTextHover} className="logo" alt="codecorgi logo" onMouseEnter={this.mouseOver} onMouseLeave={this.mouseOut} />}
                                {!this.state.hover && <img src={logoText} className="logo" alt="codecorgi logo" onMouseEnter={this.mouseOver} onMouseLeave={this.mouseOut} />}
                            </Link>
                            <ul className="nav navbar-nav">
                                <li>
                                    <Link to="/challenges" onClick={this.toggleVisibility}>Challenges</Link>
                                </li>
                                <li>
                                    <Link className="red-button" to="/app#!/signup" onClick={this.toggleVisibility}>Account</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </header>);
    }
}

export default Header;
