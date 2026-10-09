import React, { useState } from 'react'

const Subscribe = () => {

  const [email, setEmail] = useState("")
  const [error, setError] = useState("")

  const handleSubscribe = (e) => {
    e.preventDefault()

    if (!email) {
      setError("Please enter your email")
      return
    }

    if (!email.includes("@")) {
      setError("Please enter a valid email")
      return
    }

    setError("")
    alert("Subscribed successfully!")
    setEmail("")
  }

  return (
    <div className='relative w-full h-90'>
      <div className='bg-amber-50 text-center p-20 absolute top-20 left-70 w-2/3 rounded-2xl'>

        <h1 className='text-4xl font-bold'>
          Subscribe to our Newsletter
        </h1>

        <p className='text-xl font-extralight mt-5 text-gray-600'>
          Mushrooms are edible fungus that can provide several important nutrients.
        </p>

        <form onSubmit={handleSubscribe} className='mt-5'>

          <input
            type="email"
            placeholder='Enter your Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className='border outline-orange-700 border-gray-500 px-5 py-5 w-1/3 rounded-l-2xl'
          />

          <button
            type="submit"
            className='bg-orange-700 px-5 py-5 border border-orange-700 font-bold text-white rounded-r-2xl cursor-pointer hover:bg-amber-50 hover:border-2 hover:text-orange-700'
          >
            Subscribe
          </button>

          {error && (
            <p className='text-red-500 mt-3'>
              {error}
            </p>
          )}

        </form>

      </div>
    </div>
  )
}

export default Subscribe