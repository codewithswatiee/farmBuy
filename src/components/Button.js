import React, { Children } from 'react'

function Button({...props}) {
  return (
    <div>
      <button className='button' {...props}>{Children}</button>
    </div>
  )
}

export default Button
