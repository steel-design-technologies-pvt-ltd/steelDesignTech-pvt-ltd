import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import PageFeatureDesc from '../../components/UI/PageFeatureDescription/PageFeatureDesc';
import AboutCompany from '../../components/AboutCompany/AboutCompany';
import {AboutPageStaticContent} from '../../assets/data/website-framework';

export default class AboutFeatures extends Component {
    state = AboutPageStaticContent;
    findOutMoreClicked (url) {
        console.log(url);
    }
    render() {
        return (
        <Aux>
            <AboutCompany contentData={this.state.aboutCompanySection}/>
            <PageFeatureDesc data={this.state.companyHistorySection} findOutMoreURL={this.state.companyHistorySection.readMoreButton.buttonUrl} />
        </Aux>
        );
    };
}