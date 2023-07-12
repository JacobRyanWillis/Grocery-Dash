import React from 'react';
// import { Link } from 'react-router-dom';
import Navbar from '../components/navbar';
import mangos from '../assets/mangos.jpg';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import ChatbotIcon from '../components/chatboticon';

////// pictures here
import rawDried from '../assets/raw_and_dried.png';
import dianas from '../assets/dianas_specialties.png';
import pride from '../assets/pride_road.png';
import gotelli from '../assets/gotelli.png';
import bacon from '../assets/bacon.png';

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
                <h1 className='text-2xl md:text-3xl'> Today's Featured Items </h1>
            </div>
            <div className='bg-light-tan py-4'>
                <Slider {...settings}>
                    <div className='m-2 flex flex-col justify-center items-center'>
                        <img className='h-24 w-24 rounded-full' alt='mangos' src= {mangos}></img>
                        <p className='md:text-lg'> Fresh Mangos </p>
                    </div>
                    <div className='m-2 flex flex-col justify-center items-center'>
                        <img className='h-24 w-24 rounded-full' alt='mangos' src= {mangos}></img>
                        <p className='md:text-lg'> Fresh Mangos </p>
                    </div>
                    <div className='m-2 flex flex-col justify-center items-center'>
                        <img className='h-24 w-24 rounded-full' alt='mangos' src= {mangos}></img>
                        <p className='md:text-lg'> Fresh Mangos </p>
                    </div>
                    <div className='m-2 flex flex-col justify-center items-center'>
                        <img className='h-24 w-24 rounded-full' alt='mangos' src= {mangos}></img>
                        <p className='md:text-lg'> Fresh Mangos </p>
                    </div>
                    <div className='m-2 flex flex-col justify-center items-center'>
                        <img className='h-24 w-24 rounded-full' alt='mangos' src= {mangos}></img>
                        <p className='md:text-lg'> Fresh Mangos </p>
                    </div> 
                </Slider>
            </div>


            <div className='flex justify-center items-center m-2 p-8'>
                <h2 className='text-3xl md:text-4xl font-semibold'> Austell Farmers Market </h2>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-4 px-4'>
                <div className='bg-cFruits m-4 p-4 flex justify-end items-start col-span-2 lg:col-span-1 rounded'>
                    <h2 className='text-3xl md:text-4xl lg:text-4xl font-medium'>Fruits & Vegetables</h2>
                </div>
                <div className='col-span-2'>
                    <div className='grid grid-cols-1 md:grid-cols-2 grid-rows-1 lg:grid-rows-2 gap-4 m-4'>
                        <div className='grid grid-cols-3 shadow-class transition-transform transform hover:scale-105 rounded'>
                            <div className='col-span-1 flex items-center'>
                                <img className='h-full w-auto rounded' src={rawDried} alt='Raw' />
                            </div>
                            <div className='col-span-2 flex flex-col justify-center ml-2 pl-2 md:ml-2 md:pl-2'>
                                <h3 className='text-md mb-2 text-xl md:text-2xl font-normal'>Raw and Dried Co</h3>
                                <p className='md:text-md font-light'>Fruits</p>
                            </div>
                        </div>
                        <div className='grid grid-cols-3 shadow-class transition-transform transform hover:scale-105 rounded'>
                            <div className='col-span-1 flex items-center'>
                                <img className='h-full w-auto rounded' src={gotelli} alt='Mangos' />
                            </div>
                            <div className='col-span-2 flex flex-col justify-center ml-2 pl-2 md:ml-2 md:pl-2'>
                                <h3 className='text-md mb-2 text-xl md:text-2xl font-normal'>Gotelli Farms</h3>
                                <p className='md:text-md font-light'>Vegetables</p>
                            </div>
                        </div>
                        <div className=' grid grid-cols-3 shadow-class transition-transform transform hover:scale-105 rounded'>
                            <div className='col-span-1 flex items-center'>
                                <img className='h-full w-auto rounded' src={mangos} alt='Mangos' />
                            </div>
                            <div className='col-span-2 flex flex-col justify-center ml-2 pl-2 md:ml-2 md:pl-2'>
                                <h3 className='text-md mb-2 text-xl md:text-2xl font-normal'>Mango Boys</h3>
                                <p className='md:text-md'>Fruits</p>
                            </div>
                        </div>
                        <div className=' grid grid-cols-3 shadow-class transition-transform transform hover:scale-105 rounded'>
                            <div className='col-span-1 flex items-center'>
                                <img className='h-full w-auto rounded' src={mangos} alt='Mangos' />
                            </div>
                            <div className='col-span-2 flex flex-col justify-center ml-2 pl-2 md:ml-2 md:pl-2'>
                                <h3 className='text-md mb-2 text-xl md:text-2xl font-medium'>Mango Boys</h3>
                                <p className='md:text-md'>Fruits</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-4 px-4 lg:my-12 lg:py-12'>
                <div className='grid grid-rows-3 gap-4 m-2 p-2'>
                    <div className='bg-cMeats flex justify-start items-start rounded p-4'>
                        <h2 className='text-3xl md:text-4xl lg:text-4xl'>Meats & Seafood</h2>
                    </div>
                    <div className=' grid grid-cols-3 shadow-class transition-transform transform hover:scale-105 rounded'>
                        <div className='col-span-1 flex items-center'>
                            <img className='h-full w-auto rounded' src={dianas} alt='dianas' />
                        </div>
                        <div className='col-span-2 flex flex-col justify-center ml-2 pl-2 md:ml-2 md:pl-2'>
                            <h3 className='text-md mb-2 text-xl md:text-2xl font-medium'>Diana's Specialities</h3>
                            <p className='md:text-md'>Seafood</p>
                        </div>
                    </div>
                    <div className=' grid grid-cols-3 shadow-class transition-transform transform hover:scale-105 rounded'>
                        <div className='col-span-1 flex items-center'>
                            <img className='h-full w-auto rounded' src={bacon} alt='bacon' />
                        </div>
                        <div className='col-span-2 flex flex-col justify-center ml-2 pl-2 md:ml-2 md:pl-2'>
                            <h3 className='text-md mb-2 text-xl md:text-2xl font-medium'>Bacon Bros</h3>
                            <p className='md:text-md'>Meat</p>
                        </div>
                    </div>
                </div>

                <div className='grid grid-rows-3 gap-4 m-2 p-2'>
                    <div className='bg-cDairy flex justify-start items-start rounded p-4'>
                        <h2 className='text-3xl md:text-4xl lg:text-4xl'>Dairy Products</h2>
                    </div>
                    <div className=' grid grid-cols-3 shadow-class transition-transform transform hover:scale-105 rounded'>
                        <div className='col-span-1 flex items-center'>
                            <img className='h-full w-auto rounded' src={mangos} alt='Mangos' />
                        </div>
                        <div className='col-span-2 flex flex-col justify-center ml-2 pl-2 md:ml-2 md:pl-2'>
                            <h3 className='text-md mb-2 text-xl md:text-2xl font-medium'>Mango Boys</h3>
                            <p className='md:text-md'>Fruits</p>
                        </div>
                    </div>
                    <div className=' grid grid-cols-3 shadow-class transition-transform transform hover:scale-105 rounded'>
                        <div className='col-span-1 flex items-center'>
                            <img className='h-full w-auto rounded' src={mangos} alt='Mangos' />
                        </div>
                        <div className='col-span-2 flex flex-col justify-center ml-2 pl-2 md:ml-2 md:pl-2'>
                            <h3 className='text-md mb-2 text-xl md:text-2xl font-normal'>Mango Boys</h3>
                            <p className='md:text-md'>Fruits</p>
                        </div>
                    </div>
                </div>

                <div className='grid grid-rows-3 gap-4 m-2 p-2'>
                    <div className='bg-cBaked flex justify-start items-start rounded p-4'>
                        <h2 className='text-3xl md:text-4xl lg:text-4xl'>Baked Goods</h2>
                    </div>
                    <div className=' grid grid-cols-3 shadow-class transition-transform transform hover:scale-105'>
                        <div className='col-span-1 flex items-center'>
                            <img className='h-full w-auto rounded' src={pride} alt='pride' />
                        </div>
                        <div className='col-span-2 flex flex-col justify-center ml-2 pl-2 md:ml-2 md:pl-2'>
                            <h3 className='text-md mb-2 text-xl md:text-2xl font-medium'>Pride Road</h3>
                            <p className='md:text-md'>Jams</p>
                        </div>
                    </div>
                    <div className=' grid grid-cols-3 shadow-class transition-transform transform hover:scale-105'>
                        <div className='col-span-1 flex items-center'>
                            <img className='h-full w-auto rounded' src={mangos} alt='Mangos' />
                        </div>
                        <div className='col-span-2 flex flex-col justify-center ml-2 pl-2 md:ml-2 md:pl-2'>
                            <h3 className='text-md mb-2 text-xl md:text-2xl font-medium'>Mango Boys</h3>
                            <p className='md:text-md'>Fruits</p>
                        </div>
                    </div>
                </div>
            </div>
            <ChatbotIcon />
        </div>
    )
    
    
};

export default Market;
