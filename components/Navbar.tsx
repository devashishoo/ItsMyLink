import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div className='nav flex flex-row justify-between items-center py-3'>
      <ul className='flex flex-row'>
        <li>
          <Link href='/'>
            <a>Home</a>
          </Link>
        </li>
      </ul>
      <div className='px-4 py-2 bg-gray-900 text-white rounded-md'>
        <Link href='/preregister'>
          <a>Pre Register</a>
        </Link>
      </div>
    </div>
  )
}

export default Navbar
