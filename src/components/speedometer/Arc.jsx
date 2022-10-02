import React from 'react'
import "./speedometer.css"
import gauge from '../.././assets/gauge.png';
import {ReactComponent as Center} from '../.././assets/center.svg' ;
import {ReactComponent as Needle} from '../.././assets/needle.svg' ;
const Arc = ({value})=>{
    function angle(value){
       if(value>500)
       return(90-(value*0.18))
       else
       return(-(90-(value*0.18)))
    }
    const ang=angle(value)
  return (
    <div class="container">
      <div>
        <img src={gauge} className="gauge"/>
        <Needle className="needle" style={{transform:`rotate(${ang}deg)`}}/>
        <Center className="center" />

        </div>
        <div className="speed">
            <span>{value}</span>
        </div>
        </div>

      
  
  )
}

export default Arc
