
import React from 'react'
import { FaStar } from 'react-icons/fa'

const Testimonial = ({ testimonial }) => {
  return (
    <div className="flex w-full flex-col items-center rounded-2xl border border-gray-200 bg-white px-5 py-8 text-center sm:px-8 sm:py-10">

      <img
        src={testimonial.image}
        alt={testimonial.name}
        className="mb-5 h-20 w-20 rounded-full object-cover sm:h-24 sm:w-24"
      />

      {/* <div className="mb-4 flex justify-center gap-1">
        {[...Array(5)].map((_, index) => (
          <FaStar
            key={index}
            className={
              index < testimonial.rating
                ? 'text-orange-500'
                : 'text-gray-300'
            }
          />
        ))}
      </div> */}

      <p className="mb-6 max-w-xl text-base leading-7 text-gray-600 sm:text-lg">
        "{testimonial.review}"
      </p>

      <h2 className="text-xl font-bold text-gray-900">
        {testimonial.name}
      </h2>

      <p className="mt-1 text-sm text-gray-500">
        {testimonial.role}
      </p>

    </div>
  )
}

export default Testimonial

