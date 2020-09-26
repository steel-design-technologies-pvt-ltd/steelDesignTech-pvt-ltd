import React, {Component} from 'react';
import HeaderLink from './HeaderLink/HeaderLink';
import {navigationSection} from '../../assets/data/website-framework';
import style from './style.module.css';

class HeaderNavigation extends Component{
    state= {
        activeNavigationLink: 0
    };

    onLinkClick(linkIndex) {
        this.setState({
            activeNavigationLink: linkIndex
        });
    }
    onMediaLinkClick = (mediaPlatform)=> {
        switch (mediaPlatform) {
            case 'twitter':
                window.open('https://twitter.com/ShivirTomar');
            break;
            case 'facebook':
                window.open('https://www.facebook.com/TechSteelDesign/');
            break;
            case 'instagram':
                window.open('https://www.instagram.com/steeldesigntech/');
            break;
            default:
                window.open('https://www.facebook.com/TechSteelDesign/');
        }
    }
    componentWillMount() {
        let activeLink = window.location.pathname.split('/')[1];
        switch (activeLink) {
            case "" || "home":
                this.setState({activeNavigationLink:0});
            break;
            case "equipments":
                this.setState({activeNavigationLink:1});
            break;
            case "services":
                this.setState({activeNavigationLink:2});
            break;
            case "contact":
                this.setState({activeNavigationLink:3});
            break;
            default:
                this.setState({activeNavigationLink:0});
        }
    }
    render() {
     return (
        <nav role="navigation" className="probootstrap-nav hidden-xs">
            <ul className="probootstrap-main-nav">
                {navigationSection.map((link, key)=> {
                    return <HeaderLink 
                    navigationLabel= {link.navigationLabel}
                    navigationUrl= {link.navigationUrl}
                    activeIndex={key===this.state.activeNavigationLink?'active':null}
                    linkClicked={(data)=> {this.onLinkClick(key)}}
                    key= {key}
                    />
                })}
            </ul>
            <div className="extra-text visible-xs"> 
                <span className="probootstrap-burger-menu" onClick={this.props.mobileMenuIcon}><i>Menu</i></span>
                <h5>Address</h5>
                <p>#361, Som Bazaar Chowk, main 33 feet road (near nav-jeevan public school), Shiv Vihar (Shiv Vihar Metro), Kawawal Nagar Delhi 110094</p>
                <h5>Connect</h5>
                <ul className="social-buttons">
                <li><span onClick={()=> this.onMediaLinkClick('twitter')} className={style.mediaLink}><i className="icon-twitter"></i></span></li>
                <li><span onClick={()=> this.onMediaLinkClick('facebook')} className={style.mediaLink}><i className="icon-facebook2"></i></span></li>
                <li><span onClick={()=> this.onMediaLinkClick('instagram')} className={style.mediaLink}><i className="icon-instagram2"></i></span></li>
                </ul>
            </div>
        </nav>
     );
    };
};
export default HeaderNavigation;