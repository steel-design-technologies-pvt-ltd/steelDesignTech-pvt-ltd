import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import { equipmentFilterContent, equipmentCategoryFilter } from "../../assets/data/website-framework";
import { connect } from 'react-redux';
import Packages from './Packages/Packages';
import Styles from './Style.module.css';
import { withRouter } from 'react-router-dom';
import { getAllEquipments } from '../../store/actions/EDPActions';

class EquipmentPackages extends Component {
  state = {
    sliderFilterRange : 20000,
    homeDesignFilter: 'ALL'
  };

  displayEquipmentDetails(equipmentID) {
    this.props.history.push('/equipments/'+equipmentID);
  }

  componentWillMount() {
    this.props.loadAllEquipments();
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
                      <h2 className="text-center">{equipmentFilterContent.filterSectionHeading}</h2>
                      {
                          equipmentFilterContent.labelFilter.map((filter, index) => {
                          return <span className={Styles.filterLabels} onClick={(event)=> {
                            event.preventDefault();
                            this.props.filterEquipmentsThroughLabels(filter.id)
                          }} key={index}>{filter.value}</span>
                        })
                      }
                    </div>
                    <div className="col-lg-12">
                        <h2 className="text-center">{equipmentCategoryFilter.filterSectionHeading}</h2>
                        {
                            equipmentCategoryFilter.labelFilter.map((filter, index) => {
                                return <span className={Styles.filterLabels} onClick={(event)=> {
                                    event.preventDefault();
                                    this.props.filterEquipmentsThroughLabels(filter.id)
                                }} key={index}>{filter.value}</span>
                            })
                        }
                    </div>
                  </div>
              </div>
              <div className="col-md-9">
                <div className="row">
                    {
                      this.props.equipmentData.map((equipment, key)=> {
                        return <Packages key={key} contentData={equipment} packageDetails={(event)=> {
                          event.preventDefault();
                          this.displayEquipmentDetails(equipment.equipmentID);
                        }}/>
                      })
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

let mapStateToProps = (state) => {
  return {
    equipmentData: state.EDP.allEquipments
  }
}

let mapDispatchToProp = (dispatch) => {
  return {
    loadAllEquipments: ()=> {dispatch(getAllEquipments())},
    filterEquipmentsThroughLabels: (filterId)=> {dispatch({type: 'LABEL_FILTER', filterId: filterId})}
  }
}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProp)(EquipmentPackages)
);