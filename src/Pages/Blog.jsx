import React from 'react'

const Blog = () => {
  return (
    <div className="px-30 py-20 flex flex-col gap-10">
      <div className='flex gap-3'>
        <div>
          <img className='rounded-3xl' src="https://www.nps.gov/muwo/learn/nature/images/4_20.jpg?maxwidth=650&autorotate=false" alt="" />
        </div>
        <div className='border p-10 rounded-2xl bg-gray-200 shadow-2xl shadow-gray-700'>
          <h1 className="text-2xl font-bold mb-4 text-orange-700">
            Health Benefits of Mushrooms
          </h1>

          <p className="text-gray-700 text-xl mb-6">
            Mushrooms are nutritious foods that can be part of a healthy diet.
            They provide protein, fiber, vitamins, minerals, and antioxidants.
          </p>

          <ol className="list-decimal list-inside space-y-2 text-gray-700">
            <li>Supports a balanced diet</li>
            <li>Provides essential nutrients</li>
            <li>Supports overall heart health</li>
            <li>Contains antioxidants</li>
            <li>Provides energy and nutrition</li>
          </ol>
        </div>
      </div>

      <div className='flex gap-3'>

        <div className='border p-10 rounded-2xl bg-gray-200 shadow-2xl shadow-gray-700'>
          <h1 className="text-2xl font-bold mb-4 text-orange-700">
            How to Store Mushrooms
          </h1>

          <p className="text-gray-600 text-xl mb-6">
            Mushrooms can stay fresh longer when stored properly. Keep them in the refrigerator and avoid excess moisture.
          </p>

          <ol className="list-decimal list-inside space-y-2 text-gray-700">
            <li>Keep mushrooms refrigerated</li>
            <li>Store them in a paper bag or breathable container</li>
            <li>Avoid washing them before storage</li>
            <li>Keep them away from excess moisture</li>
            <li>Use fresh mushrooms within a few days for the best quality</li>
          </ol>
        </div>
        <div>
          <img className='rounded-3xl' src="https://www.unsw.edu.au/content/dam/images/unsw-wide/general/news/2025/2023-11-getty-stock/AdobeStock_303291494.cropimg.width=335.crop=portrait.jpeg" alt="" />
        </div>
      </div>

      <div className='flex gap-3'>
        <div>
          <img className='rounded-3xl w-150' src="https://foragerchef.com/wp-content/uploads/2024/01/Spring-mushrooms-26.jpg" alt="" />
        </div>
        <div className='border p-10 rounded-2xl bg-gray-200 shadow-2xl shadow-gray-700'>
          <h1 className="text-2xl font-bold mb-4 text-orange-700">
            Mushroom Growing
          </h1>

          <p className="text-gray-700 text-xl mb-6">
            Mushrooms can be grown indoors under the right conditions. They need suitable growing material, moisture, temperature, and a clean environment.
          </p>

          <ol className="list-decimal list-inside space-y-2 text-gray-700">
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