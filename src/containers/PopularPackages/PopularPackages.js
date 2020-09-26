import React, { Component } from 'react';
import Packages from './Packages/Packages';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import { getPopularPackagesData } from '../../store/actions/PPActions';

class popularPackages extends Component{
  componentWillMount () {
    this.props.loadPopularPackage();
  }
  render() {
    return (
      <section className="probootstrap-section probootstrap-section-lighter">
        <div className="container">
          <div className="row heading">
              <h2 className="mt0 mb50 text-center">Popular Packages</h2>
          </div>
          <div className="row">
              {
                this.props.packagesData.map((homePackage, key)=> {
                  if(key<2) {
                    return <Packages key={key} contentData={homePackage.contentData} onClick={homePackage.packageClicked}/>
                  } else {
                    return null;
                  }
                })
              }
              <div className="col-md-4 col-sm-6">
                    <div className="service" style={{minHeight: '380px',paddingTop:'100px'}}>
                      <Link to={{pathname:'/homeDesigns'}}>
                        <div className="probootstrap-card-text">
                          <h2 className="probootstrap-card-heading text-center">See More<span></span></h2>
                        </div>
                        <div className="icon">
                          <i className="icon-arrow-right"></i>
                        </div>
                      </Link>
                    </div>
              </div>
          </div>
        </div>
      </section>
    );
  }
}

const matchStateToProps = (state)=> {
  return {
    packagesData: state.PPState.PPData
  }
}
const matchDispatchToProps = (dispatch)=> {
  return {
    loadPopularPackage : ()=> dispatch(getPopularPackagesData())
  }
}

export default connect(matchStateToProps, matchDispatchToProps)(popularPackages);