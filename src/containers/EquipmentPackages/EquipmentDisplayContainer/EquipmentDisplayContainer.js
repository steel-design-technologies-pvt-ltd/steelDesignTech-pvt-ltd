import React, { Component } from 'react';
import EquipmentDetailDisplay from './EquipmentDetailDisplay/EquipmentDetailDisplay';
import { connect } from 'react-redux';
import { getEquipmentData } from '../../../store/actions/EDPActions';
class EquipmentDisplayContainer extends Component {
  
  componentWillMount() {
    this.props.getEquipmentToDisplay(this.props.match.params.id);
  }
  render() {
    return (
      <EquipmentDetailDisplay contentData={this.props.equipmentData} relatedEquipments={this.props.relatedEquipmentData}/>
    );
  }
}
let mapPropToState = (state) => {
  return {
    equipmentData: state.EDP.equipmentData,
    relatedEquipmentData: state.EDP.relatedEquipmentData
  }
}
let mapDispatchToProps = (dispatch)=> {
  return {
    getEquipmentToDisplay: (eqId)=> {dispatch(getEquipmentData(eqId))},
    getRelatedEquipment: (eqId)=> {dispatch({type: 'RELATED_EQUIPMENT', excludeId:eqId})}
  }
}
export default connect(mapPropToState, mapDispatchToProps)(EquipmentDisplayContainer);