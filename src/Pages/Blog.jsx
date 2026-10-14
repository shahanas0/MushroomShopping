import React from 'react'

const Blog = () => {
  return (
    <div className="flex flex-col gap-8 px-5 py-10 sm:gap-10 sm:px-8 sm:py-14 md:px-12 lg:px-20 lg:py-20">

      <div className="flex flex-col items-stretch gap-5 md:flex-row md:gap-3">
        <div className="flex w-full md:w-1/3">
          <img
            className="h-56 w-full rounded-3xl object-cover sm:h-64 md:h-full"
            src="https://www.nps.gov/muwo/learn/nature/images/4_20.jpg?maxwidth=650&autorotate=false"
            alt="Mushrooms growing in nature"
          />
        </div>

        <div className="flex w-full flex-col justify-center rounded-2xl border bg-gray-200 p-5 shadow-2xl shadow-gray-700 sm:p-8 md:w-2/3 md:p-8">
          <h1 className="mb-4 text-xl font-bold text-orange-700 sm:text-2xl">
            Health Benefits of Mushrooms
          </h1>

          <p className="mb-6 text-base text-gray-700 sm:text-lg">
            Mushrooms are nutritious foods that can be part of a healthy diet.
            They provide protein, fiber, vitamins, minerals, and antioxidants.
          </p>

          <ol className="list-inside list-decimal space-y-2 text-sm text-gray-700 sm:text-base">
            <li>Supports a balanced diet</li>
            <li>Provides essential nutrients</li>
            <li>Supports overall heart health</li>
            <li>Contains antioxidants</li>
            <li>Provides energy and nutrition</li>
          </ol>
        </div>
      </div>

      <div className="flex flex-col items-stretch gap-5 md:flex-row md:gap-3">
        <div className="order-2 flex w-full flex-col justify-center rounded-2xl border bg-gray-200 p-5 shadow-2xl shadow-gray-700 sm:p-8 md:order-1 md:w-2/3 md:p-8">
          <h1 className="mb-4 text-xl font-bold text-orange-700 sm:text-2xl">
            How to Store Mushrooms
          </h1>

          <p className="mb-6 text-base text-gray-600 sm:text-lg">
            Mushrooms can stay fresh longer when stored properly. Keep them in the refrigerator and avoid excess moisture.
          </p>

          <ol className="list-inside list-decimal space-y-2 text-sm text-gray-700 sm:text-base">
            <li>Keep mushrooms refrigerated</li>
            <li>Store them in a paper bag or breathable container</li>
            <li>Avoid washing them before storage</li>
            <li>Keep them away from excess moisture</li>
            <li>Use fresh mushrooms within a few days for the best quality</li>
          </ol>
        </div>

        <div className="order-1 flex w-full md:order-2 md:w-1/3">
          <img
            className="h-56 w-full rounded-3xl object-cover sm:h-64 md:h-full"
            src="https://www.unsw.edu.au/content/dam/images/unsw-wide/general/news/2025/2023-11-getty-stock/AdobeStock_303291494.cropimg.width=335.crop=portrait.jpeg"
            alt="Fresh mushrooms"
          />
        </div>
      </div>

      <div className="flex flex-col items-stretch gap-5 md:flex-row md:gap-3">
        <div className="flex w-full md:w-1/3">
          <img
            className="h-56 w-full rounded-3xl object-cover sm:h-64 md:h-full"
            src="https://foragerchef.com/wp-content/uploads/2024/01/Spring-mushrooms-26.jpg"
            alt="Spring mushrooms growing in nature"
          />
        </div>

        <div className="flex w-full flex-col justify-center rounded-2xl border bg-gray-200 p-5 shadow-2xl shadow-gray-700 sm:p-8 md:w-2/3 md:p-8">
          <h1 className="mb-4 text-xl font-bold text-orange-700 sm:text-2xl">
            Mushroom Growing
          </h1>

          <p className="mb-6 text-base text-gray-700 sm:text-lg">
            Mushrooms can be grown indoors under the right conditions. They need suitable growing material, moisture, temperature, and a clean environment.
          </p>

          <ol className="list-inside list-decimal space-y-2 text-sm text-gray-700 sm:text-base">
            <li>Choose the right mushroom variety</li>
            <li>Maintain proper moisture</li>
            <li>Keep a suitable temperature</li>
            <li>Maintain a clean growing area</li>
            <li>Harvest mushrooms when they are ready</li>
          </ol>
        </div>
      </div>

    </div>
  )
}

export default Blog