import React from 'react'
import { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import { Link } from 'react-scroll'

const NavBar = () => {

    const [nav, setNav] = useState(false);

    const links = [
        {
            id: 1,
            link: 'home',
        },
        {
            id: 2,
            link: 'about',
        },
        {
            id: 3,
            link: 'projects',
        },
        {
            id: 4,
            link: 'technos',
        },
        {
            id: 5,
            link: 'contact',
        }
    ]

  return (
    <div className='z-10 flex justify-between items-center w-full h-20 fixed bg-slate-950 text-gray-200 px-4 border-b-2 border-gray-300'>
        <div>
            <h1 className='sm:text-4xl ml-2 font-signature text-lg'>Florian Lefebvre</h1>
        </div>
        <ul className='hidden md:flex'>
            {links.map(({id, link}) => {
                return (
                    <li key={id} className='px-4 cursor-pointer capitalize text-gray-300 font-medium hover:scale-105 hover:text-yellow-600 duration-200'>
                        <Link to={link} smooth={true} duration={500}> {link} </Link>
                    </li>
                )})        
            }            
        </ul>

        <div onClick={() => setNav(!nav)} className='cursor-pointer pr-4 z-10 md:hidden text-3xl'>
            {nav ? <FaTimes size={30}/> : <FaBars size={30}/>}
        </div>

        {nav && (
            <ul className='flex flex-col justify-center items-center absolute top-20 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800'>
                {links.map(({id, link}) => {
                    return (
                        <li key={id} className='px-4 cursor-pointer capitalize py-6 text-4xl text-gray-300'>
                            <Link onClick={() => setNav(!nav)} to={link} smooth={true} duration={500}> {link} </Link>
                        </li>
                    )})        
                }
            </ul>
        )}

        
    </div>
  )
}

export default NavBar