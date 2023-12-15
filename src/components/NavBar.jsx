import React from 'react'
import burgerMenu from '../assets/images/icon-menu.svg'

const NavBar = () => {
  return (
    <>
        <ul className='hidden sm:flex text-[18px] sm:w-[438px] sm:place-content-around sm:text-[16px] sm:items-center cursor-pointer'>
            <li><a className='hover:text-SoftOrange' href='#'>Home</a></li>
            <li><a className='hover:text-SoftOrange' href='#'>Popular</a></li>
            <li><a className='hover:text-SoftOrange' href='#'>Trending</a></li>
            <li><a className='hover:text-SoftOrange' href='#'>Categories</a></li>
        </ul>
        <img className='w-10 h-4 cursor-pointer sm:hidden' src={burgerMenu} alt="Menu Hamburguesa" />
    </>
  )
}

export default NavBar