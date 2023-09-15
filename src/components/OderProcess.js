import React, { useEffect } from 'react';
import { FaShoppingCart, FaCreditCard, FaCheck, FaTruck, FaBoxOpen } from 'react-icons/fa';

import AOS from 'aos';
import 'aos/dist/aos.css';

const OrderProcess = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Set the duration of animations
      offset: 50, // Set the offset (in px) from the original trigger point
      once: true, // Only run once while scrolling down
    });
  }, []);

  return (
    <section className="py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-gray-800 mb-12">Easy Ordering Process</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Step 1: Order */}
          <div
            className="order-step bg-white p-8 rounded-lg shadow-lg"
            data-aos="fade-up" data-aos-delay="200"
          >
            <div className="mb-6 text-4xl text-blue-600">
              <FaShoppingCart className='text-center mx-auto'/>
            </div>
            <h3 className="text-lg font-semibold mb-4">Order</h3>
            <p className="text-gray-700">Select your products</p>
          </div>

          {/* Step 2: Payment */}
          <div
            className="order-step bg-white p-8 rounded-lg shadow-lg"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div className="mb-6 text-4xl text-green-600">
              <FaCreditCard  className='text-center mx-auto'/>
            </div>
            <h3 className="text-lg font-semibold mb-4">Payment</h3>
            <p className="text-gray-700">Securely pay online</p>
          </div>

          {/* Step 3: Shipping */}
          <div
            className="order-step bg-white p-8 rounded-lg shadow-lg"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <div className="mb-6 text-4xl text-yellow-600">
              <FaTruck  className='text-center mx-auto'/>
            </div>
            <h3 className="text-lg font-semibold mb-4">Shipping</h3>
            <p className="text-gray-700">Fast and reliable delivery</p>
          </div>

          {/* Step 4: Receive */}
          <div
            className="order-step bg-white p-8 rounded-lg shadow-lg"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            <div className="mb-6 text-4xl text-indigo-600">
              <FaBoxOpen  className='text-center mx-auto'/>
            </div>
            <h3 className="text-lg font-semibold mb-4">Receive</h3>
            <p className="text-gray-700">Get your order within a week</p>
          </div>

          {/* Payment Success */}
          <div
            className="order-step bg-white p-8 rounded-lg shadow-lg"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            <div className="mb-6 text-4xl text-purple-600">
              <FaCheck  className='text-center mx-auto'/>
            </div>
            <h3 className="text-lg font-semibold mb-4">Payment Success</h3>
            <p className="text-gray-700">Your order is confirmed</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrderProcess;