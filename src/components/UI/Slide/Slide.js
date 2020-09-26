import React from "react";

let Slide = (props) => {
  return (
    <div>
      <img src={props.BGUrl} alt={props.slideName}/>
    </div>
  )
}
export default Slide;