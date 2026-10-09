import React from 'react'
import { FaQuoteLeft } from "react-icons/fa";

const Testimonial = () => {

  const testimonial = {
    quote: "Mushrooms are edible fungus that can provide several important nutrients. The many kinds of mushroom have varying compositions and nutritional profiles.",
    image: "https://img.magnific.com/free-photo/young-handsome-man-wearing-casual-tshirt-blue-background-happy-face-smiling-with-crossed-arms-looking-camera-positive-person_839833-12963.jpg?semt=ais_hybrid&w=740&q=80",
    name: "Mandala Zookie"
  }


  return (
    <div className='border border-gray-300 w-3/4 flex flex-col gap-5 p-5'>
      <FaQuoteLeft className='text-orange-700' />
      <p className='text-gray-500'>{testimonial.quote}</p>
      <div className='flex gap-5 border-t-2 border-gray-300 pt-3 text-gray-500 justify-center align-center'>
        <img src={testimonial.image} alt="" className='w-[100px] rounded-full' />
        <h1>{testimonial.name}</h1>
      </div>
    </div>
  )
}

export default Testimonial