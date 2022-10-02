import React from 'react'
import { useContext } from 'react'
import dataContext from './datacontext'
const Overlay = () => {
    const {globalData,setGlobalData}=useContext(dataContext)
    
    const lineStyle={
        marginTop: `${80-(globalData.B/5)}px`,
        color:"white"
    }
      return (
    <div className='overlay'>
      
      <hr style={lineStyle} className="lines" />
      <hr style={lineStyle} className="lines" />
      <hr style={lineStyle} className="lines" />
      <hr style={lineStyle} className="lines" />
      <hr style={lineStyle} className="lines" />
      <hr style={lineStyle} className="lines" />
      <hr style={lineStyle} className="lines" />
      <hr style={lineStyle} className="lines" />
      <hr style={lineStyle} className="lines" />
      <hr style={lineStyle} className="lines" />
      <hr style={lineStyle} className="lines" />
      <hr style={lineStyle} className="lines" />
      <hr style={lineStyle} className="lines" />
      <hr style={lineStyle} className="lines" />
      <hr style={lineStyle} className="lines" />
      <hr style={lineStyle} className="lines" />
      <hr style={lineStyle} className="lines" />
      <hr style={lineStyle} className="lines" />
      <hr style={lineStyle} className="lines" />
      <hr style={lineStyle} className="lines" />
      <hr style={lineStyle} className="lines" />
      <hr style={lineStyle} className="lines" />
      <hr style={lineStyle} className="lines" />
      <hr style={lineStyle} className="lines" />
      <hr style={lineStyle} className="lines" />
      <hr style={lineStyle} className="lines" />
      <hr style={lineStyle} className="lines" />
      <hr style={lineStyle} className="lines" />
      <hr style={lineStyle} className="lines" />
      <hr style={lineStyle} className="lines" />
      <hr style={lineStyle} className="lines" />
      <hr style={lineStyle} className="lines" />
      <hr style={lineStyle} className="lines" />
      <hr style={lineStyle} className="lines" />
      <hr style={lineStyle} className="lines" />
      <hr style={lineStyle} className="lines" />
      <hr style={lineStyle} className="lines" />
      <hr style={lineStyle} className="lines" />
      <hr style={lineStyle} className="lines" />
      <hr style={lineStyle} className="lines" />
      <hr style={lineStyle} className="lines" />
      <hr style={lineStyle} className="lines" />
      <hr style={lineStyle} className="lines" />
      <hr style={lineStyle} className="lines" />
      <hr style={lineStyle} className="lines" />
      <hr style={lineStyle} className="lines" />
      <hr style={lineStyle} className="lines" />
      <hr style={lineStyle} className="lines" />
      <hr style={lineStyle} className="lines" />
      <hr style={lineStyle} className="lines" />
      <hr style={lineStyle} className="lines" />
      <hr style={lineStyle} className="lines" />
      <hr style={lineStyle} className="lines" />
      <hr style={lineStyle} className="lines" />
      <hr style={lineStyle} className="lines" />
      <hr style={lineStyle} className="lines" />
      <hr style={lineStyle} className="lines" />
      <hr style={lineStyle} className="lines" />
      <hr style={lineStyle} className="lines" />
      <hr style={lineStyle} className="lines" />
      <hr style={lineStyle} className="lines" />
      <hr style={lineStyle} className="lines" />
      <hr style={lineStyle} className="lines" />
      <hr style={lineStyle} className="lines" />
      <hr style={lineStyle} className="lines" />
      <hr style={lineStyle} className="lines" />
      <hr style={lineStyle} className="lines" />
      <hr style={lineStyle} className="lines" />
      <hr style={lineStyle} className="lines" />
      <hr style={lineStyle} className="lines" />
      <hr style={lineStyle} className="lines" />
      <hr style={lineStyle} className="lines" />
      <hr style={lineStyle} className="lines" />
      <hr style={lineStyle} className="lines" />
      <hr style={lineStyle} className="lines" />
      <hr style={lineStyle} className="lines" />
      <hr style={lineStyle} className="lines" />
    </div>
  )
}

export default Overlay
