import React from 'react'

const Footer : React.FC = () => {
  return (
    <div className='h-[5%]'>
      <hr className='text-green text-opacity-90'/>
      <div className='flex items-center justify-between mt-2 max-md:block max-md:text-center max-md:text-sm'>
        <h1 className='text-white2'>2024 All rights reserved</h1>
        <h1 className='text-white2 '>Designed by Julienne</h1>
      </div>
    </div>
  )
}

export default Footer
