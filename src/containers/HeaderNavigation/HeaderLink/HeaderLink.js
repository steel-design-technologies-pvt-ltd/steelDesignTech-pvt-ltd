import React from 'react';
import { Link } from 'react-router-dom';

let HeaderLink = (props) => {
    return (
        <li className={props.activeIndex} onClick={props.linkClicked}>
            <Link to={props.navigationUrl}>{props.navigationLabel}</Link>
        </li>
    );
};
export default HeaderLink;