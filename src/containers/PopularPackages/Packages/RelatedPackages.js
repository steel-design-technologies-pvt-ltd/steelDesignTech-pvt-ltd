import React from 'react';
import Aux from '../../../hoc/Aux';
let RelatedPackages = (props)=> {
  return (
    <Aux>
      <div className="col-md-3 col-sm-6" onClick={props.packageDetails}>
        <div className="probootstrap-card probootstrap-listing">
            <div className="probootstrap-card-media">
              <img src={props.contentData.packageImageUrl} className="img-responsive" alt={props.contentData.packageImageAlt}/>
            </div>
            <div className="probootstrap-card-text">
              <h2 className="probootstrap-card-heading"><span>{props.contentData.packageHeading}</span></h2>
              <div className="probootstrap-listing-price"><strong>{`${props.contentData.packageCurrency} ${props.contentData.packagePrice}`}</strong></div>
            </div>
        </div>
      </div>
      <div className="clearfix visible-sm-block"></div>
    </Aux>
  );
}
export default RelatedPackages;