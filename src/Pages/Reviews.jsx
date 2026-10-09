import React from 'react'
import AboutUs from '../components/AboutUs'

const Reveiws = () => {

  const feedbacks = [
    {
      "id": 1,
      "name": "Arjun Menon",
      "rating": 5,
      "review": "The mushrooms were very fresh and well packed. The quality was excellent and delivery was quick.",
      "date": "2026-09-28",
      "profileImage": "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
      "id": 2,
      "name": "Ananya Nair",
      "rating": 4,
      "review": "Good quality mushrooms and reasonable prices. Everything arrived fresh and clean.",
      "date": "2026-09-26",
      "profileImage": "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
      "id": 3,
      "name": "Rahul Kumar",
      "rating": 5,
      "review": "Really impressed with the freshness. The mushrooms tasted great and were perfect for cooking.",
      "date": "2026-09-24",
      "profileImage": "https://randomuser.me/api/portraits/men/46.jpg"
    },
    {
      "id": 4,
      "name": "Meera Thomas",
      "rating": 5,
      "review": "Excellent service and very fresh products. The packaging was also neat and secure.",
      "date": "2026-09-22",
      "profileImage": "https://randomuser.me/api/portraits/women/65.jpg"
    },
    {
      "id": 5,
      "name": "Vishnu Raj",
      "rating": 4,
      "review": "The mushrooms were fresh and had a good texture. Delivery was on time.",
      "date": "2026-09-20",
      "profileImage": "https://randomuser.me/api/portraits/men/52.jpg"
    },
    {
      "id": 6,
      "name": "Sneha Joseph",
      "rating": 5,
      "review": "I loved the quality of the mushrooms. They were fresh, clean, and exactly what I expected.",
      "date": "2026-09-18",
      "profileImage": "https://randomuser.me/api/portraits/women/33.jpg"
    },
    {
      "id": 7,
      "name": "Adithya S",
      "rating": 4,
      "review": "Nice shopping experience. The products were fresh and the website was easy to use.",
      "date": "2026-09-15",
      "profileImage": "https://randomuser.me/api/portraits/men/71.jpg"
    },
    {
      "id": 8,
      "name": "Fathima Rahman",
      "rating": 5,
      "review": "Very fresh mushrooms with excellent packaging. I will definitely order again.",
      "date": "2026-09-12",
      "profileImage": "https://randomuser.me/api/portraits/women/48.jpg"
    },
    {
      "id": 9,
      "name": "Nikhil Das",
      "rating": 4,
      "review": "Good product quality and fast delivery. The mushrooms stayed fresh even after a few days.",
      "date": "2026-09-10",
      "profileImage": "https://randomuser.me/api/portraits/men/68.jpg"
    },
    {
      "id": 10,
      "name": "Diya Mathew",
      "rating": 5,
      "review": "Amazing freshness and quality. The mushrooms were delicious and very easy to prepare.",
      "date": "2026-09-07",
      "profileImage": "https://randomuser.me/api/portraits/women/29.jpg"
    }
  ]

  return (
    <div className='p-20 grid grid-cols-3 gap-5'>
      {
        feedbacks.map((feedback) => {
          return (
            <div key={feedback.id}>
              <div className="border border-gray-200 rounded-2xl p-8 shadow-2xl bg-white h-100 flex flex-col gap-5">

                <div className="flex flex-col items-center justify-center">
                  <img
                    src={feedback.profileImage}
                    alt={feedback.name}
                    className="w-30 h-30 rounded-full object-cover border-4 border-orange-100"
                  />

                  <h1 className="text-xl font-semibold text-gray-800 mt-4">
                    {feedback.name}
                  </h1>
                </div>

                <div className="col-span-2 flex flex-col justify-center">
                  <p className="text-lg text-gray-800 leading-8">
                    "{feedback.review}"
                  </p>

                  <h3 className="text-xl text-yellow-700 mt-4">
                    {feedback.rating}/5
                  </h3>

                  <h2 className="text-sm text-gray-600 mt-3">
                    {feedback.date}
                  </h2>
                </div>

                

              </div>
            </div>
          )
        })
      }

    </div>
  )
}

export default Reveiws