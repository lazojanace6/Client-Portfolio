import React from 'react'
import Title from '../atoms/Title'
import IconsButton from '../atoms/IconsButton'
import pic from "../../../assets/pic.png"
const Hero : React.FC = () => {
  return (
    <div className='w-full h-[90%] flex  max-lg:flex-col-reverse   max-lg:mt-[10%] items-center justify-center'>
      <div className='w-1/2   h-[60%] max-lg:w-full'>
       <Title title={"Welcome"}/>
        <h1 className='text-5xl max-lg:text-4xl max-md:text-xl'>Lorem ipsum dolor sit amet,
             <strong className='text-green'>consectetur</strong> Lorem ipsum dolor sit amet, 
             Lorem ipsum dolor sit amet</h1>
             <p className='text-white2 mt-2 max-md:text-sm'>
             Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet,
               Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet,  
             </p>
             <div className='mt-2 flex items-center gap-2'>
          <IconsButton type='ic:outline-facebook'/>
          <IconsButton type='mdi:instagram'/>
          <IconsButton type='mdi:linkedin'/>
          <IconsButton type='mingcute:messenger-fill'/>
             </div>
      </div>
      <div className='w-[40%] h-[60%] rounded-lg flex max-lg:justify-center justify-end max-lg:w-full '>
       <img src={pic} alt="image" className='w-[70%] max-md:w-full max-md:mb-4 max-md:mt-4 object-contain' />
      </div>
    </div>
  )
}

export default Hero
