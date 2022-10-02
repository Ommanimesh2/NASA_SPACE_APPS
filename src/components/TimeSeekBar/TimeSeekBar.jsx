import React, { useState } from 'react'
import dataContext from '../../datacontext'
import { useContext } from 'react'

const TimeSeekBar = ({gData}) => {
  const [newarr,setNewArr]=useState([])
  console.log(gData.documents[0]);
  const date=new Date(gData.documents[0].createTime)
  


  



  return (
    <div>
        <input type="range" name="range" id="myProgressBar" min="0" value="0" max="100"/>
      
    </div>
  )
}

export default TimeSeekBar
