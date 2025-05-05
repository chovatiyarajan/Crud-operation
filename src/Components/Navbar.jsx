  import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'


const Navbar = () => {
  return (
    <div>
      <nav style={{ padding: '10px 20px', display: 'flex', justifyContent: 'space-evenly', flexWrap: 'wrap'}} className='bg-black text-white'>
        <NavLink className={(e) => e.isActive ? "bg-green-800 px-4 py-3" : "px-4 py-3"} to="/" >To do Task</NavLink>
        <NavLink className={(e) => e.isActive ? "bg-green-800 px-4 py-3" : "px-4 py-3"} to="/about" >About</NavLink>
        <NavLink className={(e) => e.isActive ? "bg-green-800 px-4 py-3" : "px-4 py-3"} to="/contect" >Contect</NavLink>
        <NavLink className={(e) => e.isActive ? "bg-green-800 px-4 py-3" : "px-4 py-3"} to="/user/Rajan">User</NavLink>
        <NavLink className={(e) => e.isActive ? "bg-green-800 px-4 py-3" : "px-4 py-3"} to="/class">Class</NavLink>
        <NavLink className={(e) => e.isActive ? "bg-green-800 px-4 py-3" : "px-4 py-3"} to="/textarea">text Area</NavLink>
        <NavLink className={(e) => e.isActive ? "bg-green-800 px-4 py-3" : "px-4 py-3"} to="/card">Cards</NavLink>
        <NavLink className={(e) => e.isActive ? "bg-green-800 px-4 py-3" : "px-4 py-3"} to="/memo">Memo</NavLink>
        <NavLink className={(e) => e.isActive ? "bg-green-800 px-4 py-3" : "px-4 py-3"} to="/practice">Practice</NavLink>
        <NavLink className={(e) => e.isActive ? "bg-green-800 px-4 py-3" : "px-4 py-3"} to="/refCase">UseRef</NavLink>
        <NavLink className={(e) => e.isActive ? "bg-green-800 px-4 py-3" : "px-4 py-3"} to="/promise">Promise</NavLink>
        <NavLink className={(e) => e.isActive ? "bg-green-800 px-4 py-3" : "px-4 py-3"} to="/reducer">useReducer</NavLink>
        <NavLink className={(e) => e.isActive ? "bg-green-800 px-4 py-3" : "px-4 py-3"} to="/tododata">All Data</NavLink>
      </nav>
      <Outlet />
    </div>
  )
}

export default Navbar
