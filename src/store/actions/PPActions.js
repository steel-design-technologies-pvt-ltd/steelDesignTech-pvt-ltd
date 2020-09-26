import firebase from '../../config/config';

export const getPopularPackagesData = ()=> {
  let allData = [];
  return dispatch => {
    firebase.firestore().collection('homeDesignPackages').get().then((docSnapshot)=>{
      docSnapshot.forEach((document)=> {
        allData.push(document.data());
      });
      dispatch({type: 'PPdataload',popularPackagesData: allData});
    });
  }
}