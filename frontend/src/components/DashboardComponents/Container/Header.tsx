import React from 'react'

const Header : React.FC = () => {
  return (
    <div className='flex items-center justify-between w-full m-auto'>
       <h1 className='text-green font-semibold text-2xl'>
        Julienne
       </h1>
        <div className='flex items-center gap-3 font-gray max-md:hidden'>
            <button >About</button>
            <button>Projects</button>
            <button>Testimonials</button>
            <button>Experience</button>
            <button>Contact</button>
        </div>
        <button className='bg-green text-white p-2 rounded-full text-sm'>
            Download CV
        </button>
    </div>
  )
}

export default Header
