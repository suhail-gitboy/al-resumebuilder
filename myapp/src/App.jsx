import { useEffect, useState } from 'react'
import {Toaster} from "sonner"
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button } from '@mui/material'
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { createBrowserRouter, RouterProvider } from 'react-router'
import Home from './assets/Home'
import Mainlayout from './layout/Mainlayout'
import Resume from './assets/pages/Resume'
import ResumeDashboard from './assets/pages/Dashboard'

import { grey } from '@mui/material/colors'
import ViewPage from './assets/pages/View'
import Previewpage from './assets/pages/Previewpage'
import Protuctedroute from './assets/pages/Protuctedroute'




function App() {
const [name,Setunsername]=useState(null)
  const router=createBrowserRouter([
    {
      path:"/",element:<Mainlayout name={name}  Setunsername={Setunsername}/>,children:[
        {
          path:"/",element:<Home  />
        },{
          path:"/generate",element:<Resume name={name} />
        },{
          path:"/dashboard",element:(<Protuctedroute> <ResumeDashboard/></Protuctedroute> )
        },{
          path:"/view/:id",element:<ViewPage/>
        },
        {path:"/preview/:id",element:<Previewpage/>}
      ]
    }
  ])

  return (
<>
    <RouterProvider router={router} />
    <Toaster position='top-center'/>
    
</>
  )
}

export default App
