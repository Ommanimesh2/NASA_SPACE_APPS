import React from 'react'
import dataContext from '../../datacontext'
import { useContext } from 'react'
import Arc from './Arc';
import { useState } from 'react'; 
import "./speedometer.css"
// import ReactSpeedometer from "react-d3-speedometer"

function Speedmeter() {
  const [value,setValue]=useState(50)
  const {globalData}=useContext(dataContext);

  return (
    <div className='arcclass'>
      
          <Arc value={globalData.protonSpeed}/>
        
      
    </div>
  )
}

export default Speedmeter