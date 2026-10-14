
import React, { useState } from 'react'
import Testimonial from '../components/Testimonial'

const AboutUs = () => {
  const [current, setCurrent] = useState(0)

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Happy Customer",
      image: "https://i.pravatar.cc/150?img=47",
      review: "The mushrooms were incredibly fresh and delicious. The quality exceeded my expectations, and the delivery was quick. I will definitely order again!",
      rating: 5,
    },
    {
      id: 2,
      name: "Michael Smith",
      role: "Regular Customer",
      image: "https://i.pravatar.cc/150?img=12",
      review: "Amazing quality and excellent service! I love that the mushrooms are natural and carefully packed. This has become my favorite place to shop.",
      rating: 5,
    },
    {
      id: 3,
      name: "Emily Davis",
      role: "Verified Buyer",
      image: "https://i.pravatar.cc/150?img=44",
      review: "These mushrooms taste wonderful and are perfect for my daily meals. The freshness and quality make a real difference in my cooking.",
      rating: 5,
    },
    {
      id: 4,
      name: "Daniel Wilson",
      role: "Happy Customer",
      image: "https://i.pravatar.cc/150?img=33",
      review: "Great products at reasonable prices. My order arrived on time, and everything was fresh. I appreciate the excellent customer service.",
      rating: 4,
    },
    {
      id: 5,
      name: "Olivia Brown",
      role: "Regular Customer",
      image: "https://i.pravatar.cc/150?img=49",
      review: "I love the freshness and taste of these mushrooms. Ordering is easy, delivery is reliable, and the quality is consistently impressive.",
      rating: 5,
    },
  ]

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
    <section
      id="reviews"
      className="w-full overflow-hidden px-5 py-12 text-center sm:px-8 sm:py-16 md:px-12 lg:px-20"
    >
      <h1 className="text-2xl font-semibold sm:text-3xl md:text-4xl">
        Customers say about us
      </h1>

      <h3 className="mx-auto mt-4 max-w-3xl text-base leading-7 text-gray-500 sm:text-lg md:text-xl">
        Bring your dream home to life with one-on-one design help & hand-picked products.
      </h3>

      <div className="relative mx-auto mt-10 w-full max-w-4xl">
        <div className="overflow-hidden">
          <div
            className="flex items-stretch transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${current * 100}%)`,
            }}
          >
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="flex w-full min-w-full shrink-0 items-center justify-center px-8 sm:px-12 md:px-16"
              >
                <div className="flex w-full justify-center">
                  <Testimonial testimonial={testimonial} />
                </div>
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={prevSlide}
          aria-label="Previous testimonial"
          className="absolute left-0 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-xl bg-black text-xl font-bold text-white transition hover:bg-orange-600 sm:h-11 sm:w-11 sm:text-2xl"
        >
          ←
        </button>

        <button
          onClick={nextSlide}
          aria-label="Next testimonial"
          className="absolute right-0 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-xl bg-black text-xl font-bold text-white transition hover:bg-orange-600 sm:h-11 sm:w-11 sm:text-2xl"
        >
          →
        </button>
      </div>

      <div className="mt-6 flex justify-center gap-2">
        {testimonials.map((testimonial, index) => (
          <button
            key={testimonial.id}
            onClick={() => setCurrent(index)}
            aria-label={`Go to testimonial ${index + 1}`}
            aria-current={current === index ? 'true' : undefined}
            className={`h-3 w-3 rounded-full transition ${
              current === index
                ? 'bg-orange-600'
                : 'bg-gray-300 hover:bg-gray-400'
            }`}
          />
        ))}
      </div>
    </section>
  )
}

export default AboutUs

