let initialState = {
  packagesData: {},
  relatedPackagesData: []
}

const homeDesignPackageContainerReducer = (state=initialState, action)=> {
  switch(action.type) {
    case 'HDCPackageData':
      return {
        ...state,
        packagesData: action.data.packagesData,
        relatedPackagesData: action.data.relatedPackagesData
      };
    default:
      return {
        ...initialState
      }
  }
}

export default homeDesignPackageContainerReducer;