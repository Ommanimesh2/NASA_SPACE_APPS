import logo from './logo.svg';
import './App.css';
import {useContext, useEffect, useState} from 'react'
import dataContext from './datacontext';
import SolarSunDisplay from './components/SolarSunDisplay/SolarSunDisplay';
import ControlPanel from './components/ControlPanel/ControlPanel';
import Dashboard from './components/Dashboard/Dashboard';
function App() {
  const {globalData,setGlobalData,showDashboard}=useContext(dataContext)
  return (
<>
   <SolarSunDisplay/>
   <ControlPanel/>
   {showDashboard ? <Dashboard/> :<></>}  
</>

  );
} 


export default App;
