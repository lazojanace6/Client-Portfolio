import React from 'react'
import { Icon } from '@iconify/react'; 
const TestimonialContainer :React.FC = () => {
  return (
    <div className=' bg-gradient-to-r from-[#00C853] p-3 rounded-lg via-[#4CAF50] to-[#00695C] min-w-[350px] '>
      <p className='text-white text-sm'>
       <div className='flex items-center gap-1'>
       <Icon icon='mdi:star' className='text-md  cursor-pointer text-white '/>
       <Icon icon='mdi:star' className='text-md  cursor-pointer text-white '/>
       <Icon icon='mdi:star' className='text-md  cursor-pointer text-white '/>
       <Icon icon='mdi:star' className='text-md  cursor-pointer text-white '/>
       <Icon icon='mdi:star' className='text-md  cursor-pointer text-white '/>
       </div>
          Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet,
        </p>
        <div className='mt-2 flex items-center gap-1'>
          <img className='rounded-full w-10 h-10' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4YreOWfDX3kK-QLAbAL4ufCPc84ol2MA8Xg&s" alt="" />
          <div className='text-sm text-white leading-4'>
            <h1>Customer 1</h1>
            <h1>Ceo</h1>
          </div>
        </div>
    </div>
  )
}

export default TestimonialContainer
