import React from 'react';

let SearchSite = (props) => {
    return (
        <div className="probootstrap-home-search probootstrap-animate">
            <h2 className="heading">{props.searchSection.headingText}</h2>
            <div className="probootstrap-field-group">
            <div className="probootstrap-fields">
                <div className="search-field">
                <i className="icon-location2"></i>
                <input type="text" className="form-control" placeholder={props.searchSection.inputText}/>
                </div>
            </div>
            <button className="btn btn-success" type="submit"><i className="icon-magnifying-glass t2"></i>{props.searchSection.searchButtonText}</button>
            </div>
        </div>
    );
}

export default SearchSite;