import React, { useState } from 'react'
import { useAuth } from '../context/authprovider'
import { game } from '../../../backend/model/game.model'
import { Link, useNavigate } from "react-router-dom"
import { MdOutlineMenu } from "react-icons/md";
import { IoIosCloseCircleOutline } from "react-icons/io";
function navbar() {

  const {games}=useAuth()
  console.log(games)
  const [show,setShow]= useState(false)
  return (
   <>
   <nav className='shadow-lg px-4 py-3'>
    
      <div className='flex justify-between items-center container mx-auto'>
        <div className='font-semibold text-xl'>
          Gamers<span className='text-blue-500'>Spot</span>
        </div>
        {/* Desktop */}
        <div className=''>
          <ul className='space-x-6 hidden md:flex'>
            <Link to="/"  className='hover:text-blue-800' >HOME</Link>
            <Link to="/games"  className='hover:text-blue-800'>GAMES</Link>
            <Link to="/creators" className='hover:text-blue-800'>CREATORS</Link>
            <Link to="/about" className='hover:text-blue-800'>ABOUT</Link>
            <Link to="/contact" className='hover:text-blue-800'>CONTACT</Link>
          </ul>
          <div className='md:hidden' onClick={()=>{setShow(!show)}}>{show ? <IoIosCloseCircleOutline size={24} />:<MdOutlineMenu size={24}/> }</div>
          </div>
        <div className='space-x-2 hidden md:flex'>
          <Link to="/dashboard" className='bg-blue-600 text-white font-semibold hover:bg-blue-800 duration-300 px-4 py-2 rounded'>DASHBOARD</Link>
          <Link to="/login" className='bg-red-600 text-white font-semibold hover:bg-red-800 duration-300 px-4 py-2 rounded'>LOGIN</Link>

        </div>
      </div>
      {/*Mobile  */}
       {show && (
        <div className='bg-white'>
        <ul className="flex flex-col h-screen items-center justify-center space-y-3 md:hidden text-xl">
        <Link to="/" onClick={()=>setShow(!show)} smooth="true" duration={500} offset={-70} activeclass="active"  className='hover:text-blue-800' >HOME</Link>
        <Link to="/games" onClick={()=>setShow(!show)} smooth="true" duration={500} offset={-70} activeclass="active"  className='hover:text-blue-800'>GAMES</Link>
        <Link to="/creators" onClick={()=>setShow(!show)} smooth="true" duration={500} offset={-70} activeclass="active" className='hover:text-blue-800'>CREATORS</Link>
        <Link to="/about" onClick={()=>setShow(!show)} smooth="true" duration={500} offset={-70} activeclass="active" className='hover:text-blue-800'>ABOUT</Link>
        <Link to="/contact" onClick={()=>setShow(!show)} smooth="true" duration={500} offset={-70} activeclass="active" className='hover:text-blue-800'>CONTACT</Link>
      </ul>
       </div>
       )}
    </nav>     
   </>
  )
}


export default navbar;