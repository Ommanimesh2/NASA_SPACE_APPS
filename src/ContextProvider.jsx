import React, { useState } from 'react'
import dataContext from './datacontext'
const ContextProvider = (props) => {
    const [globalData,setGlobalData]=useState([])

    
    
    
      return (
        <div>
          <dataContext.Provider value={{globalData,setGlobalData}} >
            {props.children}
          </dataContext.Provider>
        </div>
      )
    }
    
    export default ContextProvider
    