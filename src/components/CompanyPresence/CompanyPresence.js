import React from 'react';
import { Link } from 'react-router-dom';
const mainCityStyle = {
    maxHeight: '300px',
    minWidth: '600px'
}
const otherCity = {
    maxHeight: '200px',
    minWidth: '400px'
}
let CompanyPresence = (props) => {
    return (
        <Link to={{pathname: props.bestLayoutUrl}} className={props.presenceId<2?"col-md-6 col-sm-6":"col-md-4 col-sm-4"}>
            <div className="probootstrap-hover-overlay">
                <img style={props.presenceId<2?mainCityStyle:otherCity} src={props.imgUrl} alt={props.location} className="img-responsive"/>
                <div className="probootstrap-text-overlay">
                    <h3>{props.location}</h3>
                    <p>{props.projectCount}</p>
                </div>
            </div>
        </Link>
    );
}
export default CompanyPresence