import React from 'react'
import Button from '../components/Button'
import { Link } from "react-router-dom";

const HeroSection = () => {
    return (
        <div className='p-30 bg-amber-50'>
            <div className='flex  gap-50'>
                <div className='w-1/2 flex flex-col gap-3 mt-25'>
                    <h3 className='text-2xl font-medium'>100% Natural Products</h3>
                    <h1 className='text-8xl font-extrabold'>MUSHROOM</h1>
                    <p className='text-xl leading-9'>Mushrooms are edible fungus that can provide several important nutrients. The many kinds of mushroom have varying compositions and nutritional profiles.</p>
                    <div className='flex gap-5'>
                        <Link to={"/products"}><Button buttonText={"Buy Now"} /></Link>
                        <button className='border px-10 rounded-xl font-medium hover:bg-black hover:text-white cursor-pointer'>
                            <a href="#footer">Contact Now</a>
                        </button>
                    </div>
                </div>

                <div className='mt-10 ml-3'>
                    <img src="src\assets\image.png" alt="" className='py-10' />
                </div>
            </div>
        </div>
    )
}

export default HeroSection