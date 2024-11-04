import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
    <div className='flex justify-around bg-white text-black my-4'>
        <NavLink to = "/Home" className=""><img src="/src/assets/frontendAssets/logo.svg" alt="can't load the image here" className='w-[80%]'/></NavLink>
        <div>
        <NavLink to = "/Home" className={(e) => `m-3 ${e.isActive? "underline decoration-blue":""}`}>Home</NavLink>
        <NavLink to = "/Doctor" className={(e) => `m-3 ${e.isActive? "underline decoration-blue":""}`}>All Doctors</NavLink>
        <NavLink to = "/About" className={(e) => `m-3 ${e.isActive? "underline decoration-blue ":""}`}>About</NavLink>
        <NavLink to = "/Contact" className={(e) => `m-3 ${e.isActive? "underline decoration-blue":""}`}>Contact</NavLink>
        <NavLink to = "/AdminPanel"><button className="m-3 border rounded-full border-black text-xs h-6 w-24 " >Admin Panel</button></NavLink>
        </div>
        <NavLink to = "/CreateAccount"><button className="mx-3 border rounded-full w-[160px] h-[40px] bg-blue text-white text-sm" >Create account</button></NavLink>
    </div>
    </>
  )
}

export default Navbar