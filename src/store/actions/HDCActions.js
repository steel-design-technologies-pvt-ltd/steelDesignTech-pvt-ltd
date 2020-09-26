import firebase from '../../config/config';

export const getPackageData = (id)=> {
  return dispatch => {
    let packagesData = null;
    let relatedPackagesData=[];
    firebase.firestore().collection('homeDesignPackages').get().then((docSnapshot)=> {
      docSnapshot.forEach((doc)=> {
        if(id === doc.data().contentData.packageID){
          packagesData = doc.data().contentData;
        } else {
          relatedPackagesData.push(doc.data());
        }
      });
      dispatch({type: 'HDCPackageData', data: {packagesData, relatedPackagesData}});
    });
  }
}