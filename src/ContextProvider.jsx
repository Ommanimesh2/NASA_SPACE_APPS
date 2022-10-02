import React, { useState } from 'react'
import dataContext from './datacontext'
const ContextProvider = (props) => {
    const [globalData,setGlobalData]=useState([])
    const [on,setOn]=useState(false)
    const [showDashboard,setShowDashboard]=useState(false)
    const [showMagneticField,setShowMagneticField]=useState(false)
    const [song,setSong]=useState(false)

    
    
    
      return (
        <div>
          <dataContext.Provider value={{globalData,setGlobalData,on,setOn,showDashboard,setShowDashboard,showMagneticField,setShowMagneticField,song,setSong}} >
            {props.children}
          </dataContext.Provider>
        </div>
      )
    }
    
    export default ContextProvider
    