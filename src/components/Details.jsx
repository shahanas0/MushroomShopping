
import React from 'react'
import DetailsPage from '../components/DetailsPage'

const Details = () => {
  return (
    <div className="w-full">

      <section className="flex flex-col items-center gap-8 px-5 py-12 sm:px-8 md:px-12 lg:flex-row lg:gap-12 lg:px-16 lg:py-20 xl:gap-20 xl:px-30">

        <div className="w-full lg:w-1/2">
          <img
            src="src\assets\simple-section-1.png"
            alt=""
            className="mx-auto h-auto w-full max-w-md object-contain lg:max-w-full"
          />
        </div>

        <div className="w-full lg:w-1/2">
          <DetailsPage headingText={"Mushroom created in the laps of nature."} />
        </div>

      </section>

      <section className="flex flex-col items-center gap-8 bg-amber-50 px-5 py-12 sm:px-8 md:px-12 lg:flex-row lg:gap-12 lg:px-16 lg:py-20 xl:gap-20 xl:px-30">

        <div className="order-2 w-full lg:order-1 lg:w-1/2">
          <DetailsPage headingText={"Does your mushroom taste bad? Try us !"} />
        </div>

        <div className="order-1 w-full lg:order-2 lg:w-1/2">
          <img
            src="src\assets\simple-section-2.png"
            alt=""
            className="mx-auto h-auto w-full max-w-md object-contain lg:max-w-full"
          />
        </div>

      </section>

      <section className="flex flex-col items-center gap-8 px-5 py-12 sm:px-8 md:px-12 lg:flex-row lg:gap-12 lg:px-16 lg:py-20 xl:gap-20 xl:px-30">

        <div className="w-full lg:w-1/2">
          <img
            src="src\assets\simple-section-3.png"
            alt=""
            className="mx-auto h-auto w-full max-w-md object-contain lg:max-w-full"
          />
        </div>

        <div className="w-full lg:w-1/2">
          <DetailsPage headingText={"Mushrooms are very beneficial for the body"} />
        </div>

      </section>

    </div>
  )
}

export default Details

