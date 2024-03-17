import React from 'react'
import Infinity from '../assets/portfolio/Infinity-quiz.webp'
import Creatopia from '../assets/portfolio/Creatopia.png'
import GereTaThune from '../assets/portfolio/GereTaThune.webp'

function Projects() {

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
    <div name="projects" className='bg-gradient-to-b from-slate-950 via-slate-900 to-slate-800 w-full text-white sm:h-screen px-12 pt-20' >

        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full items-center sm:items-start sm:pt-36 md:pt-4'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500 '>Projects</p>
                <p className='py-6'>Check out some of my work right here</p>
            </div>

            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
            {projects.map(({id, src, href, github}) => (
                    <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
                        <img onClick={() => window.open(href, "_blank") } src={src} alt="Projet Infinity" className='rounded-md duration-200 hover:scale-105 w-full h-3/4 object-cover hover:cursor-pointer' />
                        <div className='h-1/4 flex items-center justify-center'>
                            <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 hover:text-orange-300'>Details</button>
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