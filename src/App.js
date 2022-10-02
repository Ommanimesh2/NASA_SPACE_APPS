import logo from './logo.svg';
import './App.css';
import {useContext, useEffect, useState} from 'react'
import dataContext from './datacontext';
import Overlay from './Overlay';
import SolarSunDisplay from './components/SolarSunDisplay/SolarSunDisplay';
import Thermometer from 'react-thermometer-component'
import ControlPanel from './components/ControlPanel/ControlPanel';
import Dashboard from './components/Dashboard/Dashboard';
function App() {
  const {globalData,setGlobalData,showDashboard,showMagneticField}=useContext(dataContext)
  console.log(globalData.protonSpeed/5);
  const myStyle1={
    animationDuration:`${400/globalData.protonSpeed}s`,
    animationDelay:`${80/globalData.protonSpeed}s`
  }
  const myStyle2={
    animationDuration:`${400/globalData.protonSpeed}s`,

    animationDelay:`${(80/globalData.protonSpeed)*2}s`
  }
  const myStyle3={
    animationDuration:`${400/globalData.protonSpeed}s`,

    animationDelay:`${(80/globalData.protonSpeed)*3}s`,
    
  }
  const myStyle4={
    animationDuration:`${400/globalData.protonSpeed}s`,

    animationDelay:`${(80/globalData.protonSpeed)*4}s`
  }
  const myStyle5={
    animationDuration:`${400/globalData.protonSpeed}s`,

    animationDelay:`${(80/globalData.protonSpeed)*5}s`
  }
 const playSound=()=>{
  const data=new Audio('1.mp3')
  data.play()
 }
 
  return (
    <>
    {globalData ?
<div id="space">
  <div style={myStyle1} class="stars"></div>
  <div style={myStyle2} class="stars"></div>
  <div style={myStyle3} class="stars"></div>
  <div style={myStyle4} class="stars"></div>
  <div style={myStyle5} class="stars"></div>
</div>:<div id="space">
  <div class="stars"></div>
  <div class="stars"></div>
  <div class="stars"></div>
  <div class="stars"></div>
  <div class="stars"></div>
</div>}
{globalData.protonTemp ?
   <div className='cls'>
   <Thermometer
   height="350"
   max={10705}
   format="X 10^2 K"
   value={`${globalData.protonTemp/100}`}
   />
   </div>:
   <div className='cls'>
   <Thermometer
   height="350"
   max={10705}
   
   value={`No data`}
   />
   </div>
   }
   <SolarSunDisplay/>
   <ControlPanel/>
   {showDashboard ? <Dashboard/> :<></>} 
   {showMagneticField ? <Overlay/> :<></>}
  

</>

  );
} 


export default App;
