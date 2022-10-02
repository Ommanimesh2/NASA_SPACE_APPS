import React, { useState } from 'react'
import dataContext from '../../datacontext'
import { useContext } from 'react'
import './solarsundisplay.css'
const SolarSunDisplay = () => {
    const {globalData,setGlobalData}=useContext(dataContext)
    const [div,setdiv]=useState('')
    const gif=()=>{
      
    }
    const parent =(e)=>{
        setdiv(e.target)
        }
        const handleclick=(e)=>{
          gif()
          console.log(e.target);
          e.target.style.backgroundImage="url(https://svs.gsfc.nasa.gov/vis/a030000/a030300/a030362/euvi_aia304_2012_carrington_print.jpg)"
        div.style.height="450px"
        div.style.width="450px"
        div.style.top="40vh"
        div.style.bottom="45vw"
        }
  return (
    
    <>

    <div onClick={parent} className="earth">
      <div onClick={handleclick}></div>
    </div>
    </>
  )
}

export default SolarSunDisplay
