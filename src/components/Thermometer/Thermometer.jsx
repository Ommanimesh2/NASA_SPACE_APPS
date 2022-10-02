import React from 'react'
import dataContext from '../../datacontext'
import { useContext } from 'react'
import './thermometer.css'

const Thermometer = () => {
    const {globalData}=useContext(dataContext)
    var styles = document.createElement('style');
    styles.type = 'text/css';
    var keyFrames =`
    @keyframes heat {
        from{
            height: 100px;
            background-color: rgb(80,10,10);
            box-shadow:
            inset 22px 0 0 rgba(5,15,25,.15),
            inset -6px 0 0 rgba(255,255,255,.1);
        }
        to{
            height: ${globalData.protonTemp ? globalData.protonTemp: 300}px;
            background-color: rgb(180,10,10);
            box-shadow:
            inset 22px 0 0 rgba(5,15,25,.15),
            inset -6px 0 0 rgba(255,255,255,.1),
            0 0 5px rgb(255,255,255),
            0 0 20px rgb(255,0,0);
        }
    }
    `
  return (
    //max is 10705
<main style={styles} className='thermo'>

    <div className="thermometer-wrapper">
        <div className="thermometer-rule">
            <span className="thermometer-rule-steps"></span>
            <span className="thermometer-rule-steps"></span>
            <span className="thermometer-rule-steps"></span>
            <span className="thermometer-rule-steps"></span>
            <span className="thermometer-rule-steps"></span>
            <span className="thermometer-rule-steps"></span>
            <span className="thermometer-rule-steps"></span>
        </div>
        <div className="thermometer-liquid anim-heat"></div>
        <div className="thermometer-base"></div>
    </div>
</main>
  )
}

export default Thermometer
