import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import Style from './PackageDetailDisplay.module.css';
import RelatedPackages from '../PopularPackages/Packages/RelatedPackages';
import { withRouter } from 'react-router-dom';
import ModalpopupContainer from '../../components/UI/Modal-Popup/ModalpopupContainer';
class PackageDetailDisplay extends Component{
  state = {
    isModalOpen: false
  }

  displayRelatedDetails(packageId) {
    window.open('/homeDesigns/' + packageId)
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
            {Object.entries(this.props.packageToDisplay).length?<div className="row">
              <div className="col-md-6">
                <span>
                  <img src={this.props.packageToDisplay.packageImageUrl} alt="packageMainImage" />
                </span>
                <div className={Style.productGallery}>
                  {
                    this.props.packageToDisplay.otherImage.map((image, index)=> {
                     return <span className={Style.photoGallery} key={index}>
                        <img src={image} alt="supportImage"/>
                      </span>
                    })
                  }
                </div>
              </div>
              <div className="col-md-6">
                <div className={Style.productDetails}>
                  <h1 className={Style.productName}>{this.props.packageToDisplay.packageHeading}</h1>
                  <p className={Style.prouctPrice}><span>Rs.</span><span>{this.props.packageToDisplay.packagePrice}</span></p>
                  <p className={Style.productDesc}>{this.props.packageToDisplay.packageDesc}</p>
                  <div className={Style.productFeatures}>
                    {
                      this.props.packageToDisplay.packageDetails.map((feature, index) => {
                        return <div key={index}><span className={Style.featureHeader}>{feature.name} : </span><span>{feature.value} sq. mtr</span></div>;
                      })
                    }
                  </div>
                  <button className="btn btn-primary" onClick={(e)=> {e.preventDefault();this.togglePopupmodal()}}>{this.props.contentData.orderButton}</button>
                  <ModalpopupContainer buttonEnabled={this.state.isModalOpen} modalCanceled={(e)=> {e.preventDefault();this.togglePopupmodal()}} />
                </div>
              </div>
            </div>: <p className="text-center">fetching package data...</p>}
            <div className="row">
              <h2 className="text-center">{this.props.contentData.relatedPackages.sectionHeading}</h2>
              <div className="col-md-12">
                {
                  this.props.otherPackages.length?this.props.otherPackages.map((homePackage, key)=> {
                    return <RelatedPackages key={key} contentData={homePackage.contentData} packageDetails={(event)=> {
                      event.preventDefault();
                      this.displayRelatedDetails(homePackage.contentData.packageID);
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

export default withRouter(PackageDetailDisplay);