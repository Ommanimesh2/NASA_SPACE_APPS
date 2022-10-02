import React, { useState } from 'react'
import dataContext from '../../datacontext'
import { useContext } from 'react'
import './solarsundisplay.css'
const SolarSunDisplay = () => {
    const {globalData,setGlobalData,on}=useContext(dataContext)
    const [fromTop,setFromTop]=useState(0)

    const radial=globalData.radialDistance
    console.log(radial);

    const parentStyle={
      height:`${150+150*radial}px`,
      width:`${150+150*radial}px`,
      top:`${50+150*radial}px`, 
    }
    const earthStyle={
    backgroundImage:"url(https://svs.gsfc.nasa.gov/vis/a030000/a030300/a030362/euvi_aia304_2012_carrington_print.jpg)",
    
  }
 
        
  return (
    on ? 
    <>

    <div style={parentStyle} className="earth">
      <div style={earthStyle} ></div>
    </div>
    </> :
       <div className="earth">
       <div></div>
     </div>
  )
}

export default SolarSunDisplay
