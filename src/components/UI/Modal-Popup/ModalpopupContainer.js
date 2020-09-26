import React, { Component } from 'react';
import isEmail from 'validator/lib/isEmail';
import ModalContent from '../../../containers/ProductDescription/ModalContent';
import firebase from '../../../config/config';
import { getInTouchFormStaticContent } from '../../../assets/data/website-framework';
const showpopup = {
  "display": "block",
  "background":'rgba(0,0,0,.6)'
}
class ModalpopupContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clientName: '',
      clientMail: '',
      clientMessage: '',
      clientPhone: '',
      dataSubmittedSuccessfully: false
    }
  }
  getUserDetail (clientData) {
    if(clientData.currentTarget.value === '' || !clientData.currentTarget.value) {
      clientData.currentTarget.className += ' required-error';
      return undefined;
    } else {
      clientData.currentTarget.className = 'form-control';
    }
    switch(clientData.currentTarget.id) {
      case 'clientName': 
        this.setState({clientName: clientData.currentTarget.value});
      break;
      case 'clientMail':
        if(isEmail(clientData.currentTarget.value)){
          this.setState({clientMail: clientData.currentTarget.value});
        }
      break;
      case 'clientPhone': 
        this.setState({clientPhone: clientData.currentTarget.value});
      break;
      case 'clientMessage': 
        this.setState({clientMessage: clientData.currentTarget.value});
      break;
      default: return ;
    }
  }

  redirectToHome() {
    window.location.href='/';
  }

  submitUserDetail() {
    if(this.state.clientMail && this.state.clientName && this.state.clientPhone) {
      firebase.firestore().collection('customers').doc(this.state.clientMail).set(this.state).then(()=> {
        this.setState({dataSubmittedSuccessfully: true});
      });
    }
  }

  render () {
    return (
      this.props.buttonEnabled?
      <div className="modal" id="myModal" style={showpopup}>
        <div className="modal-dialog">
          <div className="modal-content" style={this.state.dataSubmittedSuccessfully?{display:'none'}:{display:'block'}}>
            <div className="modal-header">
              <h4 className="modal-title">{getInTouchFormStaticContent.heading}</h4>
              <button type="button" className="close" data-dismiss="modal" onClick={this.props.modalCanceled}>&times;</button>
            </div>
            <div className="modal-body">
            <ModalContent captureValue={(e)=> {this.getUserDetail(e)}} contentData={getInTouchFormStaticContent}/>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-success" data-dismiss="modal" onClick={(e)=> {
                e.preventDefault();
                this.submitUserDetail();
              }}>{getInTouchFormStaticContent.actionButton}</button>
            </div>
          </div>
          <div className="modal-content" style={this.state.dataSubmittedSuccessfully?{display:'block'}:{display:'none'}}>
            <div className="modal-body">
              <p className="text-center">{getInTouchFormStaticContent.successMessage}</p>
              <p className="text-center"><img className="img-responsive" src={getInTouchFormStaticContent.querySubmitSuccessIcon} style={{'width':'200px','margin':'auto'}} alt="success-icon"/></p>
              <p className="text-center">click here to go to <span style={{color:'#2866AB',cursor:'pointer'}} onClick={(e)=> {e.preventDefault();this.redirectToHome();}}>HomePage</span></p>
            </div>
          </div>
        </div>
      </div>:null
    )
  }
}
export default ModalpopupContainer;