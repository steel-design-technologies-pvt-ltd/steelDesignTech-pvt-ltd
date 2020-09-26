import React from 'react';
// import { Link } from 'react-router-dom';
import Aux from '../../../hoc/Aux';

let Feedback = (props)=> {
    return (
        <Aux>
            <h4>{props.contentData.feedbackHeading}</h4>
            <p>{props.contentData.feedbackText}</p>
            {/* <p><Link to={{pathname: props.contentData.feedbackLink}}>{props.contentData.feedbackButtonLabel}</Link></p> */}
        </Aux>
    );
}
export default Feedback;