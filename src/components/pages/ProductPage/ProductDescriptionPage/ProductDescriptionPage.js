import React, { Component } from 'react';
import Aux from '../../../../hoc/Aux';
import ProductDescription from '../../../../containers/ProductDescription/ProductDescription';
class ProductDescriptionPage extends Component{
  getTheProductId() {
    return this.props.location.search.split('=')[1];
  }

  render() {
    return (
      <Aux>
        <ProductDescription productToDisplay={this.getTheProductId()}/>
      </Aux>
    );
  }
}
export default ProductDescriptionPage;