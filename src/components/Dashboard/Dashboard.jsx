import React, { useContext } from 'react'
import dataContext from '../../datacontext'
import './dashboard.css'
const Dashboard = () => {
  const {globalData,setGlobalData}=useContext(dataContext)
  return (
    <div className='dashboard'>
      <div className="image">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgOXmzV8KmE5tPvOJYetekhUqbqX68Cqp9IvG2x_W-&s" alt="" />
      </div>
    <div className="detailgrid">
       B
      <div className="B">{globalData.B}</div>
      Time
      <div className="Time">{globalData.Time}</div>
      flowlon
      <div className="flowlon">{globalData.flowlon}</div>
      heliographicLatitude
      <div className="heliographicLatitude">{globalData.heliographicLatitude}</div>
      heliographicLongitude
      <div className="heliographicLongitude">{globalData.heliographicLongitude}</div>
      protonDensity
      <div className="protonDensity">{globalData.protonDensity}</div>
      protonSpeed
      <div className="protonSpeed">{globalData.protonSpeed}</div>
      protonTemp
      <div className="protonTemp">{globalData.protonTemp}</div>
      radialDistance
      <div className="radialDistance">{globalData.radialDistance}</div>

  
    </div>
    </div>
    
  )
}

export default Dashboard
