import React from 'react'
import IconsButton from './IconsButton'

const ContactIcon : React.FC  = () => {
  return (
    <div className='flex gap-2 max-lg:mt-3'>
      <IconsButton  type='ic:outline-facebook'/>
      <div>
        <h1 className='text-white2 text-sm'>Contact</h1>
        <p>093456645</p>
      </div>
    </div>
  )
}

export default ContactIcon
