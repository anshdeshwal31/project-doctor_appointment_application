import React from 'react'
import {createBrowserRouter , RouterProvider} from "react-router-dom"

import Navbar from './components/Navbar.jsx'
import Home from './pages/Home.jsx'
import Doctor from './pages/Doctor.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import CreateAccount from './pages/CreateAccount.jsx'
import AdminPanel from './pages/AdminPanel.jsx'

const App = () => {
  // return (
  //   <div className='bg-purple-500 text-gray-300'>App</div>
    const router = createBrowserRouter([
      {
        path: '/',
        element: <><Navbar/> <Home/></>
      },
      {
        path: '/Home',
        element: <><Navbar/> <Home/></>
      },
      {
        path: "/Doctor",
        element: <><Navbar/><Doctor/></>
      },
      {
        path: "/About",
        element: <><Navbar/><About/></>
      },
      {
        path: "/Contact",
        element: <><Navbar/> <Contact/></>
      },
      {
        path: "/AdminPanel",
        element: <><Navbar/> <AdminPanel/></>
      },
      {
        path: "/CreateAccount",
        element: <><Navbar/> <CreateAccount/></>
      },

    ])
  
    return(
      // <>
      <RouterProvider router={router}/>
      // </>
    )

}

export default App;