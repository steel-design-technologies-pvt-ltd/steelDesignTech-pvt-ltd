import React from 'react';
import Aux from '../../../hoc/Aux';
import PageBanner from '../../UI/PageBanner/PageBanner';
import HomeDesignPackages from '../../../containers/HomeDesignPackages/HomeDesignPackages';
let HomeDesignPage = () => {
  return (
    <Aux>
      <PageBanner />
      <HomeDesignPackages />
    </Aux>
  );
}

export default HomeDesignPage;