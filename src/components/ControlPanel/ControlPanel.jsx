import React from 'react'
import Odometer from '../odometer/Odometer'
import SpeedoMeter from '../speedometer/SpeedoMeter'
import TimeSeekBar from '../TimeSeekBar/TimeSeekBar'
import { useContext } from 'react'
import DashToggle from '../SlidingButtons/DashToggle'
import dataContext from '../../datacontext'
import './controlpanel.css'
import OtherToggle from '../SlidingButtons/OtherToggle'

const ControlPanel = () => {



return (
    <div className='controlpanel'>
      
      <Odometer/>
      <SpeedoMeter/>
      <div className="another">

      <OtherToggle/>
      <TimeSeekBar/>
      </div>
    </div>
  )
}

export default ControlPanel
