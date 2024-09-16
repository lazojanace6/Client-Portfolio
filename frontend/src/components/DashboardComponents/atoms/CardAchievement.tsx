import React from 'react'
import pic from "../../../assets/pic.png"
const CardAchievement : React.FC = () => {
  return (
    <div className='w-[15%] min-w-[200px]  p-2 rounded-lg' id="shadow">
      <img src={pic} alt="image"  />
       <div className='mt-2'>
        <h1 className='text-green'>Manager</h1>
        <p className='text-white2 text-sm'>Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet,
             Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet,</p>
       </div>
    </div>
  )
}

export default CardAchievement
