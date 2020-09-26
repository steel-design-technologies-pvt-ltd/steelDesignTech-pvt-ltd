import React from 'react';
import Aux from '../../../../hoc/Aux';
let RelatedEquipments = (props)=> {
  return (
    <Aux>
      <div className="col-md-3 col-sm-6" onClick={props.packageDetails}>
        <div className="probootstrap-card probootstrap-listing">
            <div className="probootstrap-card-media">
              <img src={props.contentData.equipmentImageURL} className="img-responsive" alt={props.contentData.imageAlt}/>
            </div>
            <div className="probootstrap-card-text">
              <h2 className="probootstrap-card-heading"><span>{props.contentData.name}</span></h2>
              <div className="probootstrap-listing-price"><strong>{`${props.contentData.equipmentCurrency} ${props.contentData.equipmentPrice}`}</strong></div>
            </div>
        </div>
      </div>
      <div className="clearfix visible-sm-block"></div>
    </Aux>
  );
}
export default RelatedEquipments;