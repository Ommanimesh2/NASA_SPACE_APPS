import logo from './logo.svg';
import './App.css';
import {useContext, useEffect, useState} from 'react'
import dataContext from './datacontext';
import Overlay from './Overlay';
import SolarSunDisplay from './components/SolarSunDisplay/SolarSunDisplay';
import ControlPanel from './components/ControlPanel/ControlPanel';
import Dashboard from './components/Dashboard/Dashboard';
function App() {
  const {globalData,setGlobalData,showDashboard,showMagneticField}=useContext(dataContext)
  return (
<>
   <SolarSunDisplay/>
   <ControlPanel/>
   {showDashboard ? <Dashboard/> :<></>} 
   {showMagneticField ? <Overlay/> :<></>}
  

</>

  );
} 


export default App;
