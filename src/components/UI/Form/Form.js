import React from 'react';
import Aux from '../../../hoc/Aux';

let Form = (props)=> {
    return (
        <Aux>
        {
          props.isQuerySubmitted?
          <div className="row">
            <div className="col-md-12">
              <h1>Your Query has been sucessfully submitted. We will contact you soon...</h1>
              <p className="text-center"><img className="img-responsive" src={props.contentData.querySubmitSuccessIcon} alt="success-icon" /></p>
            </div>
          </div>:<div>
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="firstName">{props.contentData.firstNameLabel}</label>
                  <input type="text" className="form-control" id="firstName" name="firstName" onBlur={props.userData}/>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="lastName">{props.contentData.lastNameLabel}</label>
                  <input type="text" className="form-control" id="lastName" name="lastName" onBlur={props.userData}/>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="clientMail">{props.contentData.emailLabel}</label>
                  <input type="email" className="form-control" id="clientMail" name="clientMail" onBlur={props.userData}/>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="clientPhone">{props.contentData.phoneLabel}</label>
                  <input type="phone" className="form-control" id="clientPhone" name="clientPhone" onBlur={props.userData}/>
                </div>
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="clientMessage">{props.contentData.messageLabel}</label>
              <textarea cols="30" rows="10" className="form-control" id="clientMessage" name="clientMessage" onBlur={props.userData}></textarea>
            </div>
            <div className="form-group">
              <button className="btn btn-primary" onClick={props.sendEquiry}>{props.contentData.submitFormButtonLabel}</button>
            </div>
          </div>
        }
        </Aux>
    );
}
export default Form;