import React, { useContext, useEffect } from 'react'
import { useOutletContext } from 'react-router'

const Protuctedroute = ({children}) => {
   const {name,Setmodallogin}=useOutletContext()

   useEffect(()=>{
    if(!name){
Setmodallogin(true)
    }
   },[])
    return children
}

export default Protuctedroute
