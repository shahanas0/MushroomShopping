import React from 'react'

const Reveiws = () => {

  const feedbacks = [
    {
      id: 1,
      name: "Arjun Menon",
      rating: 5,
      review: "The mushrooms were very fresh and well packed. The quality was excellent and delivery was quick.",
      date: "2026-09-28",
      profileImage: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
      id: 2,
      name: "Ananya Nair",
      rating: 4,
      review: "Good quality mushrooms and reasonable prices. Everything arrived fresh and clean.",
      date: "2026-09-26",
      profileImage: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
      id: 3,
      name: "Rahul Kumar",
      rating: 5,
      review: "Really impressed with the freshness. The mushrooms tasted great and were perfect for cooking.",
      date: "2026-09-24",
      profileImage: "https://randomuser.me/api/portraits/men/46.jpg"
    },
    {
      id: 4,
      name: "Meera Thomas",
      rating: 5,
      review: "Excellent service and very fresh products. The packaging was also neat and secure.",
      date: "2026-09-22",
      profileImage: "https://randomuser.me/api/portraits/women/65.jpg"
    },
    {
      id: 5,
      name: "Vishnu Raj",
      rating: 4,
      review: "The mushrooms were fresh and had a good texture. Delivery was on time.",
      date: "2026-09-20",
      profileImage: "https://randomuser.me/api/portraits/men/52.jpg"
    },
    {
      id: 6,
      name: "Sneha Joseph",
      rating: 5,
      review: "I loved the quality of the mushrooms. They were fresh, clean, and exactly what I expected.",
      date: "2026-09-18",
      profileImage: "https://randomuser.me/api/portraits/women/33.jpg"
    },
    {
      id: 7,
      name: "Adithya S",
      rating: 4,
      review: "Nice shopping experience. The products were fresh and the website was easy to use.",
      date: "2026-09-15",
      profileImage: "https://randomuser.me/api/portraits/men/71.jpg"
    },
    {
      id: 8,
      name: "Fathima Rahman",
      rating: 5,
      review: "Very fresh mushrooms with excellent packaging. I will definitely order again.",
      date: "2026-09-12",
      profileImage: "https://randomuser.me/api/portraits/women/48.jpg"
    },
    {
      id: 9,
      name: "Nikhil Das",
      rating: 4,
      review: "Good product quality and fast delivery. The mushrooms stayed fresh even after a few days.",
      date: "2026-09-10",
      profileImage: "https://randomuser.me/api/portraits/men/68.jpg"
    },
    {
      id: 10,
      name: "Diya Mathew",
      rating: 5,
      review: "Amazing freshness and quality. The mushrooms were delicious and very easy to prepare.",
      date: "2026-09-07",
      profileImage: "https://randomuser.me/api/portraits/women/29.jpg"
    }
  ]

  return (<section className="w-full px-4 py-10 sm:px-6 sm:py-12 md:px-10 lg:px-16 lg:py-20">

    ```
    <div className="mx-auto grid max-w-[1600px] grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">

      {feedbacks.map((feedback) => (
        <div
          key={feedback.id}
          className="flex min-w-0 flex-col gap-5 rounded-2xl border border-gray-200 bg-white p-5 shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-2xl sm:p-6 md:p-8"
        >

          <div className="flex flex-col items-center justify-center text-center">

            <img
              src={feedback.profileImage}
              alt={feedback.name}
              loading="lazy"
              className="h-20 w-20 rounded-full border-4 border-orange-100 object-cover sm:h-24 sm:w-24 md:h-28 md:w-28"
            />

            <h1 className="mt-4 text-lg font-semibold text-gray-800 sm:text-xl">
              {feedback.name}
            </h1>

          </div>

          <div className="flex flex-1 flex-col">

            <p className="wrap-break-word text-base leading-7 text-gray-800 sm:text-lg sm:leading-8">
              "{feedback.review}"
            </p>

            <div className="mt-auto flex items-center justify-between gap-3 pt-5">

              <h3 className="text-lg font-semibold text-yellow-700 sm:text-xl">
                {"★".repeat(feedback.rating)}
                <span className="ml-2 text-sm text-gray-600">
                  {feedback.rating}/5
                </span>
              </h3>

              <h2 className="text-xs text-gray-500 sm:text-sm">
                {feedback.date}
              </h2>

            </div>

          </div>

        </div>
      ))}

    </div>

  </section>


  )
}

export default Reveiws
