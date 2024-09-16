import React from 'react'
import Title from '../atoms/Title'
import project2 from "../../../assets/project2.png"
import project3 from "../../../assets/project3.png"
import project4 from "../../../assets/project4.png"
import { Icon } from '@iconify/react'; 
const Projects : React.FC = () => {
  return (
    <div className='h-[90%] flex gap-4 max-md:mt-[50%] max-lg:block'>
      <div className=' w-1/2 max-lg:w-full'>
        <Title title='Projects'/>
        <h1 className='text-5xl max-lg:text-xl'>My Lorem ipsum dolor <strong className='text-green'>consectetur</strong>  </h1>
        <p className='text-white2 mt-2 max-md:text-sm'>
             Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet,
               Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet,  
             </p>

             <div className='flex items-center gap-3 justify-end mt-5'>
             <Icon icon='teenyicons:arrow-left-solid' className='text-3xl cursor-pointer text-gray '/>
             <Icon icon='teenyicons:arrow-right-solid' className='text-3xl cursor-pointer text-gray '/>
             </div>
      </div>
      <div className=' w-full overflow-x-auto flex gap-2 max-lg:mt-5'>
       <img src={project4} className='min-w-[500px]  object-contain' />
       <img src={project2} className='min-w-[500px]  object-contain' />
       <img src={project3} className='min-w-[500px]  object-contain' />
       <img src={project4} className='min-w-[500px]  object-contain' />
       <img src={project2} className='min-w-[500px]  object-contain' />
       <img src={project3} className='min-w-[500px]  object-contain' />
      </div>
    </div>
  )
}

export default Projects
