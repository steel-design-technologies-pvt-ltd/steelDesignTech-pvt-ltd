
import firebase from '../../config/config';

export const updateFilter =(value)=> {
  return dispatch => {
    let allDesignPackages = [],allData = [];
    if(value === 'ALL') {
      firebase.firestore().collection('homeDesignPackages').get().then((docSnapshot)=>{
        docSnapshot.forEach((document)=> {
          allData.push(document.data());
        });
        dispatch({type: 'filterDesignPackages', filterData: {
          filterval: value,
          allDesignPackages: allData
        }});
      });
    } else {
      firebase.firestore().collection('homeDesignPackages').get().then((collectionSnapshot)=>{
        collectionSnapshot.forEach((document)=> {
          if(document.data().contentData.layoutType === value) {
            allDesignPackages.push(document.data());
          }
        });
        dispatch({
          type: 'filterDesignPackages',
          filterData: {
            filterval: value,
            allDesignPackages
          }
        });
      });
    }
  }
}

export const loadData = () => {
  return dispatch => {
    let allData = [];
    firebase.firestore().collection('homeDesignPackages').get().then((abc)=>{
      abc.forEach((document)=> {
        allData.push(document.data());
      });
      dispatch({type: 'dataLoaded', allData});
    });
  }
}