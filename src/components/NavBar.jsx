import React from 'react'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { FaBars, FaTimes } from 'react-icons/fa'
import { Link } from 'react-scroll'
import gbFlag from '../assets/gb.svg'
import frFlag from '../assets/fr.svg'

const NavBar = () => {

    const [t, i18n] = useTranslation("global")
    const handleChangeLanguage = (lng) => {
        i18n.changeLanguage(lng)
    }
    const [nav, setNav] = useState(false);

    const links = [
        {
            id: 1,
            link: t('NavBar.about'),
        },
        {
            id: 2,
            link: t('NavBar.projects'),
        },
        {
            id: 3,
            link: t('NavBar.technos'),
        },
        {
            id: 4,
            link: t('NavBar.contact'),
        }
    ]

  return (
    <div className='z-10 flex justify-between items-center w-full h-20 fixed bg-slate-950 text-gray-200 px-4 border-b-2 border-gray-300'>
        <div>
            <h1 className='sm:text-4xl ml-2 font-signature text-lg hover:text-yellow-600 hover:cursor-pointer hover:scale-105 duration-200'><Link to= {t('NavBar.home')} smooth={true} duration={500}> Florian Lefebvre </Link></h1>
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
        <div>
            <button onClick={() => handleChangeLanguage('en')} className='mx-2 font-medium hover:scale-105 duration-200'><img src={gbFlag} className='w-7' alt="English" /></button>
            <button onClick={() => handleChangeLanguage('fr')} className='mx-2 font-medium hover:scale-105 duration-200'><img src={frFlag} className='w-7' alt="French" /></button>
        </div>

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