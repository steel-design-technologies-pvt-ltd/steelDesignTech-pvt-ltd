let initialState = {
  allEquipments: [],
  equipmentData: {},
  relatedEquipmentData: []
}

let equipmentPackagesReducer = (state=initialState, action)=> {
  switch(action.type) {
    case 'ALL_EQUIPMENT':
      initialState.allEquipments = action.allEquipments;
      return {
        ...state,
        allEquipments: action.allEquipments
      }
    case 'LABEL_FILTER':
      let filterData = [];
      if(action.filterId === 'BELOW5000') {
        initialState.allEquipments.forEach((eqpmnt)=> {
          if(eqpmnt.equipmentPrice < 5000) {
            filterData.push(eqpmnt);
          }
        });
      } else if(action.filterId === 'ALL') {
        filterData = [...initialState.allEquipments]
      } else {
        initialState.allEquipments.forEach((eqpmnt)=> {
          if(eqpmnt.equipmentID === action.filterId) {
            filterData.push(eqpmnt);
          }
        });
      }
      return {
        ...state,
        allEquipments: filterData
      }
    case 'EQUIPMENT_DATA':
      return {
        ...state,
        equipmentData: action.data.equipmentData,
        relatedEquipmentData: action.data.relatedEquipment
      }
    default:
      return {
        ...state
      }
  }
}

export default equipmentPackagesReducer;