import React, { Component } from 'react';
import { frameworkContent } from '../../assets/data/website-framework';
import Logo from './Logo/Logo';
import HeaderNavigation from '../../containers/HeaderNavigation/HeaderNavigation';
import Backdrop from '../UI/Backdrop/Backdrop';
import './Header.css';
class Header extends Component {
    state= {
        isMobileNavigationActive: false
    };

    mobileNavMenuClicked() {
        let currentMobileNavState = this.state.isMobileNavigationActive;
        this.setState({isMobileNavigationActive: !currentMobileNavState});
    }

    toggleBackdrop() {
        let currentMobileNavState = this.state.isMobileNavigationActive;
        this.setState({isMobileNavigationActive: !currentMobileNavState});
    }

    render() {
        return (
            <div className={this.state.isMobileNavigationActive?'probootstrap-mobile-menu-active show':''}>
                <header role="banner" className="probootstrap-header probootstrapHeader">
                    <div className="container">
                      <ul className="list-inline text-right fixedContact">
                        <li>For any query Call : </li>
                        <li>+91-9650365689</li>
                      </ul>
                    </div>
                    <div className="container">
                        <Logo mobileMenuIcon={(e)=> {
                            e.preventDefault();
                            this.mobileNavMenuClicked();
                        }}
                        staticContent={frameworkContent.headerSection} />
                        <Backdrop show={this.state.isMobileNavigationActive?true:false} backDropClicked={(e)=> {
                            e.preventDefault();
                            this.toggleBackdrop();
                        }}/>
                        <HeaderNavigation mobileMenuIcon={(e)=> {
                            e.preventDefault();
                            this.mobileNavMenuClicked();
                        }}/>
                    </div>
                </header>
            </div>
        );
    }
}
export default Header;