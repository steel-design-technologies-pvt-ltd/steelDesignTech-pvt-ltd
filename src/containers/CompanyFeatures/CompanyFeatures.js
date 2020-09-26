import React, { Component } from 'react';
import CompanyFeature from '../../components/CompanyFeature/CompanyFeature';
import {CompanyFeaturesStaticContent} from '../../assets/data/website-framework';

class CompanyFeatures extends Component {
    state = CompanyFeaturesStaticContent;
    readMoreLinkClicked (readMoreParam, linkUrl) {
        console.log(readMoreParam, linkUrl);
    }
    render() {
        return (
            <section className="probootstrap-section probootstrap-section-lighter">
                <div className="container">
                <div className="row">
                    {
                        this.state.features.map((feature, index)=> {
                            return <CompanyFeature featureImage={feature.featureImage}
                            featureHeading={feature.featureHeading}
                            featureDescription={feature.featureDescription}
                            featureLink={feature.featureLink}
                            featureId={feature.featureId}
                            readMoreClick={(e)=> {
                                e.preventDefault();
                                this.readMoreLinkClicked(feature.featureId, feature.featureLink.linkUrl);
                            }}
                            key={index}
                            />
                        })
                    }
                </div>
                </div>
            </section>
        )
    }
}

export default CompanyFeatures;