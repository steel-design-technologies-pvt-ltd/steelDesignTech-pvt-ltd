import React from 'react';
import { gotoTopicon } from '../../../assets/data/website-framework';
const ReturnToTop =(props)=> (
  <div className="icon-scrol-top" onClick={props.click}>
    <img alt="gotop" src={gotoTopicon}/>
  </div>
);

export default ReturnToTop;