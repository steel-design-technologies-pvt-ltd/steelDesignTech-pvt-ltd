import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import { getAllEquipments } from '../../store/actions/EDPActions';
import Packages from '../EquipmentPackages/Packages/Packages';


class PopularEquipment extends Component {

  componentWillMount() {
    this.props.getPopularEquipment();
  }
  render() {
    return (
      <section className="probootstrap-section probootstrap-section-lighter">
        <div className="container">
          <div className="row heading">
              <h2 className="mt0 mb50 text-center">Popular Equipments</h2>
          </div>
          <div className="row">
              {
                this.props.equipmentData.map((equipment, key)=> {
                  return <Packages key={key} contentData={equipment} />
                })
              }
              <div className="col-md-4 col-sm-6">
                    <div className="service" style={{minHeight: '380px',paddingTop:'100px'}}>
                      <Link to={{pathname:'/equipments'}}>
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
    equipmentData : state.EDP.allEquipments
  }
}

const matchDispatchToProps = (dispatch)=> {
  return {
    getPopularEquipment: ()=> {dispatch(getAllEquipments())}
  }
}
export default connect(matchStateToProps, matchDispatchToProps)(PopularEquipment);