import React from 'react'
import dataContext from '../../datacontext'
import { useContext } from 'react'
import './abc.css'
const OtherToggle = () => {
    const {showMagneticField,setShowMagneticField,showDashboard,setShowDashboard}=useContext(dataContext)
    const handleMagneticField = () =>{
        showMagneticField ? setShowMagneticField(false):setShowMagneticField(true)
    }
    const handleDash=()=>{
       showDashboard ? setShowDashboard(false):setShowDashboard(true)
    }
  return (

    <div class="container">
 
        <div class="switch-toggle">
            <input onClick={handleDash} type="checkbox" id="wifi"/>
            <label for="wifi"></label>
        </div>      
         <div class="switch-toggle">
            <input onClick={handleMagneticField} type="checkbox" id="location"/>
            <label for="location"></label>
        </div>
    </div>




  )
}

export default OtherToggle
