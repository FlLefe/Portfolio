import React from 'react'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { FaBars, FaTimes } from 'react-icons/fa'
import { Link } from 'react-scroll'

const NavBar = () => {

    const [t, i18n] = useTranslation("global")
    const [nav, setNav] = useState(false);
    const [isChecked, setIsChecked] = useState(false);

    const toggleSwitch = () => {
        const language = isChecked ? "en" : "fr";
        setIsChecked(!isChecked);
        i18n.changeLanguage(language);
    };

    const links = [
        {
            id: 1,
            link: t('NavBar.home'),
        },
        {
            id: 2,
            link: t('NavBar.about'),
        },
        {
            id: 3,
            link: t('NavBar.projects'),
        },
        {
            id: 4,
            link: t('NavBar.technos'),
        },
        {
            id: 5,
            link: t('NavBar.contact'),
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
        <label className="inline-flex items-center cursor-pointer">
            <span className='mr-4'>EN</span>
            <input type="checkbox" onChange={toggleSwitch} className="sr-only peer" checked={isChecked}/>
            <div className="relative w-11 h-6 bg-gray-200 rounded-full dark:bg-blue-600 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300"></span>
            <span>FR</span>
        </label>

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