import React from 'react';
import { FiShoppingCart } from 'react-icons/fi';

const Navbar = () => {
    return (
    <div className='w-full'>
        <nav className='bg-black h-24 flex items-center'>
            {/* <img></img> */}
            <h1 className='text-3x1 text-white ml-auto'>Login</h1>
            <FiShoppingCart className='text-white text-3xl mx-4' />
        </nav>
    </div>
    )
}


export default Navbar;



