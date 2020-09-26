import React from 'react';

const formStyle = {
    background: 'transparent'
}
const btnStyle = {
    height: '40px',
    'lineHeight': '0px',
    'fontSize': '12px',
    'fontWeight': '400',
    'textTransform': 'uppercase',
    'letterSpacing': '.2em',
    'borderRadius': '4px',
    border: 'none',
    position: 'absolute',
    top: '-3px',
    right: '0',
    'paddingLeft': '15px',
    'paddingRight': '15px',
    background: '#2866AB',
}
let SubscribeComponent = (props)=> {
    return (
        <div className="col-md-3">
            <div className="probootstrap-footer-widget probootstrap-link-wrap">
                <h4 className="heading">{props.data.descriptionHeading}</h4>
                <p>{props.data.subscribeEmailSentence}</p>
                <div className="form-field">
                    <div style={{position:'relative'}}>
                        <input style={formStyle} type="text" className="form-control" placeholder="Enter your email" />
                        <button style={btnStyle} className="btn btn-subscribe" onClick={props.subscribeClick}>{props.data.subscribeEmailButton.buttonLabel}</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default SubscribeComponent;