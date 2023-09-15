import React from 'react'

// import about data
import {aboutSecData} from '../data';

const About = () => {
    const {image1, title1, subTitle1,image2, title2, subTitle2,image3, title3, subTitle3,image4, title4, subTitle4} = aboutSecData;
    return (
        <section className='py-16 xl:py-32' data-aos='fade-up' data-aos-offset='350'>
  <div className='container mx-auto'>
    {/* Item 1 */}
    <div className='bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 rounded-3xl shadow-2xl px-8 py-8 md:py-12 lg:px-16 xl:px-20 xl:py-16 flex flex-col md:flex-row justify-between items-center xl:gap-x-12 mt-8 md:mt-16'>
      {/* Image section */}
      <div className='flex-1 mb-8 md:mb-0' data-aos='zoom-in-left'>
        <img src={image1} width="350" alt="Product 1" className='rounded-lg shadow-lg' />
      </div>
      {/* Text */}
      <div className='flex-1 text-center md:text-left md:pr-8'>
        <h2 className='text-4xl font-bold text-white mb-6' data-aos='fade-up' data-aos-delay='300'>{title1}</h2>
        <p className='text-gray-200 text-lg leading-relaxed mb-8' data-aos='fade-up' data-aos-delay='400'>{subTitle1}</p>
        <button className='bg-primary text-white py-3 px-8 rounded-full hover:bg-primary-dark transition duration-300 ease-in-out transform hover:scale-105'>Shop Now</button>
      </div>
    </div>
    {/* Item 2 */}
    <div className='bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 rounded-3xl shadow-2xl px-8 py-8 md:py-12 lg:px-16 xl:px-20 xl:py-16 flex flex-col md:flex-row justify-between items-center xl:gap-x-12 mt-8 md:mt-16'>
      {/* Image section */}
      <div className='flex-1 mb-8 md:mb-0' data-aos='zoom-in-left'>
        <img src={image2} width="350" alt="Product 2" className='rounded-lg shadow-lg' />
      </div>
      {/* Text */}
      <div className='flex-1 text-center md:text-left md:pr-8'>
        <h2 className='text-4xl font-bold text-white mb-6' data-aos='fade-up' data-aos-delay='300'>{title2}</h2>
        <p className='text-gray-200 text-lg leading-relaxed mb-8' data-aos='fade-up' data-aos-delay='400'>{subTitle2}</p>
        <button className='bg-primary text-white py-3 px-8 rounded-full hover:bg-primary-dark transition duration-300 ease-in-out transform hover:scale-105'>Shop Now</button>
      </div>
    </div>
    {/* Item 3 */}
    <div className='bg-gradient-to-r from-green-400 via-teal-500 to-blue-500 rounded-3xl shadow-2xl px-8 py-8 md:py-12 lg:px-16 xl:px-20 xl:py-16 flex flex-col md:flex-row justify-between items-center xl:gap-x-12 mt-8 md:mt-16'>
      {/* Image section */}
      <div className='flex-1 mb-8 md:mb-0' data-aos='zoom-in-left'>
        <img src={image3} width="350" alt="Product 3" className='rounded-lg shadow-lg' />
      </div>
      {/* Text */}
      <div className='flex-1 text-center md:text-left md:pr-8'>
        <h2 className='text-4xl font-bold text-white mb-6' data-aos='fade-up' data-aos-delay='300'>{title3}</h2>
        <p className='text-gray-200 text-lg leading-relaxed mb-8' data-aos='fade-up' data-aos-delay='400'>{subTitle3}</p>
        <button className='bg-primary text-white py-3 px-8 rounded-full hover:bg-primary-dark transition duration-300 ease-in-out transform hover:scale-105'>Shop Now</button>
      </div>
    </div>
    {/* Item 4 */}
    <div className='bg-gradient-to-r from-blue-500 via-cyan-500 to-teal-500 rounded-3xl shadow-2xl px-8 py-8 md:py-12 lg:px-16 xl:px-20 xl:py-16 flex flex-col md:flex-row justify-between items-center xl:gap-x-12 mt-8 md:mt-16'>
      {/* Image section */}
      <div className='flex-1 mb-8 md:mb-0' data-aos='zoom-in-left'>
        <img src={image4} width="350" alt="Product 4" className='rounded-lg shadow-lg' />
      </div>
      {/* Text */}
      <div className='flex-1 text-center md:text-left md:pr-8'>
        <h2 className='text-4xl font-bold text-white mb-6' data-aos='fade-up' data-aos-delay='300'>{title4}</h2>
        <p className='text-gray-200 text-lg leading-relaxed mb-8' data-aos='fade-up' data-aos-delay='400'>{subTitle4}</p>
        <button className='bg-primary text-white py-3 px-8 rounded-full hover:bg-primary-dark transition duration-300 ease-in-out transform hover:scale-105'>Shop Now</button>
      </div>
    </div>
  </div>
</section>

    );
};

export default About;