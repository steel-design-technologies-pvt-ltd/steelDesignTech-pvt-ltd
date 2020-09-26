import React from 'react';
import Aux from '../../../hoc/Aux';
import PageBanner from '../../UI/PageBanner/PageBanner';
import ContactFeatures from '../../../containers/ContactFeatures/ContactFeatures';
import AboutFeature from '../../../containers/AboutFeatures/AboutFeatures';
let ContactPage = (props)=> {
    return (
        <Aux>
            <PageBanner />
            <ContactFeatures />
            <AboutFeature />
        </Aux>
    );
}
export default ContactPage;