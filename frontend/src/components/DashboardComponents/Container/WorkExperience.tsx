import React from 'react'
import CardWorkExp from '../atoms/CardWorkExp'
import Title from '../atoms/Title'
import { Icon } from '@iconify/react'; 

const WorkExperience : React.FC = () => {
  return (
    <div id='experience' className='h-[30%] max-md:mt-[60%] max-lg:mt-[20%]'>
     <Title title='Work Experience'/>
     <div className='flex gap-2 mt-3 items-center max-lg:block'>
     <CardWorkExp data={"test"}/> 
     <Icon icon='ep:arrow-right' className='text-3xl text-gray max-lg:hidden'/>
     <CardWorkExp data={"test"}/> 
     <Icon icon='ep:arrow-right' className='text-3xl text-gray max-lg:hidden'/>
     <CardWorkExp data={"test"}/> 
     </div>
    </div>
  )
}

export default WorkExperience
