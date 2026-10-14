
import React from "react";
import partnersImage from "../assets/our-partners.svg";

const Partners = () => {
    return (
        <section className="my-12 px-5 sm:my-16 sm:px-8 md:my-20 md:px-12 lg:my-24 lg:px-16 xl:px-24">
            <div className="mx-auto flex max-w-7xl items-center justify-center">
                <img
                    src={partnersImage}
                    alt="Our Partners"
                    className="h-auto w-full max-w-full object-contain"
                />
            </div>
        </section>
    );
};

export default Partners;

