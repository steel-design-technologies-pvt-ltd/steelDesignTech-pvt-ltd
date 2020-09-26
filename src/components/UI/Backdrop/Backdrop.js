import React from 'react';

let Backdrop = (props)=> {
    return (
        props.show? <div className="mobile-menu-overlay" onClick={props.backDropClicked}></div>: null
    );
};
export default Backdrop;