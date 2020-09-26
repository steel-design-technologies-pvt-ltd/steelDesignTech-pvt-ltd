import React from 'react';
import HomepageSlider from '../../../containers/HomepageSlider/HomepageSlider';
import CompanyFeatures from '../../../containers/CompanyFeatures/CompanyFeatures';
import CompanyPresences from '../../../containers/CompanyPresences/CompanyPresences';
import PopularEquipments from '../../../containers/PopularEquipments/PopularEquipments'
import CompanyServices from '../../../containers/CompanyServices/CompanyServices';

const homepage = () => {
  return (
    <div>
        <HomepageSlider/>
        <CompanyPresences/>
        <PopularEquipments />
        <CompanyFeatures/>
        <CompanyServices/>
    </div>
  )
}
export default homepage;