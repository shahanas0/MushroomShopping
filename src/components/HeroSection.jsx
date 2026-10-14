
import React from "react";
import Button from "../components/Button";
import { Link } from "react-router-dom";
import mushroomImage from "../assets/image.png";

const HeroSection = () => {
    return (
        <section className="overflow-hidden bg-amber-50 px-5 py-12 sm:px-8 sm:py-16 md:px-12 lg:px-16 lg:py-20 xl:px-24">
            <div className="mx-auto flex max-w-7xl flex-col items-center gap-10 md:gap-12 lg:flex-row lg:gap-10 xl:gap-16">

                <div className="flex w-full flex-col gap-4 text-center lg:w-1/2 lg:text-left">
                    <h3 className="text-lg font-medium sm:text-xl md:text-2xl">
                        100% Natural Products
                    </h3>

                    <h1 className="text-4xl font-extrabold leading-tight sm:text-5xl md:text-6xl lg:text-5xl xl:text-7xl 2xl:text-8xl">
                        MUSHROOM
                    </h1>

                    <p className="mx-auto max-w-2xl text-base leading-7 text-gray-700 sm:text-lg sm:leading-8 lg:mx-0 xl:text-xl xl:leading-9">
                        Mushrooms are edible fungus that can provide several
                        important nutrients. The many kinds of mushroom have
                        varying compositions and nutritional profiles.
                    </p>

                    <div className="mt-3 flex flex-wrap justify-center gap-4 sm:gap-5 lg:justify-start">
                        <Link to="/products">
                            <Button buttonText="Buy Now" />
                        </Link>

                        <a
                            href="#footer"
                            className="flex items-center justify-center rounded-xl border border-black px-6 py-3 font-medium transition-colors duration-300 hover:bg-black hover:text-white sm:px-8"
                        >
                            Contact Now
                        </a>
                    </div>
                </div>

                <div className="flex w-full items-center justify-center lg:w-1/2">
                    <img
                        src={mushroomImage}
                        alt="Fresh natural mushrooms"
                        className="h-auto w-full max-w-xs object-contain sm:max-w-sm md:max-w-md lg:max-w-full"
                    />
                </div>

            </div>
        </section>
    );
};

export default HeroSection;

