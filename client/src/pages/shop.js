import React from 'react'
import Navbar from '../components/navbar'
import mangos from '../assets/mangos.jpg';
import austell from '../assets/austell-market.jpg';


const Shop = () => {
    return (
        <div>
            <Navbar />
            <div className='grid grid-cols-5'>
                <div className='col-start-2 col-span-4 mx-8 mt-20'>
                    <h1 className='text-5xl font-bold my-2'> Mango Boys </h1>
                    <p className='text-xl my-2'> Specialties: Fruits and Vegetables</p>
                </div>
                <div className='col-span-1 bg-tan text-7xl'>
                    Filter Goes Here
                </div>
                <div className='col-span-4 grid grid-cols-4'>
                    <div className='m-8 flex flex-col justify-center items-center grid grid-rows-2 rounded shadow-class'>
                        <img className='h-full w-auto rounded' alt='mangos' src= {austell}></img>
                        <div className='p-4'>
                            <p className='md:text-lg my-6'>Fresh Mangos</p>
                            <p className='md:text-lg my-6'>$2/lb</p>
                            <button
                            className="flex w-full justify-center rounded-md bg-grass px-3 py-1.5 text-xl font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 max-w-xs"
                            >
                            Add to Cart
                            </button>
                        </div>
                    </div>
                    <div className='m-8 flex flex-col justify-center items-center grid grid-rows-2 rounded shadow-class'>
                        <img className='h-full w-auto rounded' alt='mangos' src= {mangos}></img>
                        <div className='p-4'>
                            <p className='md:text-lg my-6'>Fresh Mangos</p>
                            <p className='md:text-lg my-6'>$2/lb</p>
                            <button
                            className="flex w-full justify-center rounded-md bg-grass px-3 py-1.5 text-xl font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 max-w-xs"
                            >
                            Add to Cart
                            </button>
                        </div>
                    </div>
                    <div className='m-8 flex flex-col justify-center items-center grid grid-rows-2 rounded shadow-class'>
                        <img className='h-full w-auto rounded' alt='mangos' src= {mangos}></img>
                        <div className='p-4'>
                            <p className='md:text-lg my-6'>Fresh Mangos</p>
                            <p className='md:text-lg my-6'>$2/lb</p>
                            <button
                            className="flex w-full justify-center rounded-md bg-grass px-3 py-1.5 text-xl font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 max-w-xs"
                            >
                            Add to Cart
                            </button>
                        </div>
                    </div>
                    <div className='m-8 flex flex-col justify-center items-center grid grid-rows-2 rounded shadow-class'>
                        <img className='h-full w-auto rounded' alt='mangos' src= {mangos}></img>
                        <div className='p-4'>
                            <p className='md:text-lg my-6'>Fresh Mangos</p>
                            <p className='md:text-lg my-6'>$2/lb</p>
                            <button
                            className="flex w-full justify-center rounded-md bg-grass px-3 py-1.5 text-xl font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 max-w-xs"
                            >
                            Add to Cart
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Shop;