
import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer = () => {
    return (
        <footer
            id="footer"
            className="bg-black px-5 py-20 text-white sm:px-8 sm:py-14 lg:px-12 lg:py-20 xl:px-20"
        >
            <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8 xl:gap-12">

                <div className="flex flex-col items-start gap-5">
                    <img
                        src="src\assets\logo-footer.svg"
                        alt="Alien World Logo"
                        className="w-48 sm:w-52 lg:w-56"
                    />

                    <p className="max-w-xs text-sm leading-7 text-gray-300 sm:text-base">
                        625 E Franklin Ave, Minneapolis, MN 55404, USA
                    </p>

                    <p className="text-sm text-gray-400">
                        © 2022 Alien World. All rights reserved.
                    </p>
                </div>

                <div className="flex flex-col gap-5">
                    <h2 className="text-xl font-bold sm:text-2xl">
                        About us
                    </h2>

                    <ul className="flex flex-col gap-3 text-sm text-gray-300 sm:text-base">
                        <li>
                            <a href="#" className="transition-colors hover:text-orange-500">
                                Our story
                            </a>
                        </li>
                        <li>
                            <a href="#" className="transition-colors hover:text-orange-500">
                                Designer
                            </a>
                        </li>
                        <li>
                            <a href="#" className="transition-colors hover:text-orange-500">
                                Craftsmanship
                            </a>
                        </li>
                        <li>
                            <a href="#" className="transition-colors hover:text-orange-500">
                                Sustainability
                            </a>
                        </li>
                    </ul>
                </div>

                <div className="flex flex-col gap-5">
                    <h2 className="text-xl font-bold sm:text-2xl">
                        Support
                    </h2>

                    <ul className="flex flex-col gap-3 text-sm text-gray-300 sm:text-base">
                        <li>
                            <a href="#" className="transition-colors hover:text-orange-500">
                                FAQ's
                            </a>
                        </li>
                        <li>
                            <a href="#" className="transition-colors hover:text-orange-500">
                                Shipping & Returns
                            </a>
                        </li>
                        <li>
                            <a href="#" className="transition-colors hover:text-orange-500">
                                Care guide
                            </a>
                        </li>
                        <li>
                            <a href="#" className="transition-colors hover:text-orange-500">
                                Price List
                            </a>
                        </li>
                    </ul>
                </div>

                <div className="flex flex-col gap-5">
                    <h2 className="text-xl font-bold sm:text-2xl">
                        Contact us
                    </h2>

                    <a
                        href="tel:+0927627728525"
                        className="flex items-center gap-3 text-sm text-gray-300 transition-colors hover:text-orange-500 sm:text-base"
                    >
                        <FaPhoneAlt className="shrink-0 text-lg" />
                        <span>+0927 6277 28525</span>
                    </a>

                    <a
                        href="mailto:hello@shopping.com"
                        className="flex items-center gap-3 break-all text-sm text-gray-300 transition-colors hover:text-orange-500 sm:text-base"
                    >
                        <MdEmail className="shrink-0 text-2xl" />
                        <span>hello@shopping.com</span>
                    </a>
                </div>

            </div>
        </footer>
    );
};

export default Footer;

