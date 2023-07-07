import React from 'react';
// import { Link } from 'react-router-dom';
import Navbar from '../components/navbar';
import mangos from '../assets/mangos.jpg';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './market.css';
import Slider from "react-slick";



const Market = () => {

    const settings = {
        slidesToShow: 5,
        slidesToScroll: 5,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    centerMode: true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
        
                }
            },
                
        ]
    };
    

    return (
        <div className='font-gilroy'>
            <Navbar />
            <div className='m-2 pt-8 ml-10 pl-10'>
                <h1 className='text-2xl'> Today's Featured Items </h1>
            </div>
            <div className='bg-light-tan'>
                <Slider {...settings}>
                    <div className='m-2 flex flex-col justify-center items-center'>
                        <img className='h-24 w-24 rounded-full' alt='mangos' src= {mangos}></img>
                        <p className=''> Fresh Mangos </p>
                    </div>
                    <div className='m-2 flex flex-col justify-center items-center'>
                        <img className='h-24 w-24 rounded-full' alt='mangos' src= {mangos}></img>
                        <p className=''> Fresh Mangos </p>
                    </div>
                    <div className='m-2 flex flex-col justify-center items-center'>
                        <img className='h-24 w-24 rounded-full' alt='mangos' src= {mangos}></img>
                        <p className=''> Fresh Mangos </p>
                    </div>
                    <div className='m-2 flex flex-col justify-center items-center'>
                        <img className='h-24 w-24 rounded-full' alt='mangos' src= {mangos}></img>
                        <p className=''> Fresh Mangos </p>
                    </div>
                    <div className='m-2 flex flex-col justify-center items-center'>
                        <img className='h-24 w-24 rounded-full' alt='mangos' src= {mangos}></img>
                        <p className=''> Fresh Mangos </p>
                    </div> 
                </Slider>
            </div>


            <div className='flex justify-center items-center m-2 p-8'>
                <h2 className='text-3xl font-semibold'> Austell Farmers Market </h2>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-4 px-4'>
                <div className='bg-cFruits m-4 p-4 shadow-class flex justify-end items-start col-span-2 lg:col-span-1 rounded'>
                    <h2 className='text-3xl md:text-4xl lg:text-5xl'>Fruits & Vegetables</h2>
                </div>
                <div className='col-span-2'>
                    <div className='grid grid-cols-1 md:grid-cols-2 grid-rows-1 lg:grid-rows-2 gap-4 m-4'>
                        <div className=' grid grid-cols-3 shadow-class transition-transform transform hover:scale-105 rounded'>
                            <div className='col-span-1 flex items-center'>
                                <img className='h-full w-auto rounded' src={mangos} alt='Mangos' />
                            </div>
                            <div className='col-span-2 flex flex-col justify-center ml-2 pl-2 md:ml-6 md:pl-6'>
                                <h3 className='text-md mb-2 text-xl font-semibold'>Mango Boys</h3>
                                <p className=''>Fruits</p>
                            </div>
                        </div>
                        <div className=' grid grid-cols-3 shadow-class transition-transform transform hover:scale-105 rounded'>
                            <div className='col-span-1 flex items-center'>
                                <img className='h-full w-auto rounded' src={mangos} alt='Mangos' />
                            </div>
                            <div className='col-span-2 flex flex-col justify-center ml-2 pl-2 md:ml-6 md:pl-6'>
                                <h3 className='text-md mb-2 text-xl font-semibold'>Mango Boys</h3>
                                <p className=''>Fruits</p>
                            </div>
                        </div>
                        <div className=' grid grid-cols-3 shadow-class transition-transform transform hover:scale-105 rounded'>
                            <div className='col-span-1 flex items-center'>
                                <img className='h-full w-auto rounded' src={mangos} alt='Mangos' />
                            </div>
                            <div className='col-span-2 flex flex-col justify-center ml-2 pl-2 md:ml-6 md:pl-6'>
                                <h3 className='text-md mb-2 text-xl font-semibold'>Mango Boys</h3>
                                <p className=''>Fruits</p>
                            </div>
                        </div>
                        <div className=' grid grid-cols-3 shadow-class transition-transform transform hover:scale-105 rounded'>
                            <div className='col-span-1 flex items-center'>
                                <img className='h-full w-auto rounded' src={mangos} alt='Mangos' />
                            </div>
                            <div className='col-span-2 flex flex-col justify-center ml-2 pl-2 md:ml-6 md:pl-6'>
                                <h3 className='text-md mb-2 text-xl font-semibold'>Mango Boys</h3>
                                <p className=''>Fruits</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-4 px-4 lg:my-12 lg:py-12'>
                <div className='grid grid-rows-3 gap-4 m-2 p-2'>
                    <div className='bg-cMeats shadow-class flex justify-start items-start rounded p-4'>
                        <h2 className='text-3xl md:text-4xl lg:text-5xl'>Meats & Seafood</h2>
                    </div>
                    <div className=' grid grid-cols-3 shadow-class transition-transform transform hover:scale-105 rounded'>
                        <div className='col-span-1 flex items-center'>
                            <img className='h-full w-auto rounded' src={mangos} alt='Mangos' />
                        </div>
                        <div className='col-span-2 flex flex-col justify-center ml-2 pl-2 md:ml-6 md:pl-6'>
                            <h3 className='text-md mb-2 text-xl font-semibold'>Mango Boys</h3>
                            <p className=''>Fruits</p>
                        </div>
                    </div>
                    <div className=' grid grid-cols-3 shadow-class transition-transform transform hover:scale-105 rounded'>
                        <div className='col-span-1 flex items-center'>
                            <img className='h-full w-auto rounded' src={mangos} alt='Mangos' />
                        </div>
                        <div className='col-span-2 flex flex-col justify-center ml-2 pl-2 md:ml-6 md:pl-6'>
                            <h3 className='text-md mb-2 text-xl font-semibold'>Mango Boys</h3>
                            <p className=''>Fruits</p>
                        </div>
                    </div>
                </div>

                <div className='grid grid-rows-3 gap-4 m-2 p-2'>
                    <div className='bg-cDairy shadow-class flex justify-start items-start rounded p-4'>
                        <h2 className='text-3xl md:text-4xl lg:text-5xl'>Dairy Products</h2>
                    </div>
                    <div className=' grid grid-cols-3 shadow-class transition-transform transform hover:scale-105 rounded'>
                        <div className='col-span-1 flex items-center'>
                            <img className='h-full w-auto rounded' src={mangos} alt='Mangos' />
                        </div>
                        <div className='col-span-2 flex flex-col justify-center ml-2 pl-2 md:ml-6 md:pl-6'>
                            <h3 className='text-md mb-2 text-xl font-semibold'>Mango Boys</h3>
                            <p className=''>Fruits</p>
                        </div>
                    </div>
                    <div className=' grid grid-cols-3 shadow-class transition-transform transform hover:scale-105 rounded'>
                        <div className='col-span-1 flex items-center'>
                            <img className='h-full w-auto rounded' src={mangos} alt='Mangos' />
                        </div>
                        <div className='col-span-2 flex flex-col justify-center ml-2 pl-2 md:ml-6 md:pl-6'>
                            <h3 className='text-md mb-2 text-xl font-semibold'>Mango Boys</h3>
                            <p className=''>Fruits</p>
                        </div>
                    </div>
                </div>

                <div className='grid grid-rows-3 gap-4 m-2 p-2'>
                    <div className='bg-cBaked shadow-class flex justify-start items-start rounded p-4'>
                        <h2 className='text-3xl md:text-4xl lg:text-5xl'>Baked Goods</h2>
                    </div>
                    <div className=' grid grid-cols-3 shadow-class transition-transform transform hover:scale-105'>
                        <div className='col-span-1 flex items-center'>
                            <img className='h-full w-auto rounded' src={mangos} alt='Mangos' />
                        </div>
                        <div className='col-span-2 flex flex-col justify-center ml-2 pl-2 md:ml-6 md:pl-6'>
                            <h3 className='text-md mb-2 text-xl font-semibold'>Mango Boys</h3>
                            <p className=''>Fruits</p>
                        </div>
                    </div>
                    <div className=' grid grid-cols-3 shadow-class transition-transform transform hover:scale-105'>
                        <div className='col-span-1 flex items-center'>
                            <img className='h-full w-auto rounded' src={mangos} alt='Mangos' />
                        </div>
                        <div className='col-span-2 flex flex-col justify-center ml-2 pl-2 md:ml-6 md:pl-6'>
                            <h3 className='text-md mb-2 text-xl font-semibold'>Mango Boys</h3>
                            <p className=''>Fruits</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
    
    
};

export default Market;
