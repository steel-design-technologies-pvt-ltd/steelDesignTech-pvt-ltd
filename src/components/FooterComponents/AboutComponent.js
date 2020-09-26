import React from "react";

let AboutComponent = (props) => {
    return (
        <div className="col-md-3">
            <div className="probootstrap-footer-widget">
                <h4 className="heading">{props.data.descriptionHeading}</h4>
                <p>{props.data.descriptionText}</p>
            </div> 
        </div>
    );
}

export default AboutComponent;