import React from 'react';
import Pear from '../assets/pear.png';

const Logo = () => {
    return (
      <div className="flex items-center">
        <img src={Pear} alt="pear" className="mr-2 w-6 h-6 w-8 h-8 md:w-10 md:h-10" />
        <h1 className="font-logo text-3xl md:text-4xl text-grass">Market Dash</h1>
      </div>
    );
  };

export default Logo;


