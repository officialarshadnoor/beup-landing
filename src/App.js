import React from 'react';

// import animate on scroll
import Aos from 'aos';
import 'aos/dist/aos.css';

// import components
import Hero from './components/Hero';
import About from './components/About';
import OrderProcess from './components/OderProcess';
import  Testimonials  from './components/Testimonials';
import CtaSection  from './components/CtaSection';
import Footer  from './components/Footer';

const App = () => {
  // aos initialization
  Aos.init({
    duration:1800,
    offset:0,
  });
  return (
   <div className='overflow-hidden'>
    <Hero></Hero>
    <About></About>
    <OrderProcess></OrderProcess>
    <Testimonials/>
    <Footer/>
   </div>
  );
};

export default App;
