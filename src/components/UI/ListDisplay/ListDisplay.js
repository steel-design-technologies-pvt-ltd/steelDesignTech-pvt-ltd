import React from 'react';

let ListDisplay = (props)=> {
  return (
    <li>{props.name}<span>{props.value}</span></li>
  );
};
export default ListDisplay;