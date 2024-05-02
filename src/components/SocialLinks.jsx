import React from 'react'
import { FaGithub, FaLinkedin  } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import { useTranslation } from 'react-i18next'

const SocialLinks = () => {

    const [t] = useTranslation("global")

    const links = [
        {
            id: 1,
            child:(
                <>
                    GitHub <FaGithub size={30}/>
                </>
            ),
            href: 'https://github.com/FlLefe',
            style: 'rounded-tr-md'
        },
        {
            id: 2,
            child:(
                <>
                    LinkedIn <FaLinkedin size={30}/>
                </>
            ),
            href: 'https://www.linkedin.com/in/lefebvre-florian/',
        },
        {
            id: 3,
            child:(
                <>
                    Email <HiOutlineMail size={30}/>
                </>
            ),
            href: 'mailto:lefebvre.florian9@gmail.com'
        },
        {
            id: 4,
            child:(
                <>
                    {t('global.Socials.resume')} <BsFillPersonLinesFill size={30}/>
                </>
            ),
            href: 'resume.pdf',
            style: 'rounded-br-md',
        }
    ]



  return (
    <div className='hidden md:flex flex-col top-[35%] left-0 fixed'>
        <ul>

            {links.map(({id, href, style, child}) => (
                <li key={id} className={`flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] bg-gray-700 hover:rounded-md duration-300 ${style}`}>
                    <a href={href} className='flex justify-between items-center w-full text-white' target='_blank'>
                        {child}
                    </a>
                </li>
            ))}

        </ul>
    </div>
  )
}

export default SocialLinks