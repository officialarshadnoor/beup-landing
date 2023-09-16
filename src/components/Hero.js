import React from 'react';

// Import hero data (make sure this import is correct)
import { heroData } from '../data';
import Header from '../components/Header';

const Hero = () => {
    const { title, subTitle, btnText, image } = heroData;
    
    return (
        <section className='lg:h-[900px] py-12'>
            <Header></Header>
            <div className='container mx-auto h-full relative'>
                <div className='flex flex-col xl:flex-row items-center h-full md:py-24'>
                {/* Text */}
                <div className='text-center xl:text-left xl:absolute'>
                    <h1 className='h1 xl:max-w-[700px] mb-6 lg:mb-12' data-aos='fade-down' data-aos-delay='400'>{title}</h1>
                    <p className='xl:max-w-[380px] mb-6 lg:mb-12' data-aos='fade-down' data-aos-delay='500'>{subTitle}</p>
                    <button className='btn btn-primary mb-8 xl:mb-0 hover:bg-black hover:text-white' data-aos='fade-down' data-aos-delay='600'>{btnText}</button>
                </div>
                
                {/* Images */}
                <div className='xl:absolute xl:-right-12 xl:bottom-16'>
                    <img src={image} alt="An Unknown brand" width="600"/>
                </div>
            </div>
            </div>
        </section>
    );
};

export default Hero;
