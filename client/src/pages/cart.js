import React from 'react';
import Navbar from '../components/navbar';
import mangos from '../assets/mangos.jpg';
import austell from '../assets/austell-market.jpg'

const Cart = () => {
    return (
        <div className='h-screen'>
            <Navbar />
            <div className='font-gilroy grid grid-cols-1 md:grid-cols-2 gap-4 mx-auto mt-10 max-w-6xl'>
                <div className='text-3xl md:text-4xl col-span-1 mx-auto md:mx-0 md:col-span-2 font-semibold'>
                    <h1> My Cart </h1>
                </div>
                <div className='m-2 shadow-class rounded grid grid-cols-3'>
                    <div className='col-span-1'>
                        <img
                        className='h-full w-auto object-cover rounded'
                        src={mangos}
                        alt='mangos'
                        />
                    </div>
                    <div className='col-span-2 flex flex-col justify-center pl-4'>
                        <h3 className='text-xl'>Mango Boys</h3>
                        <button className="rounded-md bg-eggplant px-2 py-1 mt-2 text-base font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 max-w-xs self-start">
                            Remove
                        </button>
                    </div>
                </div>
                <div className='m-2 shadow-class rounded grid grid-cols-3'>
                    <div className='col-span-1'>
                        <img
                        className='h-full w-auto object-cover rounded'
                        src={mangos}
                        alt='mangos'
                        />
                    </div>
                    <div className='col-span-2 flex flex-col justify-center pl-4'>
                        <h3 className='text-xl'>Mango Boys</h3>
                        <button className="rounded-md bg-eggplant px-2 py-1 mt-2 text-base font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 max-w-xs self-start">
                            Remove
                        </button>
                    </div>
                </div>
                <div className='m-2 shadow-class rounded grid grid-cols-3'>
                    <div className='col-span-1'>
                        <img
                        className='h-full w-auto object-cover rounded'
                        src={mangos}
                        alt='mangos'
                        />
                    </div>
                    <div className='col-span-2 flex flex-col justify-center pl-4'>
                        <h3 className='text-xl'>Mango Boys</h3>
                        <button className="rounded-md bg-eggplant px-2 py-1 mt-2 text-base font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 max-w-xs self-start">
                            Remove
                        </button>
                    </div>
                </div>
                <div className='m-2 shadow-class rounded grid grid-cols-3'>
                    <div className='col-span-1'>
                        <img
                        className='h-full w-auto object-cover rounded'
                        src={mangos}
                        alt='mangos'
                        />
                    </div>
                    <div className='col-span-2 flex flex-col justify-center pl-4'>
                        <h3 className='text-xl'>Mango Boys</h3>
                        <button className="rounded-md bg-eggplant px-2 py-1 mt-2 text-base font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 max-w-xs self-start">
                            Remove
                        </button>
                    </div>
                </div>
            </div>
            <div className='flex flex-col justify-center items-center m-2 p-2'>
                <h2 className='text-2xl md:text-3xl'> Sub-total: </h2>
                <button className="rounded-md bg-grass px-2 py-1 mt-2 text-base font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 max-w-xs">
                            Pay now
                </button>
            </div>
        </div>
    )
    
}


export default Cart;