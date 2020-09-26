import React from 'react';

let AboutCompany = (props)=> {
    return (
        <section className="probootstrap-section">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <h2>{props.contentData.leftSubsectionHeading}</h2>
                        <p>{props.contentData.leftSubsectionDesc}</p>
                    </div>
                    <div className="col-md-6">
                        <h2>{props.contentData.rightSubsectionHeading}</h2>
                        <p>{props.contentData.rightSubsectionDesc}</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutCompany;