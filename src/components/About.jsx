import React from 'react'

function About() {
  return (
    <div name="about" className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
        <div className='max-w-screen-lg px-4 py-20 mx-auto flex flex-col justify-center w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-400'>About</p>
            </div>
            <p className='text-xl mt-20'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa dicta, dolorem fuga tempora harum illo. Dignissimos consequatur expedita architecto numquam quae facere officiis, voluptate repellat reprehenderit quaerat nesciunt ab odio molestiae quam tempora corrupti eius labore aliquid ullam quia? Nesciunt, quasi unde velit vel eaque veritatis aliquid ab exercitationem hic!</p>
            <br />
            <p className='text-xl'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque hic iusto amet minima labore quo libero voluptas blanditiis beatae maxime. Dicta pariatur nulla deleniti inventore repudiandae suscipit, voluptatum ipsa minus a, similique impedit velit ex officia quas nostrum eos voluptatibus debitis fugiat repellat accusantium cumque? Quidem asperiores a animi dolorem!</p>
        </div>
    </div>
  )
}

export default About