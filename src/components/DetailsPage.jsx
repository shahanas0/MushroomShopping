import React from 'react'
import Button from './Button'

const DetailsPage = ({ headingText }) => {
  return (
   
    <div className='flex flex-col gap-5 mt-20'>
      <h3 className='text-2xl font-medium text-orange-700'>
        DETAILS
      </h3>

      <h1 className='text-5xl font-bold leading-15'>
        {headingText}
      </h1>

      <p className='text-xl leading-9'>
        Mushrooms are edible fungus that can provide several important
        nutrients. The many kinds of mushroom have varying compositions
        and nutritional profiles.
      </p>

      <Button buttonText={"Read More"} />
    </div>
  )
}

export default DetailsPage

