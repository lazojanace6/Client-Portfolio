import React from 'react'
import Title from '../atoms/Title'
import ContactIcon from '../atoms/ContactIcon'
const Contact : React.FC = () => {
  return (
    <div className='h-[20%] w-full max-md:mb-[60%] max-lg:mb-[20%]' id='contact'>
      <div className='flex justify-center'>
     <Title title='Contacts'/>
      </div>
      <div className='mt-5 flex w-1/2 max-lg:w-full  items-center justify-between m-auto gap-3 max-lg:block'>
        <ContactIcon/>
        <ContactIcon/>
        <ContactIcon/>
        <ContactIcon/>
      </div>
    </div>
  )
}

export default Contact
