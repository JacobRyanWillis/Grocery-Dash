/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState, useEffect } from 'react';
// import Navbar from '../components/navbar';
import About from '../components/about';
import Logo from '../components/logo';
import Austell from '../assets/austell-market.jpg';
import Marietta from '../assets/marietta-market.jpg';
import Asheville from '../assets/asheville-market.jpg';
// import Hero from '../assets/hero-image.jpg';
// import { Link } from 'react-router-dom';

const Home = () => {
  const [showScrollHint, setShowScrollHint] = useState(true);

  useEffect(() => {
    // Function to handle scroll event
    const handleScroll = () => {
      // Calculate the scroll position
      const scrollPosition = window.scrollY;
      // Set the state to hide the scroll hint if the user scrolled down
      if (scrollPosition > 300) {
        setShowScrollHint(false);
      }
    };

    // Add the event listener when the component mounts
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      {/* <Navbar /> */}
      <div className="md:h-screen grid grid-cols-1 lg:grid-cols-2">
        <div className='flex flex-col ml-4 mr-4 lg:ml-6 space-y-8 mt-5 lg:mt-20'>
          <Logo />
          <h2 className='text-2xl md:text-4xl font-gilroy'>Welcome! Select your farmers market</h2>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 md:mr-20 md:pt-10'>
            <div className="relative">
              <img src={Austell} alt="Austell Market" className='w-full h-auto rounded drop-shadow-2xl' />
              <p className="absolute font-gilroy bottom-0 left-0 w-full bg-black bg-opacity-70 text-white text-center p-2 rounded">Austell</p>
            </div>
            <div className="relative">
              <img src={Marietta} alt="Marietta Market" className='w-full h-auto rounded drop-shadow-2xl' />
              <p className="absolute font-gilroy bottom-0 left-0 w-full bg-black bg-opacity-70 text-white text-center p-2 rounded">Marietta</p>
            </div>
            <div className="relative">
              <img src={Asheville} alt="Asheville Market" className='w-full h-auto rounded drop-shadow-2xl' />
              <p className="absolute font-gilroy bottom-0 left-0 w-full bg-black bg-opacity-70 text-white text-center p-2 rounded">Asheville</p>
            </div>
          </div>
          {showScrollHint && (
          <div className="flex flex-col items-center md:items-end mt-4">
            {/* <span className="text-gray-500 text-sm">Get to know us</span> */}
            <svg className="animate-bounce w-12 h-12 text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
          )}
        </div>
        <div>
          {/* <img src={Hero} alt="hero-image" className='w-full h-auto'/> */}
        </div>
      </div>
      <About />
    </div>
  );
}


export default Home;