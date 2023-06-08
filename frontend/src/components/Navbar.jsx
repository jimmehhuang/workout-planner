import React from 'react'
import { Link } from 'react-router-dom'
import { FiPlusCircle } from 'react-icons/fi'

const Navbar = () => {
  return (
    <nav className='flex flex-row justify-between items-center px-3 bg-black text-white text-3xl w-screen h-16'>
      <Link to='/' className='font-semibold'>
          Lift Tracker
      </Link>
      <button className='pr-2'>
        <FiPlusCircle/>
      </button>
    </nav>
  )
}

export default Navbar