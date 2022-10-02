import React from 'react'
import Odometer from '../odometer/Odometer'
import SpeedoMeter from '../speedometer/SpeedoMeter'
import TimeSeekBar from '../TimeSeekBar/TimeSeekBar'
import { useContext } from 'react'
import dataContext from '../../datacontext'
const ControlPanel = ({gData}) => {


if(gData)
{ return (
    <div>
      <Odometer/>
      <SpeedoMeter/>
      <TimeSeekBar gData={gData}/>
    </div>
  )} else{
    <>this is comedy</>
  }
}

export default ControlPanel
