import React from 'react';
import Pear from '../assets/pear.png';

const NavLogo = () => {
    return (
      <div className="flex items-center">
        <img src={Pear} alt="pear" className="mr-2 w-8 h-8 md:w-10 md:h-10" />
        <h1 className="font-logo text-2xl md:text-3xl lg:text-4xl text-white">Market Dash</h1>
      </div>
    );
  };

export default NavLogo;