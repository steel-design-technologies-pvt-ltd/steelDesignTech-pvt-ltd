import React from 'react';
import Aux from '../../../hoc/Aux';

let ContactAddress = (props)=> {
    return (
        <Aux>
            <h4>{props.contentData.contactHeading}</h4>
            <ul className="with-icon colored">
                <li><i className="icon-location2"></i> <span>{props.contentData.address1}</span></li>
                <li><i className="icon-location2"></i> <span>{props.contentData.address2}</span></li>
                <li><i className="icon-mail"></i><span>{props.contentData.contactMail}</span></li>
                <li><i className="icon-phone2"></i><span>{props.contentData.contactNumber}</span></li>
            </ul>
        </Aux>
    );
}
export default ContactAddress;