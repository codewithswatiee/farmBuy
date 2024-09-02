import React from 'react'
import './button.css'
function Button({children, ...props}) {
  return (
    <div>
      <button className='button' {...props}>{children}</button>
    </div>
  )
}

export default Button
