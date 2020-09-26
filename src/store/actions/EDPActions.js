import firebase from '../../config/config';

export const getAllEquipments = ()=>{
  return dispatch => {
    let allEquipments = [];
    firebase.firestore().collection('equipmentPackagesData').get().then((docSnapshot)=> {
      docSnapshot.forEach((doc)=> {
        allEquipments.push(doc.data());
      });
      dispatch({type: 'ALL_EQUIPMENT', allEquipments});
    });
  }
}

export const getEquipmentData = (equipmentID)=> {
  return dispatch => {
    let relatedEquipment = [],equipmentData = null;
    firebase.firestore().collection('equipmentPackagesData').get().then((docSnapshot)=> {
      docSnapshot.forEach((doc)=> {
        if(equipmentID === doc.data().equipmentID) {
          equipmentData = doc.data();
        } else {
          relatedEquipment.push(doc.data());
        }
      });
      dispatch({type: 'EQUIPMENT_DATA', data:{equipmentData,relatedEquipment}});
    });
  }
}