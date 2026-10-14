
import React, { useState } from 'react'

const Subscribe = () => {
  const [email, setEmail] = useState("")
  const [error, setError] = useState("")

  const handleSubscribe = (e) => {
    e.preventDefault()

    if (!email.trim()) {
      setError("Please enter your email")
      return
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Please enter a valid email")
      return
    }

    setError("")
    alert("Subscribed successfully!")
    setEmail("")
  }

  return (
    <div className="relative h-80 w-full sm:h-90 md:h-96">
      <div className="absolute left-1/2 -bottom-10 w-[92%] -translate-x-1/2 rounded-2xl bg-amber-50 px-5 py-10 text-center sm:top-16 sm:w-[85%] sm:px-8 sm:py-14 md:top-20 md:w-2/3 md:p-16">

        <h1 className="text-2xl font-bold sm:text-3xl md:text-4xl">
          Subscribe to our Newsletter
        </h1>

        <p className="mt-4 text-base font-extralight text-gray-600 sm:mt-5 sm:text-lg md:text-xl">
          Mushrooms are edible fungus that can provide several important nutrients.
        </p>

        <form
          onSubmit={handleSubscribe}
          className="mx-auto mt-5 w-full max-w-2xl"
        >
          <div className="flex flex-col gap-3 sm:flex-row sm:gap-0">

            <input
              type="email"
              placeholder="Enter your Email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value)
                setError("")
              }}
              aria-label="Email address"
              aria-invalid={!!error}
              className="w-full min-w-0 rounded-xl border border-gray-500 bg-white px-5 py-4 outline-orange-700 sm:w-2/3 sm:rounded-r-none sm:rounded-l-2xl sm:py-5"
            />

            <button
              type="submit"
              className="w-full rounded-xl border border-orange-700 bg-orange-700 px-5 py-4 font-bold text-white transition hover:bg-amber-50 hover:text-orange-700 sm:w-auto sm:rounded-l-none sm:rounded-r-2xl sm:py-5"
            >
              Subscribe
            </button>

          </div>

          {error && (
            <p role="alert" className="mt-3 text-left text-sm text-red-500">
              {error}
            </p>
          )}
        </form>

      </div>
    </div>
  )
}

export default Subscribe

