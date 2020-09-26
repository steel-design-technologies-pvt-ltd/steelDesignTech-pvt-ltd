import React from 'react';
import { Link } from 'react-router-dom';

let BestLayout = (props) => {
    return (
        <div className="container text-center probootstrap-animate" data-animate-effect="fadeIn">
            <h2 className="heading">{props.staticContent.bestLayoutHeading}</h2>
            <p className="sub-heading">{props.staticContent.bestLayoutDescription}</p>
            <p>
                <Link to={{pathname: props.bestLayoutUrl}}className="btn btn-primary mb10" >{props.staticContent.linkToBestLayout.label}</Link>
            </p>
        </div>
    );
}

export default BestLayout;