import React from 'react'
import Title from '../atoms/Title'
import { Icon } from '@iconify/react'; 
import TestimonialContainer from '../atoms/TestimonialContainer';
const Reviews :React.FC = () => {
  return (
    <div className='w-full max-md:mt-[100%] h-[60%] max-lg:mt-[20%]' id='testimonials'>
      <div className='flex items-center justify-center'>
      <div className=' w-1/2 max-lg:w-full'>
        <Title title='Reviews'/>
        <h1 className='text-5xl max-lg:text-xl'>My Lorem ipsum dolor <strong className='text-green'>consectetur</strong>  </h1>
      </div>
      <div className='flex items-center gap-3 justify-end mt-5 w-1/2'>
             <Icon icon='teenyicons:arrow-left-solid' className='text-3xl cursor-pointer text-gray '/>
             <Icon icon='teenyicons:arrow-right-solid' className='text-3xl cursor-pointer text-gray '/>
     </div>
      </div>

      <div className="flex items-center gap-3 overflow-x-auto justify-start mt-5">
      <TestimonialContainer/>
      <TestimonialContainer/>
      <TestimonialContainer/>
      <TestimonialContainer/>
      <TestimonialContainer/>
      <TestimonialContainer/>
      <TestimonialContainer/>
      <TestimonialContainer/>
      </div>
    </div>
  )
}

export default Reviews
