import React, { Component } from 'react';
import PackageDetailDisplay from '../../PackageDetailDisplay/PackageDetailDisplay';
import { homeDesignPackages } from '../../../assets/data/website-framework';
import { connect } from 'react-redux';
import { getPackageData } from '../../../store/actions/HDCActions';

class HomeDesignPackageContainer extends Component{
  getPackageToDisplay() {
    let id = this.props.match.params.id, packageToDisplay = null;
    homeDesignPackages.packagesData.forEach((pckg) => {
      if(pckg.contentData.packageID === id) {
        packageToDisplay = pckg.contentData;
      }
    });
    return packageToDisplay;
  }
  getOtherPackages() {
    let reltedPackages = [];
    let id = this.props.match.params.id;
    homeDesignPackages.packagesData.forEach((pckg) => {
      if(pckg.contentData.packageID !== id) {
        reltedPackages.push(pckg);
      }
    });
    return reltedPackages;
  }

  componentWillMount() {
    let id = this.props.match.params.id;
    if(id) {
      this.props.getPackageData(id);
    }
  }

  render() {
    return (
      <PackageDetailDisplay packageToDisplay={this.props.packageDataToDisplay} 
      otherPackages={this.props.relatedPackageToDisplay} 
      contentData={{orderButton: homeDesignPackages.orderButtonLabel,relatedPackages: homeDesignPackages.relatedProductSection}}/>
    );
  }
}

let mapStateToProps = (state)=> {
  return {
    packageDataToDisplay: state.HDC.packagesData,
    relatedPackageToDisplay: state.HDC.relatedPackagesData
  }
}

let mapDispatchToProps = (dispatch)=> {
  return {
    getPackageData: (id)=> { dispatch(getPackageData(id)) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeDesignPackageContainer);