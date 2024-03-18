import React from 'react'
import ProfilePicture from '../assets/computer.webp'
import { MdKeyboardArrowRight } from "react-icons/md";
import { Link } from 'react-scroll'
import { useTranslation } from 'react-i18next'

const Home = () => {

    const [t] = useTranslation("global")

  return (
    <div name={t('Home.name')} className='sm:h-screen w-full bg-gradient-to-b from-slate-900 via-slate-950 to-slate-800 text-white px-12 pt-24'>
        <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center sm:h-full px-4 md:flex-row'>
            <div className='flex flex-col justify-center items-center sm:items-start h-full'>
                <h2 className='text-4xl sm:text-5xl font-bold text-white'>{t('Home.title')}</h2>
                <p className='text-gray-400 py-4 max-w-md'>
                {t('Home.p')}
                </p>
                <div>
                    <Link to='projects' smooth={true} duration={500} className='group text-white w-fit px-6 py-3 my-2 flex items-center font-bold rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer hover:text-orange-300'>
                        {t('Home.link')}
                        <span className='group-hover:rotate-90 duration-300 '>
                            <MdKeyboardArrowRight size={22} className='ml-1'/>
                        </span>
                    </Link>
                </div>
            </div>
            <div className='pt-8 flex items-center justify-end'>
                <img src={ProfilePicture} alt="profile" className=' w-2/3 max-w-96 rounded-md md:w-full'/>
            </div>
        </div>
    </div>
  )
}

export default Home