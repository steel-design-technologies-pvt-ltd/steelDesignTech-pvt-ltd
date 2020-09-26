import React from 'react';
import { Link } from 'react-router-dom';
const style = {
    backgroundImage: 'url(https://firebasestorage.googleapis.com/v0/b/steeldesigntech-pvt-ltd.appspot.com/o/homepage%2Fscale-business.png?alt=media&token=e70113d8-7e50-4eea-805b-67c8db557872)',
    backgroundSize: '500px'
}
let PageFeatureDesc = (props) => {
    return (
        <section className="probootstrap-half reverse">
            <div className="image-wrap">
                <div className="image" style={style}></div>
            </div>
            <div className="text">
            <p className="mb10 subtitle">{props.data.topSubheading}</p>
            <h3 className="mt0 mb40">{props.data.mainHeading}</h3>
            <p>{props.data.descriptionSection1}</p>
            <p className="mb50">{props.data.descriptionSection2}</p>
            <Link className="btn btn-primary mb10" to={{pathname: props.findOutMoreURL}}>{props.data.readMoreButton.buttonLabel}</Link>
            </div>
        </section>
    );
}

export default PageFeatureDesc;