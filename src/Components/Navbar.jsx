import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'


const Navbar = () => {
  return (
    <div>
      <nav style={{ padding: '10px 20px', display: 'flex', justifyContent: 'space-evenly', flexWrap: 'wrap'}} className='bg-black text-white'>
        <NavLink className={(e) => e.isActive ? "bg-green-800 px-4 py-3" : "px-4 py-3"} to="/" >Home</NavLink>
        <NavLink className={(e) => e.isActive ? "bg-green-800 px-4 py-3" : "px-4 py-3"} to="/about" >About</NavLink>
        <NavLink className={(e) => e.isActive ? "bg-green-800 px-4 py-3" : "px-4 py-3"} to="/contect" >Contect</NavLink>
        <NavLink className={(e) => e.isActive ? "bg-green-800 px-4 py-3" : "px-4 py-3"} to="/user/Rajan">User</NavLink>
        <NavLink className={(e) => e.isActive ? "bg-green-800 px-4 py-3" : "px-4 py-3"} to="/class">Class</NavLink>
        <NavLink className={(e) => e.isActive ? "bg-green-800 px-4 py-3" : "px-4 py-3"} to="/textarea">text Area</NavLink>
        <NavLink className={(e) => e.isActive ? "bg-green-800 px-4 py-3" : "px-4 py-3"} to="/card">Cards</NavLink>
        <NavLink className={(e) => e.isActive ? "bg-green-800 px-4 py-3" : "px-4 py-3"} to="/memo">Memo</NavLink>
        <NavLink className={(e) => e.isActive ? "bg-green-800 px-4 py-3" : "px-4 py-3"} to="/practice">Practice</NavLink>
        <NavLink className={(e) => e.isActive ? "bg-green-800 px-4 py-3" : "px-4 py-3"} to="/refCase">UseRef</NavLink>
      </nav>
      <Outlet />
    </div>
  )
}

export default Navbar
