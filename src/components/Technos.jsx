import React from 'react'
import html from '../assets/technos/html.png'
import css from '../assets/technos/css.png'
import javascript from '../assets/technos/javascript.png'
import reactJs from '../assets/technos/react.png'
import nodeJs from '../assets/technos/node-js.png'
import postgres from '../assets/technos/postgres.png'
import tailwind from '../assets/technos/tailwind.svg'
import github from '../assets/technos/github.png'
import sql from '../assets/technos/sql.png'

function Technos() {

    const technologies = [
        {
            id:1,
            src: html,
            title: 'HTML',
            style: 'shadow-orange-500'
        },
        {
            id:2,
            src: css,
            title: 'CSS',
            style: 'shadow-blue-500'
        },
        {
            id:3,
            src: javascript,
            title: 'JavaScript',
            style: 'shadow-yellow-500'
        },
        {
            id:4,
            src: sql,
            title: 'SQL',
            style: 'shadow-blue-500'
        },
        {
            id:5,
            src: nodeJs,
            title: 'NodeJS',
            style: 'shadow-green-500'
        },
        {
            id:6,
            src: postgres,
            title: 'PostgreSQL',
            style: 'shadow-blue-700'
        },
        {
            id:7,
            src: github,
            title: 'GitHub',
            style: 'shadow-gray-500'
        },
        {
            id:8,
            src: tailwind,
            title: 'TailwindCSS',
            style: 'shadow-cyan-500'
        },
        {
            id:9,
            src: reactJs,
            title: 'ReactJS',
            style: 'shadow-blue-300'
        },
    ]

  return (
    <div name="technos" className='bg-gradient-to-b from-slate-800 via-slate-900 to-slate-950 w-full sm:h-screen px-12 pt-20 sm:pt-60 md:pt-0'>
        <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full text-white'>
            <div>
                <p className='text-4xl font-bold border-b-4 border-gray-500 p-2 inline'>Experience</p>
                <p className='py-6'>These are the technologies I've worked with</p>
            </div>
            <div className='w-full grid grid-cols-1 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>
                {technologies.map(({id, src, title, style}) => (
                    <div key={id} className={`shadow-md hover:scale-105 duration-500 py-4 rounded-lg ${style}`}>
                        <img src={src} alt={title} className='w-20 h-20 mx-auto'/>
                        <p className='mt-4'>{title}</p>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Technos