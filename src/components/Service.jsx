
import React from 'react'
import { TbTruckDelivery } from "react-icons/tb";
import { AiFillSafetyCertificate } from "react-icons/ai";
import { IoReturnDownBack } from "react-icons/io5";

const Service = () => {
    return (
        <div className='px-5 sm:px-8 md:px-12 lg:px-20 xl:px-40'>

            <div className='text-center'>
                <h3 className='text-2xl sm:text-3xl font-medium text-orange-700'>
                    SERVICE
                </h3>

                <h1 className='text-3xl sm:text-4xl lg:text-5xl py-5 sm:py-7 font-semibold mb-8 sm:mb-12 lg:mb-15'>
                    We offer for you
                </h1>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mb-16 sm:mb-20 lg:mb-30 gap-4 sm:gap-5 lg:gap-3">

                <div className='border border-gray-400 rounded-xl py-8 px-6 sm:py-10 sm:px-7 lg:px-6 xl:px-10 transition-transform duration-300 hover:scale-[1.01] hover:bg-white flex flex-col gap-5 sm:gap-7'>
                    <div>
                        <TbTruckDelivery className='text-6xl sm:text-7xl text-blue-950' />
                    </div>

                    <h1 className='text-2xl sm:text-3xl font-bold'>
                        Free Shipping
                    </h1>

                    <p className='text-base sm:text-lg lg:text-xl leading-7 sm:leading-8'>
                        It is a long established fact that a reader will be distracted by the readable content.
                    </p>
                </div>

                <div className='border border-gray-400 rounded-xl py-8 px-6 sm:py-10 sm:px-7 lg:px-6 xl:px-10 transition-transform duration-300 hover:scale-[1.01] hover:bg-white flex flex-col gap-5 sm:gap-7'>
                    <div>
                        <AiFillSafetyCertificate className='text-6xl sm:text-7xl text-orange-700' />
                    </div>

                    <h1 className='text-2xl sm:text-3xl font-bold'>
                        Certified Organic
                    </h1>

                    <p className='text-base sm:text-lg lg:text-xl leading-7 sm:leading-8'>
                        It is a long established fact that a reader will be distracted by the readable content.
                    </p>
                </div>

                <div className='border border-gray-400 rounded-xl py-8 px-6 sm:py-10 sm:px-7 lg:px-6 xl:px-10 transition-transform duration-300 hover:scale-[1.01] hover:bg-white flex flex-col gap-5 sm:gap-7 sm:col-span-2 lg:col-span-1'>
                    <div>
                        <IoReturnDownBack className='text-6xl sm:text-7xl text-white bg-blue-700 p-2 rounded-full' />
                    </div>

                    <h1 className='text-2xl sm:text-3xl font-bold'>
                        Easy Returns
                    </h1>

                    <p className='text-base sm:text-lg lg:text-xl leading-7 sm:leading-8'>
                        It is a long established fact that a reader will be distracted by the readable content.
                    </p>
                </div>

            </div>
        </div>
    )
}

export default Service

