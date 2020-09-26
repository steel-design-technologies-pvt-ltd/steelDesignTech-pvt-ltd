import React, { Component } from 'react';
import {CompanyPresencesStaticContent} from '../../assets/data/website-framework';
import CompanyPresence from '../../components/CompanyPresence/CompanyPresence';
import BestLayout from '../../components/BestLayout/BestLayout';


class CompanyPresences extends Component {
    state = CompanyPresencesStaticContent;
    render() {
        return (
            <div>
                <section className="probootstrap-section">
                    <div className="container">
                    <div className="row heading">
                        <h2 className="mt0 mb50 text-center">{this.state.sectionHeading}</h2>
                    </div>
                    <div className="row probootstrap-gutter10">
                        {
                            this.state.presences.map((presence, index)=> {
                                return <CompanyPresence 
                                    location={presence.presenceLocation}
                                    imgUrl={presence.backgroundImageUrl}
                                    projectCount={presence.projectsOngoing}
                                    urlCompanyPresence={presence.presenceID}
                                    key={index}
                                    presenceId={index}
                                />
                            })
                        }
                    </div>
                    </div>
                </section>
                <section className="probootstrap-section probootstrap-bg" style={{
                    background: 'url('+this.state.bestLayoutContent.backgroundImageURL+')',
                    backgroundPositionY: '60%'
                }}>
                    <BestLayout staticContent={this.state.bestLayoutContent} bestLayoutUrl={this.state.bestLayoutContent.linkToBestLayout.bestLayoutUrl}/>
                </section>
            </div>
        );
    }
    
}
export default CompanyPresences;