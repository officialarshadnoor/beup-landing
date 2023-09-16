import React from 'react';
import { AboutFounderData } from '../data'; // Correct the import statement
import './founder.css';

function AboutFounder() {
  const { name, img, about } = AboutFounderData;
  const createMarkup = () => {
    return { __html: about };
  };

  return (
    <section className="py-12 relative">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center">
          <div className="w-full md:w-1/2">
            <div className="relative">
              <div className="circles-container">
                {/* Add multiple circles with different sizes and colors */}
                <div className="circle circle-1" style={{ left: '10%', top: '20%' }}></div>
                <div className="circle circle-2" style={{ left: '40%', top: '50%' }}></div>
                <div className="circle circle-3" style={{ left: '70%', top: '30%' }}></div>
                {/* Repeat with different positions */}
              </div>
              <img
                src={img}
                alt="Founder"
                className="rounded-full shadow-lg mx-auto z-10"
              />
            </div>
          </div>
          <div className="w-full md:w-1/2 mt-6 md:mt-0">
            <h2 className="text-3xl font-semibold mb-4">About our founder - {name}</h2>
            <div
              className="text-gray-700"
              dangerouslySetInnerHTML={createMarkup()}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutFounder;
