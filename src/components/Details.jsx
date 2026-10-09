import React from 'react'
import Button from '../components/Button'
import headingText from '../components/DetailsPage'
import DetailsPage from '../components/DetailsPage'

const Details = () => {
  return (
    <div>
      <div className='flex  gap-30 p-30'>
        <div>
          <img src="src\assets\simple-section-1.png" alt="" className="w-325" />
        </div>
        <div >
          <DetailsPage headingText={"Mushroom created in the laps of nature."} />
        </div>
      </div>
      
      <div className='bg-amber-50 flex gap-30 p-30'>
        <div>
          <DetailsPage headingText={"Does your mushroom taste bad? Try us !"} />
        </div>
        <div>
          <img src="src\assets\simple-section-2.png" alt="" className="w-300" />
        </div>
      </div>

      <div className='flex  gap-30 p-30'>
        <div>
          <img src="src\assets\simple-section-3.png" alt="" className="w-325" />
        </div>
        <div>
          <DetailsPage headingText={"Mushrooms are very beneficial for the body"} />
        </div>
      </div>

    </div>
  )
}

export default Details