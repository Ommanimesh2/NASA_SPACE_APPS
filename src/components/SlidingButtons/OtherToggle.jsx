import React from 'react'
import dataContext from '../../datacontext'
import { useContext } from 'react'
import song1 from '../../assets/0.mp3'
import song2 from '../../assets/1.mp3'
import song3 from '../../assets/2.mp3'
import './abc.css'
const OtherToggle = () => {
    const {globalData,song,setSong}=useContext(dataContext)
    const {showMagneticField,setShowMagneticField,showDashboard,setShowDashboard}=useContext(dataContext)
    const handleMagneticField = () =>{
        showMagneticField ? setShowMagneticField(false):setShowMagneticField(true)
    }
    const handleDash=()=>{
       showDashboard ? setShowDashboard(false):setShowDashboard(true)
    }
    const handlesound=()=>{
      setSong(true)
      if(globalData.protonSpeed<333){
        const aud=new Audio(song1)
        aud.play()
      }
      else if(globalData.protonSpeed>333 && globalData.protonSpeed<666){
        const aud=new Audio(song2)
        aud.play()
      }
      else{
        const aud=new Audio(song3)
        aud.play()
      }
    }
    const handlePause=() => {
      const aud1=new Audio(song1)
      const aud2=new Audio(song2)
      const aud3=new Audio(song3)
      setSong(false)
      aud1.pause()
      aud2.pause()
      aud3.pause()

    }
  return (

    <div class="container">
 
        <div class="switch-toggle">
            details
            <input onClick={handleDash} type="checkbox" id="wifi"/>
            <label for="wifi"></label>
        </div>      
        <div class="switch-toggle">
            sound
            <input onClick={song? handlePause: handlesound} type="checkbox" id="ssd"/>
            <label for="ssd"></label>
        </div>      
         <div class="switch-toggle">
          magnetic field
            <input onClick={handleMagneticField} type="checkbox" id="location"/>
            <label for="location"></label>
        </div>
    </div>




  )
}

export default OtherToggle
