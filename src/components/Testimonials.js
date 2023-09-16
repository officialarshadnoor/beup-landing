import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';

import testimonialData from '../data';

const Testimonials = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      delay: 5000,
    },
    );
  }, []);

  

  return (
    <section className="py-16" data-aos='fade-down' data-aos-delay='200'>
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-gray-800 mb-12" data-aos='fade-down' data-aos-delay='300'>What Our Customers Say</h2>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{ delay: 1000, disableOnInteraction: true }}
          pagination={{ clickable: true }}
          effect="fade"
          className="rounded-lg shadow-lg overflow-hidden"
        >
          {testimonialData.map((testimonial, index) => (
            <SwiperSlide
              key={index}
              className="transition-transform transform hover:scale-105"
            >
              <div
                className="bg-white p-6 mx-4 md:mx-0 md:max-w-md md:mx-auto rounded-lg shadow-lg"
                data-aos='fade-up' data-aos-delay='300'
              >
                <div className="mb-4">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-20 h-20 rounded-full mx-auto"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{testimonial.name}</h3>
                <p className="text-gray-600 text-sm">{testimonial.job}, {testimonial.address}</p>
                <p className="text-gray-700 mt-4">{testimonial.comment}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
