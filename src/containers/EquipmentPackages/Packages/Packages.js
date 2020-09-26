import React from 'react';
import Aux from '../../../hoc/Aux';
import ListDisplay from '../../../components/UI/ListDisplay/ListDisplay';
let Packages = (props)=> {
  return (
    <Aux>
      <div className="col-md-4 col-sm-6" onClick={props.packageDetails}>
        <div className="probootstrap-card probootstrap-listing">
            <div className="probootstrap-card-media">
              <img src={props.contentData.equipmentImageURL} className="img-responsive" alt={props.contentData.imageAlt}/>
            </div>
            <div className="probootstrap-card-text">
              <h2 className="probootstrap-card-heading"><span>{props.contentData.name}</span></h2>
              <div className="probootstrap-listing-location">
                  <i className="icon-location2"></i> <span>{props.contentData.built_material}</span>
              </div>
              <div className="probootstrap-listing-category for-sale"><span>{props.contentData.equipmentCategory}</span></div>
              <div className="probootstrap-listing-price"><strong>{`${props.contentData.equipmentCurrency} ${props.contentData.equipmentPrice}`}</strong></div>
            </div>
            <div className="probootstrap-card-extra">
              <ul>
                {
                  props.contentData.equipmentDetails.map((detail, key)=> {
                    return <ListDisplay key={key} name={detail.name} value={detail.value} />
                  })
                }
              </ul>
            </div>
        </div>
      </div>
      <div className="clearfix visible-sm-block"></div>
    </Aux>
  );
}
export default Packages;