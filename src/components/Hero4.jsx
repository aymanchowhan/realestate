import React, { useState } from 'react';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from 'swiper/modules';
import Image from 'next/image';
import { IoBedOutline } from 'react-icons/io5';
import { GiBathtub } from 'react-icons/gi';
import { TbVector } from 'react-icons/tb';
import { CiShare2, CiHeart } from 'react-icons/ci';
import { FaPlus } from 'react-icons/fa';
import img from '../assests/3.jpg'
import agentimg from '../assests/testimonial-1.png'

function Hero4() {
  const [activeIndex, setActiveIndex] = useState(0);

  const properties = [
    {
      image: img,
      title: 'Luxury House in Greenville',
      price: '$860,000',
      description: 'This property is mostly wooded and sits high on a hilltop overlooking the Mohawk River Valley.',
      link: '/',
      type: 'retail',
      room: '2',
      bath: '2',
      area: '1922 ft',
      agentimg: agentimg,
      agentname: 'Estate Developers',
    },
    {
      image: img,
      title: 'Modern Condo for Sale',
      price: '$150,000',
      description: 'Beautiful, updated, ground level Co-op apartment in the desirable Bay Terrace neighborhood.',
      link: '/',
      type: 'forsale',
      room: '2',
      bath: '2',
      area: '1922 ft',
      agentimg: agentimg,
      agentname: 'Estate Developers',
    },
    {
      image: img,
      title: 'Luxury House in Greenville',
      price: '$860,000',
      description: 'This property is mostly wooded and sits high on a hilltop overlooking the Mohawk River Valley.',
      link: '/',
      type: 'retail',
      room: '2',
      bath: '2',
      area: '1922 ft',
      agentimg: agentimg,
      agentname: 'Ayman CHowhan',
    },
    {
      image: img,
      title: 'Luxury House in Greenville',
      price: '$860,000',
      description: 'This property is mostly wooded and sits high on a hilltop overlooking the Mohawk River Valley.',
      link: '/',
      type: 'retail',
      room: '2',
      bath: '2',
      area: '1922 ft',
      agentimg: agentimg,
      agentname: 'Ayman CHowhan',
    },
    {
      image: img,
      title: 'Modern Condo for Sale',
      price: '$150,000',
      description: 'Beautiful, updated, ground level Co-op apartment in the desirable Bay Terrace neighborhood.',
      link: '/',
      type: 'forsale',
      room: '2',
      bath: '2',
      area: '1922 ft',
      agentimg: agentimg,
      agentname: 'Ayman CHowhan',
    },
    {
      image: img,
      title: 'Luxury House in Greenville',
      price: '$860,000',
      description: 'This property is mostly wooded and sits high on a hilltop overlooking the Mohawk River Valley.',
      link: '/',
      type: 'retail',
      room: '2',
      bath: '2',
      area: '1922 ft',
      agentimg: agentimg,
      agentname: 'Estate Developers',
    },
  ];

  return (
    <div className='container mx-auto pt-14 lg:pt-[90px] pb-[70px]'>
      <div className='text-center text-[30px] lg:text-[36px]'>
        Properties for Rent
      </div>
      <div className='text-center px-2 text-[16px] lg:w-[40%] mx-auto text-gray-500 pt-5'>
        These are the latest properties in the Sales category. You can create the list using the “latest listing shortcode” and show items by specific categories.
      </div>
      <div className='lg:mx-[25vh]'>

        <Swiper
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          spaceBetween={50}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          onSlideChange={(e) => setActiveIndex(e.activeIndex)}
          modules={[Pagination, Autoplay]}
          className="mySwiper px-10">

          {properties.map((property, index) => (
            <SwiperSlide key={index}>
              <div className="border shadow-lg mt-5 mb-16 w-[350px]">
                <Image src={property.image} alt={property.title} className="h-[175px] object-cover" />
                <div className="mt-4 px-4">
                  <h3 className="text-lg font-semibold text-[20px]">{property.title}</h3>
                  <p className="text-blue-600 text-[17px]">{property.price}</p>
                  <p className="text-gray-500 text-[13px]">{property.description}</p>
                  <div className="flex justify-between items-center mt-4">
                    <div className="flex space-x-4 text-[13px]">
                      <div className='flex items-center'><IoBedOutline className="mr-1" />{property.room}</div>
                      <div className='flex items-center'><GiBathtub className="mr-1" />{property.bath}</div>
                      <div className='flex items-center'><TbVector className="mr-1" />{property.area}</div>
                    </div>
                  </div>
                  <div className='bg-gray-200 h-[2px] w-[96%] mx-auto my-2' />
                  <div className="flex items-center my-4">
                    <Image src={property.agentimg} alt={property.agentname} width={30} height={20} className='rounded-full'  />
                    <span className="ml-2 text-[13px]">{property.agentname}</span>
                    <div className='flex space-x-4 ml-10'>
                      <div className='border p-1'><CiShare2 /></div>
                      <div className='border p-1'><CiHeart className='' /></div>
                      <div className='border p-1'><FaPlus /></div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default Hero4;
