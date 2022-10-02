import React, { useContext } from 'react'
import dataContext from '../../datacontext'
import './slidingbtns.css'
const DashToggle = () => {
    const {showDashboard,setShowDashboard}=useContext(dataContext)
    const handleClick = () =>{
        showDashboard ? setShowDashboard(false):setShowDashboard(true)
    }
  return (

            <div className="switch-toggle">
                <input onClick={handleClick} type="checkbox" id="bluetooth"/>
                <label for="bluetooth"></label>
            </div>

  )
}

export default DashToggle
