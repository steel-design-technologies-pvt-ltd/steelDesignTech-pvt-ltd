import React, { Component } from 'react';
import { connect } from 'react-redux';
import Aux from '../../hoc/Aux';
import { filterStaticContent } from "../../assets/data/website-framework";
import Packages from '../PopularPackages/Packages/Packages';
import Styles from './Style.module.css';
import { withRouter } from 'react-router-dom';
import { updateFilter, loadData } from '../../store/actions/HDPActions';

class HomeDesignPackages extends Component {
  
  filterPackagesThroughLabels(labelId) {
    if(labelId === 'ALL') {
      return;
    }
    let newPackageList = [];
    console.log(this.props.packagesData);
    this.props.packagesData.forEach((pckg)=> {
      if(pckg.contentData.layoutType === labelId){
        newPackageList.push(pckg);
      }
    });
    this.props.packagesData = newPackageList;
  }

  displayPackageDetails(packageId) {
    this.props.history.push('/homeDesigns/' + packageId);
  }

  componentWillMount () {
    this.props.getContentData();
  }
  render () {
    return (
      <Aux>
        <section className="probootstrap-section">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-3 ">
                  <div className="row">
                    <div className="col-lg-12">
                      <h2 className="text-center">{filterStaticContent.filterSectionHeading}</h2>
                      {
                          filterStaticContent.labelFilter.map((filter, index) => {
                          return <span className={Styles.filterLabels} onClick={(event)=> {
                            event.preventDefault();
                            // this.filterPackagesThroughLabels(filter.id)
                            this.props.onUpdateFilter(filter.id);
                          }
                        } key={index}>{filter.value}</span>
                        })
                      }
                    </div>
                  </div>
              </div>
              <div className="col-md-9">
                <div className="row">
                    {
                      this.props.packagesData.length?
                      this.props.packagesData.map((homePackage, key)=> {
                        return <Packages key={key} contentData={homePackage.contentData} packageDetails={(event)=> {
                          event.preventDefault();
                          this.displayPackageDetails(homePackage.contentData.packageID);
                        }}/>
                      }):<h1 className="text-center">no data available</h1>
                    }
                </div>
              </div>
            </div>
          </div>
        </section>
      </Aux>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    homeDesignFilter: state.HDR.homeDesignFilter,
    packagesData: state.HDR.packagesData
  }
}
const mapDispatchToProps = dispatch => {
  return {
    onUpdateFilter: (filterValue) => dispatch(updateFilter(filterValue)),
    getContentData: () => dispatch(loadData())
  }
};
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(HomeDesignPackages))