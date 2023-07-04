import React from 'react';
import Pear from '../assets/pear.png';

const NavLogo = () => {
    return (
      <div className="flex items-center">
        <img src={Pear} alt="pear" className="mr-2 w-7 h-7 md:w-8 md:h-8 lg:w-10 lg:h-10" />
        <h1 className="font-logo text-xl md:text-2xl lg:text-3xl text-white">Market Dash</h1>
      </div>
    );
  };

export default NavLogo;