import React from 'react'

const CardWorkExp : React.FC<{data : Object}> = ({data}) => {
    console.log(data)
    // const {test} = data || {}
  return (
    <div id='shadow' className='bg-WHITE p-3 w-1/2 rounded-lg max-lg:w-full text-gray  max-lg:mt-3'>
      <h1 className='text-green'>Manager</h1>
      <h2 className='text-opacity-90'>2023 - 2024</h2>
      <p className='text-sm text-white2'>Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet,  
        Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet,  </p>
    </div>
  )
}

export default CardWorkExp
