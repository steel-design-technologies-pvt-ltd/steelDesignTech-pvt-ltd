import { combineReducers } from 'redux';
import equipmentPackagesReducer from './equipmentPackagesReducer';
import homeDesignReducer from './homeDesigns';
import homeDesignPackageContainerReducer from './packageContainerReducer';
import popularPackageReducer from './popularPackageReducer';
import { firestoreReducer } from 'redux-firestore';


const RootReducer = combineReducers({
  EDP: equipmentPackagesReducer,
  HDR: homeDesignReducer,
  fsreducer: firestoreReducer,
  HDC: homeDesignPackageContainerReducer,
  PPState: popularPackageReducer,
});

export default RootReducer;