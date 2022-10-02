import React from 'react'
import dataContext from '../../datacontext'
import { useContext } from 'react'
import Arc from './Arc';
import { useState } from 'react'; 
// import ReactSpeedometer from "react-d3-speedometer"
import ReactDOM from "react-dom";
function speedmeter() {
  const [value,setValue]=useState(50)
  const {globalData}=useContext(dataContext);

  return (
    <div>
        <div className="container1">
          <Arc value={globalData.protonSpeed}/>
        </div>
      {/* <ReactSpeedometer 
       value={this.this.props.value}
       needleTransitionDuration={4000}
       currentValuePlaceholderStyle="#{value}"
       needleTransition="easeElastic"
       currentValueText="Current Value:#{value}" segments={1000} maxSegmentLabels={100}/> */}
      
    </div>
  )
}

export default speedmeter
