import logo from './logo.svg';
import './App.css';
import {useContext, useEffect, useState} from 'react'
import dataContext from './datacontext';
import SolarSunDisplay from './components/SolarSunDisplay/SolarSunDisplay';
import ControlPanel from './components/ControlPanel/ControlPanel';
import Dashboard from './components/Dashboard/Dashboard';
function App() {
  const {globalData,setGlobalData}=useContext(dataContext)

  const thids="sadf"
useEffect(()=>{
 handleData()
},[thids])
  const handleData=async ()=>{
    const response=await fetch("https://firestore.googleapis.com/v1/projects/psp-data-57891/databases/(default)/documents/psp_data")
    const newData=await response.json()
    setGlobalData(newData)
  }

  
if(globalData.length!=0){

  return (
    <>
   <SolarSunDisplay/>
   <ControlPanel gData={globalData}/>
   {/* <Dashboard/> */}
    </>
  );
} else{
  <>loading</>
}
}

export default App;
