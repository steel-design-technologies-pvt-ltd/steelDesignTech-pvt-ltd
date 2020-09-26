import React, { Component } from 'react';
import { ContactStaticContent } from '../../assets/data/website-framework';
import isEmail from 'validator/lib/isEmail';
import Form from '../../components/UI/Form/Form';
import ContactAddress from '../../components/UI/ContactAddress/ContactAddress';
import Feedback from '../../components/UI/Feedback/Feedback';
import firebase from '../../config/config';

export default class ContactFeatures extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
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
      case 'firstName':
        this.setState({firstName: clientData.currentTarget.value});
      break;
      case 'lastName':
        this.setState({lastName: clientData.currentTarget.value});
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

  submitUserDetail() {
    if(this.state.clientMail && this.state.firstName && this.state.lastName && this.state.clientPhone) {
      firebase.firestore().collection('contactUsQuery').doc(this.state.clientMail).set(this.state).then(()=> {
        this.setState({dataSubmittedSuccessfully: true});
      });
    }
  }

  render () {
    return (
      <section className="probootstrap-section">
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <Form contentData={ContactStaticContent.contactForm} userData={(e)=> {this.getUserDetail(e)}} sendEquiry={(e)=> {e.preventDefault();this.submitUserDetail()}} isQuerySubmitted={this.state.dataSubmittedSuccessfully}/>
            </div>
            <div className="col-md-3 col-md-push-1">
              <ContactAddress contentData={ContactStaticContent.contactAddress}/>
              <Feedback contentData={ContactStaticContent.feedback}/>
            </div>
          </div>
        </div>
      </section>
    );
  }
}