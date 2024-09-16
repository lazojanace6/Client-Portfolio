import React from 'react'

const Title : React.FC<{title : string }> = ({title}) => {
  return (
    <p className='text-green text-lg font-semibold'>
      {title}
    </p>
  )
}

export default Title
