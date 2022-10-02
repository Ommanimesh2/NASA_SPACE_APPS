import React, { useState } from 'react'
import dataContext from '../../datacontext'
import { useContext } from 'react'
import './solarsundisplay.css'
import sun_1 from '../../assets/sun_1.png'
import sun_2 from '../../assets/sun_2.png'
import sun_3 from '../../assets/sun_3.png'
const SolarSunDisplay = () => {
    const {globalData,setGlobalData,on}=useContext(dataContext)
    const [fromTop,setFromTop]=useState(0)
  
    const radial=globalData.radialDistance
    console.log(radial);

    const parentStyle={
      height:`${250-150*radial}px`,
      width:`${250-150*radial}px`,
      top:`${50+150*radial}px`, 
    }
    const earthStyle1={
 
      backgroundImage:`url(${sun_1})`,
    
  }
    const earthStyle2={
 
      backgroundImage:`url(${sun_2})`,
    
  }
    const earthStyle3={
 
      backgroundImage:`url(${sun_3})`,
    
  }
 
        
  return (
    on ? 
    <>

    <div style={parentStyle} className="earth">
   
      { radial < 0.3 ?  <div style={earthStyle1} ></div> : radial>0.3 && radial < 0.6 ?  <div style={earthStyle2}></div>:  <div style={earthStyle3} ></div>}
  
    </div>
    </> :
       <div className="earth">
       <div></div>
     </div>
  )
}

export default SolarSunDisplay
