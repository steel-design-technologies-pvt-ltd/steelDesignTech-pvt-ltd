import React from 'react';
import Aux from '../../../hoc/Aux';
import PageBanner from '../../UI/PageBanner/PageBanner';
import EquipmentPackages from '../../../containers/EquipmentPackages/EquipmentPackages';
let HomeDesignPage = (props)=> {
  return (
    <Aux>
      <PageBanner />
      <EquipmentPackages />
    </Aux>
  );
}

export default HomeDesignPage;