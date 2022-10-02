import React, { useState } from 'react'
import dataContext from '../../datacontext'
import { useContext } from 'react'
import './timeseekbar.css'
const TimeSeekBar = ({gData}) => {
    const {globalData,setGlobalData,on,setOn}=useContext(dataContext)
    const [range,setRange] = useState(0)
    const {param,setParam}=useState(0)
    const handleChange=(e)=>{
      setRange(e.target.value)

   }
   const diffHours = (xTime, yTime) => {
  
    let diff = Math.abs(new Date(xTime).getTime() - new Date(yTime).getTime()) / 3600000;
    return diff;
}
   const handleDateTime=(e)=>{
     const baseDate="2018-10-01T00:00:00.000Z"
     
    const inputDate=e.target.value
    console.log(inputDate);
    setRange(Math.floor(diffHours(baseDate, inputDate)));     

  
   }
   const handleSubmit= async()=>{
    const resposnse=await fetch(`https://parker-solar-probe-data-default-rtdb.asia-southeast1.firebasedatabase.app/${range}.json`)
    const resp=await resposnse.json()
    setGlobalData(resp)
    setOn(true)
    console.log(resp);
  }


  
   return (
    <div className='timeseekbar'>
        <input className='range' type="range"  name="range" id="myProgressBar" min="0" max="30670" onChange={(e)=>{
          handleChange(e)
          handleSubmit(e)
        }}/>
        <input className='text' type="text" name=""  value={range} id="" />
        <input type="datetime-local" onChange={handleDateTime} name="" id="" />
         
        <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default TimeSeekBar
