import React from 'react';

let Service = (props)=> {
    return (
        <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12 probootstrap-animate">
            <div className="service text-center">
                <div className="icon"><i className={props.serviceData.iconClass}></i></div>
                <h2 className="heading">{props.serviceData.serviceHeading}</h2>
                <p>{props.serviceData.serviceDescription}</p>
            </div>
        </div>
    );
};

export default Service;