import React from 'react';

let SendEnquiryForService = (props)=> {
  return (
    <div className="row">
      <h1 className="text-center">{props.contentData.heading}</h1>
      <div className="col-md-12">
        <div className="form-group">
          <label htmlFor="fname">{props.contentData.formNameLabel}</label>
          <input type="text" className="form-control" id="fname" name="fname" />
        </div>
      </div>
      <div className="col-md-12">
        <div className="form-group">
          <label htmlFor="customerEmail">{props.contentData.formMailLabel}</label>
          <input type="email" className="form-control" id="customerEmail" name="customerEmail" />
        </div>
      </div>
      <div className="col-md-12">
        <div className="form-group">
          <label htmlFor="contact">{props.contentData.formContactLabel}</label>
          <input type="phone" className="form-control" id="contact" name="contact" />
        </div>
        <div className="form-group">
          <button className="btn btn-primary">{props.contentData.formSubmitButtonLabel}</button>
        </div>
      </div>
    </div>
  );
}

export default SendEnquiryForService;