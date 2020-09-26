const initialState = {
  homeDesignFilter: 'ALL',
  packagesData : []
};

const homeDesignReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'filterDesignPackages':
      return {
        ...state,
        homeDesignFilter: action.filterData.filterval,
        packagesData: action.filterData.allDesignPackages
      }
    case 'dataLoaded':
        return {
          ...state,
          packagesData: action.allData
        }
    default:
      return {
        ...initialState
      }
  }
}
export default homeDesignReducer;