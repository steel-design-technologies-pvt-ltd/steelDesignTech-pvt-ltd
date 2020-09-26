import React from "react";
import { Link } from 'react-router-dom';

let QuickLink = (props) => {
    return (
            <li>
                <Link to={{
                    pathname:props.linkUrl,
                    search: props.linkSearch
                }}>{props.linkLabel}</Link>
            </li>
    );
}

export default QuickLink;