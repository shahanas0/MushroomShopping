import React from 'react'
import Button from './Button'
import { FaPhoneAlt } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div>
            <div className='bg-black text-gray-300   flex justify-center items-center p-3'>
                <ul className='flex text-xl gap-10 cursor-pointer'>
                    <li className='flex gap-3 hover:text-white'>
                        <a href="mailto:hello@shopping.com" className="flex items-center gap-2">
                            <span style={{ fontSize: "27px" }}>
                                <MdEmail />
                            </span>
                            hello@shopping.com
                        </a>
                    </li>
                    <li className='flex gap-3 hover:text-white'>
                        <a href="tel:+0927627728525" className="flex items-center gap-2">
                            <FaPhoneAlt className="text-[20px]" />
                            +0927 6277 28525
                        </a>
                    </li>
                </ul>
            </div>
            <div className='flex justify-between px-20 py-5 items-center'>
                <img src="src\assets\logo.svg" alt="" />
                <nav>
                    <ul className='flex gap-15 font-medium text-xl text-gray-700'>
                        <li className="hover:text-orange-700">
                            <Link to={"/"}>Home</Link>
                        </li>
                        <li className="hover:text-orange-700">
                            <Link to={"/blog"}>Blog</Link>
                        </li>
                        <li className="hover:text-orange-700">
                            <Link to={"/products"}>Products</Link>
                        </li>
                        <li className="hover:text-orange-700">
                            <Link to={"/reviews"}><a href="#reviews">Reviews</a></Link>
                        </li>
                    </ul>
                </nav>
                <ul className='flex gap-10 font-bold text-xl justify-center items-center'>
                    <li className="border-2 border-transparent px-7 py-3 rounded-xl hover:border-orange-700 transition-all duration-300 hover:text-orange-700 cursor-pointer">
                        <Link to={"/login"}>Log in</Link>
                    </li>
                    <Link to={"/register"}>
                        <Button buttonText={"sign Up"} />
                    </Link>
                </ul>
            </div>
        </div>
    )
}

export default Header