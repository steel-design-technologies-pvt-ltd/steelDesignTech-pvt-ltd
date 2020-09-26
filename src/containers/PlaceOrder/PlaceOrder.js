import React, { Component } from 'react';
import Style from './PlaceOrder.module.css';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';

class PlaceOrder extends Component {

  navigateToHomePage() {
    console.log(this.props.history);
    this.props.history.push('/home');
  }
  render() {
    return (
      <div className={Style.headerSpace}>
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h1 className="text-center">Thanks! Your order has been placed.</h1>
                <p className="text-center">Thanks for showing interest in our services, our representative will soon get in touch with you for further assistance with your query</p>
                {/* <h5 className="text-center">Please proceed to <a href="javascript:void(0)" onClick={(event)=> {
                  event.preventDefault();
                  this.navigateToHomePage();
                }}>HomePage</a> to continue exploring other services we offer!!</h5> */}
                <h5 className="text-center">Please proceed to <Link to={{
                  pathname: '/home'
                }}>HomePage</Link> to continue exploring other services we offer!!</h5>
              </div>
            </div>
        </div>
      </div>
    );
  }
}
export default withRouter(PlaceOrder);