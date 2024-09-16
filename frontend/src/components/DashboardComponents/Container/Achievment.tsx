import React from 'react'
import CardAchievement from '../atoms/CardAchievement'
import Title from '../atoms/Title'
const Achievment  : React.FC= () => {
  return (
    <div id='projects' className='h-[60%] w-full max-md:mt-[160%] max-lg:mt-[30%] max-2xl:mb-[10%]'>
     <div>
        <Title title='Achievements'/>
     </div>
     <div className='flex items-center justify-center gap-6 mt-5 
     max-2xl:overflow-x-auto max-lg:justify-start'>
      <CardAchievement/>
      <CardAchievement/>
      <CardAchievement/>
      <CardAchievement/>
      <CardAchievement/>
      <CardAchievement/>
     </div> 
    </div>
  )
}

export default Achievment
