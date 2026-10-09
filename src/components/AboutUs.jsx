
import React, { useState } from 'react'
import Testimonial from '../components/Testimonial'

const AboutUs = () => {

  const [current, setCurrent] = useState(0)

  const testimonials = [1, 2, 3, 4, 5]

  const nextSlide = () => {
    setCurrent((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    )
  }

  const prevSlide = () => {
    setCurrent((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    )
  }

  return (
    <div id="reviews" className="px-30 text-center overflow-hidden">

      <h1 className="font-semibold text-4xl">
        Customers say about us
      </h1>

      <h3 className="text-xl text-gray-500 mt-4">
        Bring your dream home to life with one-on-one design help & hand-picked products.
      </h3>

      {/* Slider */}
      <div className="relative mt-10">

        <div className="overflow-hidden">

          <div
            className="flex gap-5 transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${current * 100}%)`
            }}
          >

            {testimonials.map((item) => (
              <div
                key={item}
                className="min-w-full flex justify-center"
              >
                <Testimonial />
              </div>
            ))}

          </div>

        </div>

        {/* Previous Button */}
        <button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 text-3xl font-extrabold -translate-y-1/2
                     bg-black text-white px-4 py-2 rounded-2xl
                     hover:bg-orange-600 transition"
        >
          ←
        </button>

        {/* Next Button */}
        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 font-extrabold text-3xl -translate-y-1/2
                     bg-black text-white px-4 py-2 rounded-2xl
                     hover:bg-orange-600 transition"
        >
          →
        </button>

      </div>

      {/* Dots */}
      <div className="flex justify-center gap-2 mt-6">

        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full transition ${current === index
                ? 'bg-orange-600'
                : 'bg-gray-300'
              }`}
          />

        ))}

      </div>

    </div>
  )
}

export default AboutUs

