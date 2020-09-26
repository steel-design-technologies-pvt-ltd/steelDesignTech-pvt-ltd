import React, { Component } from 'react';
import {footerSection} from '../../assets/data/website-framework';
import AboutComponent from '../../components/FooterComponents/AboutComponent';
import QuickLinks from '../../components/FooterComponents/QuickLinks/QuickLinks';
import PopularLinks from '../../components/FooterComponents/PopularLinks/PopularLinks';
import SubscribeComponent from '../../components/FooterComponents/SubscribeComponent';
import { withRouter } from 'react-router-dom';
import Style from './style.module.css';

class Footer extends Component {
    state = footerSection;

    subscribeClicked(event) {
        console.log('random');
    }
    redirectToMediaLink(url) {
        window.open(url, '_blank');
    }
    render() {
        return (
            <div>
                <footer className="probootstrap-footer probootstrap-bg">
                    <div className="container">
                    <div className="row mb60">
                        <AboutComponent data={this.state.companyDescription} />
                        <QuickLinks data={this.state.quickLinkSection}/>
                        <PopularLinks data={this.state.popularLinksSection}/>
                        <SubscribeComponent data={this.state.subscribeSection} subscribeClick={this.subscribeClicked()}/>
                    </div>
                    <div className="row copyright">
                        <div className="col-md-6">
                        <div className="probootstrap-footer-widget">
                            <p>
                                &copy; 2017 
                                <span className={Style.companyLink}> SDT SteelDesign Pvt Ltd</span>All rights reserved
                            </p>
                        </div>
                        </div>
                        <div className="col-md-6">
                        <div className="probootstrap-footer-widget right">
                            <div className="probootstrap-footer-social">
                                <span className={Style.mediaLink} onClick={()=> {
                                    window.open('https://www.twitter.com/ShivirTomar', '_blank');
                                }}><i className="icon-twitter"></i></span>
                                <span className={Style.mediaLink} onClick={()=> {
                                    window.open('https://www.facebook.com/TechSteelDesign/', '_blank');
                                }}><i className="icon-facebook"></i></span>
                                <span className={Style.mediaLink} onClick={()=> {
                                    window.open('https://www.instagram.com/steeldesigntech/', '_blank');
                                }}><i className="icon-instagram2"></i></span>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </footer>
            </div>
        )
    };
}
export default withRouter(Footer);