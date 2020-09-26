import React from 'react';
import Aux from '../../../hoc/Aux';
import PageBanner from '../../UI/PageBanner/PageBanner';
import CompanyProducts from '../../../containers/CompanyProducts/CompanyProducts';
let ProductPage = (props)=> {
  return (
    <Aux>
      <PageBanner />
      <CompanyProducts />
    </Aux>
  );
}
export default ProductPage;