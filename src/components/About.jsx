import React from 'react'
import { useTranslation } from 'react-i18next'

function About() {

    const [t] = useTranslation("global")

  return (
    <div name={t('global.About.name')} className='w-full sm:h-screen bg-gradient-to-b from-slate-800 via-slate-900 to-slate-950 text-white px-12 py-20 pt-32 sm:pt-52 md:pt-20'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full'>
            <div className='pb-8'>
                <h2 className='text-4xl font-bold inline border-b-4 border-gray-400'>{t('global.About.title')}</h2>
            </div>
            <p className='text-xl mt-20'>{t('global.About.p1')}</p>
            <br />
            <p className='text-xl'>{t('global.About.p2')}</p>
            <br />
            <p className='text-xl'>{t('global.About.p3')}</p>
        </div>
    </div>
  )
}

export default About