
import React, { useState } from "react";
import Button from "./Button";
import { FaPhoneAlt, FaBars, FaTimes } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const closeMenu = () => setMenuOpen(false);

    return (
        <header className="w-full bg-white">
            <div className="bg-black px-4 py-3 text-gray-300">
                <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm sm:gap-x-10 sm:text-base">
                    <li className="flex items-center hover:text-white">
                        <a
                            href="mailto:hello@shopping.com"
                            className="flex items-center gap-2"
                        >
                            <MdEmail className="text-xl sm:text-2xl" />
                            <span>hello@shopping.com</span>
                        </a>
                    </li>

                    <li className="flex items-center hover:text-white">
                        <a
                            href="tel:+0927627728525"
                            className="flex items-center gap-2"
                        >
                            <FaPhoneAlt className="text-base sm:text-lg" />
                            <span>+0927 6277 28525</span>
                        </a>
                    </li>
                </ul>
            </div>

            <div className="relative flex items-center justify-between px-4 py-4 sm:px-6 lg:px-10 xl:px-20">
                <Link to="/" onClick={closeMenu} className="shrink-0">
                    <img
                        src="src/assets/logo.svg"
                        alt="Shopping Logo"
                        className="h-10 w-auto sm:h-12"
                    />
                </Link>

                <nav className="hidden lg:block">
                    <ul className="flex items-center gap-7 text-lg font-medium text-gray-700 xl:gap-10 xl:text-xl">
                        <li className="transition-colors hover:text-orange-700">
                            <Link to="/">Home</Link>
                        </li>

                        <li className="transition-colors hover:text-orange-700">
                            <Link to="/blog">Blog</Link>
                        </li>

                        <li className="transition-colors hover:text-orange-700">
                            <Link to="/products">Products</Link>
                        </li>

                        <li className="transition-colors hover:text-orange-700">
                            <Link to="/reviews">Reviews</Link>
                        </li>
                    </ul>
                </nav>

                <div className="hidden items-center gap-3 lg:flex xl:gap-5">
                    <Link
                        to="/login"
                        className="rounded-xl border-2 border-transparent px-5 py-3 text-lg font-bold transition-all duration-300 hover:border-orange-700 hover:text-orange-700 xl:px-7"
                    >
                        Log in
                    </Link>

                    <Link to="/register">
                        <Button buttonText="Sign Up" />
                    </Link>
                </div>

                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="flex h-10 w-10 items-center justify-center rounded-lg text-2xl text-gray-800 transition-colors hover:bg-orange-50 hover:text-orange-700 lg:hidden"
                    aria-label={menuOpen ? "Close menu" : "Open menu"}
                    aria-expanded={menuOpen}
                >
                    {menuOpen ? <FaTimes /> : <FaBars />}
                </button>
            </div>

            <div
                className={`absolute left-0 z-50 w-full border-t border-gray-200 bg-white shadow-lg transition-all duration-300 lg:hidden ${menuOpen
                        ? "visible translate-y-0 opacity-100"
                        : "invisible -translate-y-2 opacity-0"
                    }`}
            >
                <nav className="px-5 py-5">
                    <ul className="flex flex-col gap-1 text-base font-medium text-gray-700">
                        <li>
                            <Link
                                to="/"
                                onClick={closeMenu}
                                className="block rounded-lg px-4 py-3 transition-colors hover:bg-orange-50 hover:text-orange-700"
                            >
                                Home
                            </Link>
                        </li>

                        <li>
                            <Link
                                to="/blog"
                                onClick={closeMenu}
                                className="block rounded-lg px-4 py-3 transition-colors hover:bg-orange-50 hover:text-orange-700"
                            >
                                Blog
                            </Link>
                        </li>

                        <li>
                            <Link
                                to="/products"
                                onClick={closeMenu}
                                className="block rounded-lg px-4 py-3 transition-colors hover:bg-orange-50 hover:text-orange-700"
                            >
                                Products
                            </Link>
                        </li>

                        <li>
                            <Link
                                to="/reviews"
                                onClick={closeMenu}
                                className="block rounded-lg px-4 py-3 transition-colors hover:bg-orange-50 hover:text-orange-700"
                            >
                                Reviews
                            </Link>
                        </li>
                    </ul>

                    <div className="mt-4 flex flex-col gap-3 border-t border-gray-200 pt-4 sm:flex-row">
                        <Link
                            to="/login"
                            onClick={closeMenu}
                            className="flex items-center justify-center rounded-xl border-2 border-orange-700 px-5 py-3 font-bold text-orange-700 transition-colors hover:bg-orange-50"
                        >
                            Log in
                        </Link>

                        <Link
                            to="/register"
                            onClick={closeMenu}
                            className="flex justify-center"
                        >
                            <Button buttonText="Sign Up" />
                        </Link>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Header;

