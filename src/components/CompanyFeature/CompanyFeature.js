import React from 'react';
import { Link } from 'react-router-dom';

let CompanyFeature = (props) => {
    return (
        <div className="col-md-4">
            <div className="probootstrap-card text-center probootstrap-animate">
                <div className="probootstrap-card-media svg-sm colored">
                <img src={props.featureImage.url} className="svg" alt={props.featureImage.alt}/>
                </div>
                <div className="probootstrap-card-text">
                <h2 className="probootstrap-card-heading">{props.featureHeading}</h2>
                <p>{props.featureDescription}</p>
                <p><Link to={{
                    pathname:props.featureLink.linkUrl,
                    search: 'feature='+props.featureId
                }}>{props.featureLink.textLabel}</Link></p>
                </div>
            </div>
        </div>
    );
};

export default CompanyFeature;