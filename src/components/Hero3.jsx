import React from 'react';
import img from '../assests/3.jpg'
import Image from 'next/image';

const categories = [
  {
    name: 'Apartments',
    image: img,
    listings: 17,
  },
  {
    name: 'Condos',
    image: img,
    listings: 8,
  },
  {
    name: 'Duplexes',
    image: img,
    listings: 0,
  },
  {
    name: 'Houses',
    image: img,
    listings: 5,
  },
  {
    name: 'Offices',
    image: img,
    listings: 2,
  },
  {
    name: 'Villas',
    image: img,
    listings: 4,
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
        <div className='grid grid-cols-1 lg:grid-cols-4 gap-5 pt-10 mx-5 lg:mx-0'>
          {categories.map((category, index) => (
            <div key={category.name} className={`relative h-[350px] w-full ${index === 0 || index === 5 ? 'lg:col-span-2' : 'lg:col-span-1'}`}>
              <Image
                src={category.image}
                alt={category.name}
                layout='fill'
                objectFit='cover'
                className='rounded-lg'
              />
              <div className='absolute inset-0 bg-gradient-to-r from-[#00000080] to-transparent rounded-lg'>
                <h3 className='text-white text-xl font-semibold absolute top-5 left-5'>{category.name}</h3>
                <p className='text-white absolute bottom-5 left-5'>{category.listings} listings</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Hero3;
