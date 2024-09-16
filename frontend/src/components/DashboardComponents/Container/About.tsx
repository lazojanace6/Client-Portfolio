import React from 'react'
import Title from '../atoms/Title'
import pic from "../../../assets/pic.png"
const About : React.FC = () => {
  return (
    <div id='about' className='w-full h-[80%] flex  max-lg:block max-lg:mt-[20%] items-center justify-center'>
      <div className='w-[40%] h-[60%] rounded-lg flex justify-start max-lg:justify-center max-lg:w-full max-lg:mt-10'>
       <img src={pic} alt="image" className='w-[70%] max-md:w-full max-md:mb-4 max-md:mt-4 object-contain' />
      </div>
      <div className='w-1/2   h-[50%] max-lg:w-full text-end max-lg:text-start'>
       <Title title={"About Me"}/>
        <h1 className='text-2xl max-lg:text-3xl max-md:text-xl'>Lorem ipsum dolor sit amet,
             <strong className='text-green'>consectetur</strong> Lorem ipsum dolor sit amet, 
             Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet, <strong className='text-green'>consectetur</strong> Lorem ipsum dolor sit amet</h1>   
       <div className='text-end mt-3 text-xl font-semibold text-green max-lg:text-start max-md:text-sm'>
       <p>Lorem ipsum dolor ✔</p>
       <p>Lorem ipsum dolor ✔</p>
       <p>Lorem ipsum dolor ✔</p>
       <p>Lorem ipsum dolor ✔</p>
       </div>
      </div>
    </div>
  )
}

export default About
