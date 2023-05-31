import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='m-4'>
        <Link to='/' className='font-bold text-'>
            Workout Tracker
        </Link>
    </div>
  )
}

export default Navbar