import React from 'react'
import img from '../assests/3.jpg';
import Image from 'next/image';

function Hero1() {
    const data = [
        {
            img: img,
            name: 'Jersey City',
            list: '25 listings'
        },
        {
            img: img,
            name: 'The Heights',
            list: '16 listings'
        },
        {
            img: img,
            name: 'New Jersey State',
            list: '25 listings'
        },
        {
            img: img,
            name: 'New York State',
            list: '16 listings'
        },
        {
            img: img,
            name: 'New York',
            list: '17 listings'
        },
        {
            img: img,
            name: 'Bayonne',
            list: '5 listings'
        },
        {
            img: img,
            name: 'Greenville',
            list: '17 listings'
        },
        {
            img: img,
            name: 'Manhattan',
            list: '8 listings'
        },
        {
            img: img,
            name: 'Upper East Side',
            list: '3 listings'
        },
        {
            img: img,
            name: 'Queens',
            list: '4 listings'
        },
        {
            img: img,
            name: 'West Side',
            list: '1 listing'
        },
        {
            img: img,
            name: 'West Village',
            list: '1 listing'
        }
    ];

    return (
        <div id='services' className='container mx-auto pt-14 lg:pt-[90px] pb-[70px] bg-[#F4F9FE]'>
            <div className='text-center text-[30px] lg:text-[36px]'>
                Properties by Area
            </div>
            <div className='text-center px-2 text-[16px] lg:w-[40%] mx-auto text-gray-500 pt-5'>
                Highlight the best of your properties by using the List Category shortcode. You can list categories, types, cities, areas and states of your choice.
            </div>
            <div className='bg-white lg:mx-[30vh] mt-10 shadow-xl shadow-blue-100'>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 px-6 py-8'>
                    {data.map((item, index) => (
                        <div key={index} className='flex items-center p-4'>
                            <Image src={item.img} alt={item.name} className='h-[75px] w-[75px] object-cover rounded-md mr-4' />
                            <div>
                                <div className='text-xl font-bold text-[#0F1D46] mb-2'>
                                    {item.name}
                                </div>
                                <div className='text-base text-gray-600'>
                                    {item.list}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Hero1;
