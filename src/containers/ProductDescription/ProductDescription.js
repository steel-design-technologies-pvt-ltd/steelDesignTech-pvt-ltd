import React, { Component } from 'react';
import { productDescriptionStaticContent } from '../../assets/data/website-framework';
// import SendEnquiryForService from '../../components/ProductDescription/SendEnquiryForService/SendEnquiryForService';
import ProductDescriptionSection from '../../components/ProductDescription/ProductDescriptionSection/ProductDescriptionSection';
import Style from './ProductDescription.module.css';
import ModalpopupContainer from '../../components/UI/Modal-Popup/ModalpopupContainer';

class ProductDescription extends Component {
  state = {
    isModalOpen: false
  }
  componentDidMount() {
    window.scrollTo(0,0);
  }
  getContentData() {
    var displayProduct = null;
    productDescriptionStaticContent.forEach((product)=> {
      if(this.props.productToDisplay === product.productID){
        displayProduct = product;
      }
    });
    return displayProduct;
  }

  togglePopupmodal() {
    let toggleVal = !(this.state.isModalOpen);
    if(toggleVal) {
      document.getElementsByClassName('probootstrap-header')[0].style['zIndex'] = 0;
    } else {
      document.getElementsByClassName('probootstrap-header')[0].style['zIndex'] = 12;
    }
    this.setState({isModalOpen: toggleVal})
  }
  render() {
    return (
      <section className={`probootstrap-section ${Style.productDescriptionContainer}`}>
        <div className="container">
          <div className="row">
            {/* <div className="col-md-4">
              <SendEnquiryForService contentData={getProductEnquiryStaticContent} />
            </div> */}
            <div className="col-md-12">
              <ProductDescriptionSection contentData={this.getContentData()} modalRefClicked={(e)=> {
                e.preventDefault();
                this.togglePopupmodal();
              }}/>
              <ModalpopupContainer buttonEnabled={this.state.isModalOpen}
              modalCanceled={(e)=> {e.preventDefault();this.togglePopupmodal()}} />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default ProductDescription;