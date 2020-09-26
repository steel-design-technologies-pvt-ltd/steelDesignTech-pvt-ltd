import React from 'react';

let ModalContent = (props)=> {
  return (
    <div>
      <div className="row">
        <div className="col-md-12">
          <div className="form-group">
            <label htmlFor="clientName">{props.contentData.nameField}</label>
            <input type="text" className="form-control" id="clientName" name="clientName" onBlur={props.captureValue} />
          </div>
          <div className="form-group">
            <label htmlFor="clientMail">{props.contentData.mailField}</label>
            <input type="email" className="form-control" id="clientMail" name="clientMail" onBlur={props.captureValue} />
          </div>
          <div className="form-group">
            <label htmlFor="clientPhone">{props.contentData.clientPhone}</label>
            <input type="phone" className="form-control" id="clientPhone" name="clientPhone" onBlur={props.captureValue} />
          </div>
          <div className="form-group">
            <label htmlFor="clientMessage">{props.contentData.messageField}</label>
            <textarea cols="30" rows="10" className="form-control" id="clientMessage" name="clientMessage" onBlur={props.captureValue}></textarea>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ModalContent;