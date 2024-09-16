import React from 'react'
import CardAchievement from '../atoms/CardAchievement'
import Title from '../atoms/Title'
const Achievment  : React.FC= () => {
  return (
    <div className='h-[60%] w-full max-md:mt-[110%] max-lg:mt-[20%]'>
     <div>
        <Title title='Achievements'/>
     </div>
     <div className='flex items-center justify-center gap-6 mt-5 
     max-lg:overflow-x-auto max-lg:justify-start'>
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
