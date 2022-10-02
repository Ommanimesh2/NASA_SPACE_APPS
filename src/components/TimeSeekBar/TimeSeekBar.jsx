import React, { useState } from 'react'
import dataContext from '../../datacontext'
import { useContext } from 'react'

const TimeSeekBar = ({gData}) => {
    const {globalData,setGlobalData,on,setOn}=useContext(dataContext)
    const [range,setRange] = useState(0)
    const {param,setParam}=useState(0)
    const handleChange=(e)=>{
      setRange(e.target.value)

   }
   const handleDateTime=(e)=>{
     const baseDate="2018-10-01T00:00:00.000Z"
     const baseDateObj=new Date("2018-10-01T00:00:00.000Z")
      const first=baseDate.split('T')
      const second=first[0].split('-')
      //  const baseParam=
    //  const dat=new Date(e.target.value);

    //  console.log(dat.getHours());
   }
   const handleSubmit= async()=>{
    const resposnse=await fetch(`https://psp-data-organized-default-rtdb.asia-southeast1.firebasedatabase.app/${range}.json`)
    const resp=await resposnse.json()
    setGlobalData(resp)
    setOn(true)
    console.log(resp);
  }


  
   return (
    <div>
        <input type="range" name="range" id="myProgressBar" min="0" max="30670" onChange={handleChange}/>
        <input type="text" name=""  value={range} id="" />
        <input type="datetime-local" onChange={handleDateTime} name="" id="" />
         
        <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default TimeSeekBar
