import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FiPlusCircle } from 'react-icons/fi'
import { RxCrossCircled } from 'react-icons/rx'

const Navbar = ({setNewWorkout}) => {

  const [nav, setNav] = useState(true);

  return (
    <nav className='flex flex-row justify-between items-center px-3 bg-black text-white text-3xl w-screen h-16'>
      <Link to='/' className='font-semibold'>
          Lift Tracker
      </Link>
      {
        nav
        ?<button onClick={() => {setNewWorkout(true); setNav(!nav)}}><FiPlusCircle/></button>
        :<button onClick={() => {setNewWorkout(false); setNav(!nav)}}><RxCrossCircled/></button>
      }
    </nav>
  )
}

export default Navbar