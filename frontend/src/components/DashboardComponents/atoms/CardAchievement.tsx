import React from 'react';
import pic from '../../../assets/pic.png';

const CardAchievement: React.FC = () => {
  return (
    <div className='w-[15%] min-w-[260px] p-2 rounded-lg bg-gradient-to-r from-[#00C853] via-[#4CAF50] to-[#00695C]' id='shadow'>
      <img src={pic} alt='image' />
      <div className='mt-2'>
        <h1 className='text-white'>Manager</h1>
        <p className='text-white text-sm'>
          Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet,
        </p>
      </div>
    </div>
  );
};

export default CardAchievement;
