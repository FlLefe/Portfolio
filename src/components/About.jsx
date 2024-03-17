import React from 'react'

function About() {
  return (
    <div name="about" className='w-full sm:h-screen bg-gradient-to-b from-slate-800 via-slate-900 to-slate-950 text-white px-12 py-20'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-400'>About</p>
            </div>
            <p className='text-xl mt-20'>After being made redundant while working in a management position in the retail sector, I decided, with the unconditional help of my close friends, to seize the opportunity and launch myself into web development. I'd always been attracted to the web, but had never taken the plunge. Now, here I am!</p>
            <br />
            <p className='text-xl'>I'm a motivated, proactive person, someone you can count on. I'm curious, and above all, I'm a try harder. If I don't have the skills, then I'll work to acquire them, you can be sure of that. </p>
            <br />
            <p className='text-xl'>Having managed a small team, I know how to listen and work as part of a group. I'm not the most talkative person, but I step in when I have to. So why not get in touch if my profile interests you? All I need is one small opportunity to prove my worth to you! </p>
        </div>
    </div>
  )
}

export default About