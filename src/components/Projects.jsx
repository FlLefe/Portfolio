import React from 'react'
import { useTranslation } from 'react-i18next'
import Infinity from '../assets/portfolio/Infinity-quiz.webp'
import Creatopia from '../assets/portfolio/Creatopia.png'
import GereTaThune from '../assets/portfolio/GereTaThune.webp'

function Projects() {

    const [t] = useTranslation("global")

    const projects = [
        {
            id: 1,
            src: Infinity,
            href: 'https://infinity-quiz.me',
            github: 'https://github.com/FlLefe/Infinity-Quiz'
        },
        {
            id: 2,
            src: GereTaThune,
            href: 'https://github.com/FlLefe/GereTaThune',
            github: 'https://github.com/FlLefe/GereTaThune'
        },
        {
            id: 3,
            src: Creatopia,
            href: '',
            github: ''
        }
    ]

  return (
    <div name={t('Projects.name')} className='bg-gradient-to-b from-slate-950 via-slate-900 to-slate-800 w-full text-white sm:h-screen px-12 pt-20' >

        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full items-center sm:items-start sm:pt-36 md:pt-4'>
            <div className='pb-8'>
                <h2 className='text-4xl font-bold inline border-b-4 border-gray-500 '>{t('Projects.title')}</h2>
                <p className='py-6'>{t('Projects.p')}</p>
            </div>

            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
            {projects.map(({id, src, href, github}) => (
                    <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
                        <img onClick={() => window.open(href, "_blank") } src={src} alt="Projet Infinity" className='rounded-md duration-200 hover:scale-105 w-full h-3/4 object-cover hover:cursor-pointer' />
                        <div className='h-1/4 flex items-center justify-center'>
                            <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 hover:text-orange-300'>{t('Projects.link')}</button>
                            <button onClick={() => window.open(github, "_blank") }  className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 hover:text-orange-300'>Code</button>
                        </div>
                    </div>
            ))}
            </div>

        </div>

    </div>
  )
}

export default Projects