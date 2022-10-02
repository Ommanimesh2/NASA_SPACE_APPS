import React from 'react'
import dataContext from '../../datacontext';
import { useContext } from 'react';
import './odometer.css'
import gauge from '../.././assets/odometer-dial.png';
import {ReactComponent as Center} from '../.././assets/center.svg' ;
import {ReactComponent as Needle} from '../.././assets/needle.svg' ;
const Odometer = ()=>{
  const {globalData}=useContext(dataContext);
  const value=globalData.radialDistance
    function angle(value){
       
       return((value*180)-90)
      
    }
    const ang=angle(value)
  return (

      <div className='odometer'>
        <img src={gauge} className="gauge1"/>
        <Needle className="needle1" style={{transform:`rotate(${ang}deg)`}}/>
        <Center className="center1" />
        <div className="speed1">
            <span>{value} AU</span>
        </div>
     </div>
 



  )
}

export default Odometer
