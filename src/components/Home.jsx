import React from 'react'
import ProfilePicture from '../assets/computer.webp'
import { MdKeyboardArrowRight } from "react-icons/md";
import { Link } from 'react-scroll'

const Home = () => {
  return (
    <div name="home" className='h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 text-white'>
        <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
            <div className='flex flex-col justify-center h-full'>
                <h2 className='text-4xl sm:text-5xl font-bold text-white'>I'm a Full Stack Developper</h2>
                <p className='text-gray-400 py-4 max-w-md'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore numquam exercitationem libero laboriosam maiores dolores tenetur! Tenetur fugiat odio architecto.
                </p>
                <div>
                    <Link to='projects' smooth={true} duration={500} className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer'>
                        Projects
                        <span className='group-hover:rotate-90 duration-300'>
                            <MdKeyboardArrowRight size={22} className='ml-1'/>
                        </span>
                    </Link>
                </div>
            </div>
            <div>
                <img src={ProfilePicture} alt="profile" className='mx-auto w-2/3 max-w-96 rounded-md md:w-full'/>
            </div>
        </div>
    </div>
  )
}

export default Home