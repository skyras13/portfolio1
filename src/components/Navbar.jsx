import { useState } from 'react'
import { Link } from 'react-router-dom'
import { close, logo, menu } from '../assets'

import { navLinks } from '../constants'

const Navbar = () => {
  const [toggle, setToggle] = useState(false)

  return (
    <nav className='w-full flex py-6 justify-between items-center navbar'>
      <h1 className='flex-1 font-poppings font-semibold ss:text-[24px] text-[52px] animated-text'>
        Skyras13Software*
      </h1>

      <ul className='list-none sm:flex hidden justify-end items-center flex-1'>
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[16px] text-white
                        ${index === navLinks.length - 1 ? 'mr-0' : 'mr-10'}`}>
            <Link to={`/${nav.id}`}>{nav.title}</Link>
          </li>
        ))}
      </ul>

      <div className='sm:hidden flex flex-1 justify-end items-center'>
        <img
          src={toggle ? close : menu}
          alt='menu'
          className='w-[28px] h-[28px] object-contain'
          onClick={() => setToggle((prev) => !prev)}
        />

        <div
          className={`${
            toggle ? 'flex' : 'hidden'
          } p-6 bg-black-gradient absolute top-20 
                right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}>
          <ul className='list-none flex flex-col justify-end items-center flex-1'>
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-normal cursor-pointer text-[16px] text-white
                                ${
                                  index === navLinks.length - 1
                                    ? 'mb-0'
                                    : 'mb-4'
                                }`}>
                <Link to={`/${nav.id}`}>{nav.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
