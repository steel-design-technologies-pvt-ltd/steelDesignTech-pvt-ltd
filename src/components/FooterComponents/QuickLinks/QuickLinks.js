import React, { Component } from "react";
import QuickLink from './QuickLink/QuickLink';

class QuickLinks extends Component{
    state = this.props.data;
    render() {
        return (
            <div className="col-md-3">
                <div className="probootstrap-footer-widget probootstrap-link-wrap">
                    <h4 className="heading">{this.state.descriptionHeading}</h4>
                    <ul className="stack-link">
                        {this.state.quickLinks.map((link, key)=> {
                            return <QuickLink 
                                linkUrl={link.pathname}
                                linkSearch={link.search}
                                linkLabel={link.linkLabel}
                                key={key}
                            />
                        })}
                    </ul>
                </div>
            </div>
        );
    }
}

export default QuickLinks;