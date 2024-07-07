import { Navbar } from 'flowbite-react'
import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <Navbar className='border-b-2'>
        <Link to={'/'} className='self-center'>
            <span className='mr-2'>Alok's</span> 
            Blog
        </Link>
    </Navbar>
  )
}

export default Header
