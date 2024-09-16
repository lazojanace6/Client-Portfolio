import React from 'react'

const CardWorkExp : React.FC<{data : Object}> = ({data}) => {
    console.log(data)
    // const {test} = data || {}
  return (
    <div id='shadow' className='text-white p-3 w-1/2 bg-gradient-to-r from-[#00C853] via-[#4CAF50] to-[#00695C] rounded-lg max-lg:w-full max-lg:mt-3'>
      <h1 >Manager</h1>
      <h2 >2023 - 2024</h2>
      <p className='text-sm '>Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet,  
        Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet,  </p>
    </div>
  )
}

export default CardWorkExp
