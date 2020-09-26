import React, { Component } from 'react';
import '../assets/styles/styles-merged.css';
import '../assets/styles/template-style.scss';
import './App.css';
import Header from '../components/Header/Header';
import Footer from '../containers/Footer/Footer';
import HomePage from '../components/pages/Home/HomePage';
import Aux from '../hoc/Aux';
import ContactPage from '../components/pages/Contact/ContactPage';
import HomeDesignPage from '../components/pages/HomeDesignPage/HomeDesignPage';
import HomeDesignPackageContainer from '../containers/HomeDesignPackages/HomeDesignPackageContainer/HomeDesignPackageContainer';
import EquipmentPage from '../components/pages/EquipmentPage/EquipmentPage';
import EquipmentDisplayContainer from '../containers/EquipmentPackages/EquipmentDisplayContainer/EquipmentDisplayContainer';
import ProductPage from '../components/pages/ProductPage/ProductPage';
import ProductDescriptionPage from '../components/pages/ProductPage/ProductDescriptionPage/ProductDescriptionPage';
import ServiceFeature from '../components/pages/ServiceFeature/ServiceFeature';
import PlaceOrder from '../containers/PlaceOrder/PlaceOrder';
import ReturnToTop from '../components/UI/ReturnToTop/ReturnToTop';
import Admin from '../components/Admin'
import { Route, Switch } from 'react-router-dom';

class App extends Component {
  scrollToTop() {
    window.scroll({top: 0, left: 0, behavior: 'smooth'});
  }
  render() {
    return (
      <Aux className="App">
        <Header/>
        <Switch>
          <Route path="/" exact component={HomePage}/>
          <Route path="/home" component={HomePage}/>
          <Route path="/serviceFeature" component={ServiceFeature} />
          <Route path="/homeDesigns" exact component={HomeDesignPage}/>
          <Route path="/homeDesigns/:id" component={HomeDesignPackageContainer}/>
          <Route path="/equipments" exact component={EquipmentPage}/>
          <Route path="/equipments/:id" component={EquipmentDisplayContainer}/>
          <Route path="/services" exact component={ProductPage} />
          <Route path="/productsDescription/" component={ProductDescriptionPage} />
          <Route path="/contact" component={ContactPage}/>
          <Route path="/placeorder" component={PlaceOrder} />
          <Route path="/admin" component={Admin} />
        </Switch>
        <Footer/>
        <ReturnToTop click={(e)=> {e.preventDefault();this.scrollToTop()}}/>
      </Aux>
    );
  }
}
export default App;