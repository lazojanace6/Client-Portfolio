import React from 'react'
import { Icon } from '@iconify/react'; 

const IconsButton : React.FC<{type : string}> = ({type}) => {
  return (
    <button className='bg-green p-2 rounded-lg hover:bg-opacity-80'>
        <Icon icon={type} className='text-white text-2xl'/>
    </button>
  )
}

export default IconsButton
