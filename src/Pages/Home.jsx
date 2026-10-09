import React from 'react'
import HeroSection from '../components/HeroSection'
import Partners from '../components/Partners'
import Service from '../components/Service'
import Details from '../components/Details'
import AboutUs from '../components/AboutUs'
import Subscribe from '../components/Subscribe'

const Home = () => {
    return (
        <div>
            <HeroSection />
            <Partners/>
            <Service />
            <Details />
            <AboutUs/>
            <Subscribe />
            
        </div>
    )
}

export default Home