import React from 'react'
import { useTranslation } from 'react-i18next'

function Contact() {

    const [t] = useTranslation("global")

  return (
    <div name={t('Contact.name')} className='w-full bg-gradient-to-b from-slate-950 via-slate-900 to-slate-800 p-4 m:h-screen text-white px-12 pt-20 sm:pt-72 md:pt-20'>
        <div className='flex flex-col p-4 justify-center max-w-screen-lg mx-auto '>
            <div className='pb-8'>
                <h2 className='text-4xl font-bold inline border-b-4 border-gray-500'>Contact</h2>
                <p className='py-6'>{t('Contact.p')}</p>
            </div>
            <div className='flex justify-center items-center'>
                <form action="https://getform.io/f/raegqdpa" className='flex flex-col w-full md:w-1/2' method='POST' >
                    <input type="hidden" name='_gotcha' style={{ display: 'none' }} />
                    <input type="text" name="name" placeholder={t('Contact.placeholder.name')} className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'/>
                    <input type="text" name="email" placeholder={t('Contact.placeholder.email')} className='my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'/>
                    <textarea name="message" placeholder={t('Contact.placeholder.message')} rows="10" className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'></textarea>
                    <button className='text-white bg-gradient-to-b font-bold from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-200 hover:text-orange-300'>
                        {t('Contact.button')}
                    </button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact