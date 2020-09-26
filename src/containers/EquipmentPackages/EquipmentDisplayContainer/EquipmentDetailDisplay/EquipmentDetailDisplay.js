import React, { Component } from 'react';
import Aux from '../../../../hoc/Aux';
import Style from '../../EquipmentDetailDisplay.module.css';
import RelatedEquipments from '../../../../components/pages/EquipmentPage/RelatedEquipments/RelatedEquipments';
import { withRouter } from 'react-router-dom';
import ModalpopupContainer from '../../../../components/UI/Modal-Popup/ModalpopupContainer';
class EquipmentDetailDisplay extends Component{
  state = {
    placeOrderID: null,
    dataSubmittedSuccessfully: false,
    isModalOpen: false
  };

  displayRelatedEquipmentDetails(equipmentID) {
    window.open('/equipments/'+ equipmentID);
  }

  navigateToPlaceOrder() {
    this.props.history.push('/placeorder/?productId=' +  this.state.placeOrderID);
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
      <Aux>
        <section className={`probootstrap-section ${Style.productSection}`}>
          <div className="container">
            {
              Object.entries(this.props.contentData).length?
              <div className="row">
                <div className="col-md-6">
                  <div>
                    <img src={this.props.contentData.equipmentImageURL} alt="packageMainImage" />
                  </div>
                  <div className={Style.productGallery}>
                    {
                      this.props.contentData.equipmentOtherImages.map((image, index)=> {
                      return <div className={Style.photoGallery} key={index}>
                          <img src={image} alt="supportImage"/>
                        </div>
                      })
                    }
                  </div>
                </div>
                <div className="col-md-6">
                  <div className={Style.productDetails}>
                    <h1 className={Style.productName}>{this.props.contentData.name}</h1>
                    <p className={Style.prouctPrice}><span>Rs.</span><span>{this.props.contentData.equipmentPrice}</span><strike className={Style.sellingPrice}>Rs. {this.props.contentData.sellingPrice}</strike></p>
                    <p className={Style.productDesc}>{this.props.contentData.application}</p>
                    <div className={Style.productFeatures}>
                    </div>
                    <button className="btn btn-primary" onClick={(e)=> {e.preventDefault();this.togglePopupmodal()}}>Place Order</button>
                    <ModalpopupContainer buttonEnabled={this.state.isModalOpen} modalCanceled={(e)=> {e.preventDefault();this.togglePopupmodal()}} />
                  </div>
                  <hr/>
                  <div className="specialRequirements">
                    <h3>Special Requirements</h3>
                    <table className="table table-striped">
                      <tbody>
                        {this.props.contentData.special_req.map((req,index)=>{
                          let [k,v] = req.split(':');
                          return <tr key={index}><td>{k}</td><td>{v}</td></tr>
                        })}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>:null
            }
            <div className="row">
              <h2 className="text-center">Related Equipments</h2>
              <div className="col-md-12">
                {
                  this.props.relatedEquipments.length?this.props.relatedEquipments.map((relEquip, key)=> {
                    return <RelatedEquipments key={key} contentData={relEquip} packageDetails={(event)=> {
                      event.preventDefault();
                      this.displayRelatedEquipmentDetails(relEquip.equipmentID);
                    }}/>
                  }):null
                }
              </div>
            </div>
          </div>
        </section>
      </Aux>
    );
  }
}

export default withRouter(EquipmentDetailDisplay);