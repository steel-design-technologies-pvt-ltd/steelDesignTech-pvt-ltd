let initialState = {
  PPData: []
}
const popularPackageReducer = (state=initialState, action) => {
  switch(action.type) {
    case 'PPdataload':
      return {
        ...state,
        PPData: [...action.popularPackagesData]
      }
    default:
      return {
        ...state
      }
  }
}

export default popularPackageReducer;