import React from 'react'
import { TbTruckDelivery } from "react-icons/tb";
import { AiFillSafetyCertificate } from "react-icons/ai";
import { IoReturnDownBack } from "react-icons/io5";

const Service = () => {
    return (
        <div className='px-40'>
            <div className='text-center'>
                <h3 className='text-3xl font-medium text-orange-700'>SERVICE</h3>
                <h1 className='text-5xl py-7 font-semibold mb-15'>We offer for you</h1>
            </div>
            <div className="grid grid-cols-3 mb-30 gap-0.5">
                <div className='border border-gray-400 rounded-xl py-10 px-10  transition-transform duration-300 hover:scale-101 hover:bg-white flex flex-col gap-7'>
                    <div>
                        <TbTruckDelivery className='text-7xl text-blue-950'/>
                    </div>
                    <h1 className='text-3xl font-bold'>Free Shipping</h1>
                    <p className='text-xl leading-8'>It is a long established fact that a reader will be distracted by the readable content.</p>
                </div>
                <div className='border border-gray-400 rounded-xl py-10 px-10  transition-transform duration-300 hover:scale-101  hover:bg-white flex flex-col gap-7'>
                    <div>
                        <AiFillSafetyCertificate className='text-7xl text-orange-700' />
                    </div>
                    <h1 className='text-3xl font-bold'>Certified Organic</h1>
                    <p className='text-xl leading-8'>It is a long established fact that a reader will be distracted by the readable content.</p>
                </div>
                <div className='border border-gray-400  rounded-xl py-10 px-10 transition-transform duration-300 hover:scale-101  hover:bg-white flex flex-col gap-7'>
                    <div>
                        <IoReturnDownBack className='text-7xl text-white bg-blue-700 p-2 rounded-full' />
                    </div>
                    <h1 className='text-3xl font-bold'>Easy Returns</h1>
                    <p className='text-xl leading-8'>It is a long established fact that a reader will be distracted by the readable content.</p>
                </div>
            </div>
        </div>
    )
}

export default Service