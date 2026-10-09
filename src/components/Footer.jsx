import React from 'react'
import { FaPhoneAlt } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'

const Footer = () => {
    return (
        <div id="footer" className='bg-black text-white flex justify-between p-30 pt-50'>
            <div className='flex flex-col gap-5'>
                <img src="src\assets\logo-footer.svg" alt="" className='w-70' />
                <h1>625 E Franklin Ave, Minneapolis, MN 55404, USA</h1>
                <h3>@2022 Alien World. All rights reserved.</h3>
            </div>
            <div className='flex flex-col gap-5'>
                <h1 className='text-2xl font-bold'>About us</h1>
                <ul className='flex flex-col gap-3'>
                    <li><a href="">Our story</a></li>
                    <li><a href="">Designer</a></li>
                    <li><a href="">Craftsmanship</a></li>
                    <li><a href="">Sustainability</a></li>
                </ul>
            </div>
            <div className='flex flex-col gap-5'>
                <h1 className='text-2xl font-bold'>Support</h1>
                <ul className='flex flex-col gap-3'>
                    <li><a href="">FAQ’s</a></li>
                    <li><a href="">Shipping & Returns</a></li>
                    <li><a href="">Care guide</a></li>
                    <li><a href="">Price List</a></li>
                </ul>
            </div>
            <div className='flex flex-col gap-5'>
                <h1 className='text-2xl font-bold'>Contact us</h1>
                <div className='flex gap-3'>
                    <a href="tel:+0927627728525" className="flex items-center gap-2">
                        <FaPhoneAlt className="text-[20px]" />
                        +0927 6277 28525
                    </a>
                </div>
                <div className='flex gap-3'>
                    <a href="mailto:hello@shopping.com" className="flex items-center gap-2">
                        <span style={{ fontSize: "27px" }}>
                            <MdEmail />
                        </span>
                        hello@shopping.com
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Footer