import React from 'react';
import Aux from '../../../hoc/Aux';
import { Link } from 'react-router-dom';
let Logo = (props) => {
    return (
        <Aux>
            <Link to="/" className="probootstrap-logo">{props.staticContent.logoSection.label}</Link>
            <Link to="/" className="probootstrap-burger-menu visible-xs" onClick={props.mobileMenuIcon}><i>{props.staticContent.logoSection.mobileMenuLabel}</i></Link>
        </Aux>
    );
};
export default Logo;