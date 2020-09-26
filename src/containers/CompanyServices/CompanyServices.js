import React, { Component } from 'react';
import PageFeatureDesc from '../../components/UI/PageFeatureDescription/PageFeatureDesc';
import Service from '../../components/CompanyService/Service';
import { companyServicesStaticContent } from '../../../src/assets/data/website-framework';

class CompanyServices extends Component {
    state = companyServicesStaticContent;

    render() {
        return (
            <div>
                <PageFeatureDesc
                    data={this.state.whyChooseUsSection} 
                    findOutMoreURL='/serviceFeature'
                />
                <section className="probootstrap-section">
                    <div className="container">
                    <div className="row heading">
                        <h2 className="mt0 mb50 text-center">Our Services</h2>
                    </div>
                    <div className="row">
                        {
                            this.state.ourServicesSection.map((service, index)=> {
                                return <Service key={index}
                                    serviceData={service}
                                />
                            })
                        }
                        <div className="clearfix visible-lg-block visible-md-block"></div>
                    </div>
                    </div>
                </section>
            </div>
        );
    }
    
}

export default CompanyServices;