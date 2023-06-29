/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import Navbar from '../components/navbar'
import About from '../components/about'
// import { Link } from 'react-router-dom';

const Home = () => {
    return (
      <div>
        <Navbar />
        <div className="h-screen">
            <h1 className="text-3xl font-bold underline sm:text-4xl md:text-5xl">
                Choose your farmers market
            </h1>
        </div>
        <About />
      </div>
    );
  }


export default Home;