import React from 'react';
import img from '../assests/3.jpg'
import Image from 'next/image';

const categories = [
  {
    name: 'Apartments',
    image: img,
    listings: 17,
    width: 600,
    height: 400,
  },
  {
    name: 'Condos',
    image: img,
    listings: 8,
    width: 265,
    height: 300,
  },
  {
    name: 'Duplexes',
    image: img,
    listings: 0,
    width: 265,
    height: 300,
  },
  {
    name: 'Houses',
    image: img,
    listings: 5,
    width: 265,
    height: 300,
  },
  {
    name: 'Offices',
    image: img,
    listings: 2,
    width: 260,
    height: 300,
  },
  {
    name: 'Villas',
    image: img,
    listings: 4,
    width: 600,
    height: 400,
  },
];

function Hero3() {
  return (
    <div className='container mx-auto pt-14 lg:pt-[90px] pb-[70px] bg-blue-300'>
      <div className='text-center text-[30px] lg:text-[36px]'>
        Properties by Categories
      </div>
      <div className='text-center px-2 text-[16px] lg:w-[40%] mx-auto text-gray-500 pt-5'>
        These are the latest properties in the Sales category. You can create the list using the “latest listing shortcode” and show items by specific categories.
      </div>
      <div className='bg-blue-300 lg:mx-[20vh] mt-10'>
        <div className='grid grid-cols-1 lg:grid-cols-4 gap-3 pt-10'>
          {categories.map((category) => (
            <div
              key={category.name}
              className='relative'
              style={{
                width: `${category.width}px`,
                height: `${category.height}px`,
                gridColumn: `span ${Math.ceil(category.width / 300)}`,
              }}
            >
              <Image
                src={category.image}
                alt={category.name}
                layout='fill'
                objectFit='cover'
                className='rounded-lg'
              />
              <div className='absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center rounded-lg'>
                <h3 className='text-white text-xl font-semibold'>{category.name}</h3>
                <p className='text-white'>{category.listings} listings</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Hero3;
