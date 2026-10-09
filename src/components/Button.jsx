import React from 'react'

const Button = ({buttonText}) => {
  return (
    <div>
        <button className='bg-orange-700 text-white px-10 py-3 rounded-xl border-2 border-orange-700 hover:bg-white transition duration-300 hover:text-orange-700 cursor-pointer '>
            {buttonText}
        </button>
    </div>
  )
}

export default Button