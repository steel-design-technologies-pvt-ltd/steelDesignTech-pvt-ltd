import React from "react";
import { Link } from 'react-router-dom';

let PopularLink = (props) => {
    return (
        <li>
        <Link to={{
            pathname:props.linkUrl
        }}>{props.linkLabel}</Link><small>({props.projectCount})</small>
        </li>
    );
}

export default PopularLink;