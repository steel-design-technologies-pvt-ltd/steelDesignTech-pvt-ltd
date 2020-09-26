import React, { Component } from 'react';
import { companyProductsStaticContent } from '../../assets/data/website-framework';
import ProductDisplay from '../../components/ProductDisplay/ProductDisplay';
import { withRouter } from 'react-router-dom';

const iconStyling = {
  position: 'relative',
  display: 'block',
  marginBottom: '10px',
  height: '70px',
  width: '70px',
  margin: '0 auto',
  border: '2px solid rgba(255, 255, 255, 1)',
  borderRadius: '50%',
  textAlign: 'center',
  color: '#fff',
  fontSize: '45px',
  cursor: 'pointer'
}
class CompanyProducts extends Component {

  redirectToCompanyProductsPage(productID) {
    if(productID === 'home_plans') {
      this.props.history.push('/homeDesigns');
    } else {
      this.props.history.push('/productsDescription/?productID=' + productID);
    }
  }

  redirectToPageNotFound() {
    this.props.history.push('/serviceFeature');
  }

  render() {
    return (
      <section className="probootstrap-section">
        <div className="container">
          <div className="row probootstrap-gutter10">
              {
                companyProductsStaticContent.products.map((product, index)=> {
                    return <ProductDisplay 
                        contentData={product}
                        key={index}
                        click={(e)=> {
                            e.preventDefault();
                            this.redirectToCompanyProductsPage(product.productID);
                        }}
                        productID={index}
                    />
                })
              }
              <div className="col-md-6 col-sm-6">
                <span className="probootstrap-hover-overlay">
                  <img style={{'width':'650px','height':'400px'}} src="https://via.placeholder.com/600X300.png" alt="more coming" className="img-responsive"/>
                  <div className="probootstrap-text-overlay" onClick={(e)=> {
                      e.preventDefault();
                      this.redirectToPageNotFound();
                    }}>
                    <h3>We always thrive to bring new services for our customers. Many more product as a service to come.</h3>
                    <div style={iconStyling}><i className="icon-arrow-right"></i></div>
                  </div>
                </span>
              </div>
          </div>
        </div>
      </section>
    );
  }
}

export default withRouter(CompanyProducts);