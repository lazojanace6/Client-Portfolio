import React from 'react'

const Header : React.FC = () => {
  return (
    <div className='flex items-center justify-between w-full m-auto'>
       <h1 className='text-green font-semibold text-2xl'>
        Julienne
       </h1>
        <div className='flex items-center gap-3 font-gray max-md:hidden'>
            <a href='#about'>About</a>
            <a href='#projects'>Projects</a>
            <a href='#testimonials'>Testimonials</a>
            <a href='#experience'>Experience</a>
            <a href='#contact'>Contact</a>
        </div>
        <button className='bg-green text-white p-2 rounded-full text-sm hover:bg-opacity-90'>
            Download CV
        </button>
    </div>
  )
}

export default Header
