import React from 'react';

const imageStyle = {
  "width": "650px",
  "height": "400px"
}

let ProductDisplay = (props)=> {
  return (
    <div className="col-md-6 col-sm-6" onClick={props.click}>
      <span className="probootstrap-hover-overlay">
        <img style={imageStyle} src={props.contentData.backgroundImageUrl} alt={props.contentData.productName} className="img-responsive"/>
        <div className="probootstrap-text-overlay">
            <h3>{props.contentData.productName}</h3>
        </div>
      </span>
    </div>
  );
}
export default ProductDisplay;