import React, { Component } from "react";
import PopularLink from './PopularLink/PopularLink';
// import Style from '../style.module.css';

class PopularLinks extends Component{
    state = this.props.data;
    popularLinkClicked(link) {
        console.log(link);
        //TODO: redirection of the link to be added
    };
    render() {
        return (
            <div className="col-md-3">
                <div className="probootstrap-footer-widget">
                    <h4 className="heading">{this.state.descriptionHeading}</h4>
                    <ul className="stack-link">
                    {this.state.popularLinks.map((link, key)=> {
                            return <PopularLink 
                                linkClicked={(e)=> {
                                    e.preventDefault();
                                    this.popularLinkClicked(link.linkURL);
                                }}
                                linkLabel={link.linkLabel}
                                projectCount={link.projectCount}
                                linkUrl={link.linkURL}
                                key={key}
                            />
                        })}
                    </ul>
                </div> 
            </div>
        );
    }
}

export default PopularLinks;