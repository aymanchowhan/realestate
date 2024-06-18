
import React, { useState } from 'react'
import Link from 'next/link';
import img from '../assests/3.jpg';
import Image from 'next/image';
import { IoBedOutline } from "react-icons/io5";
import { GiBathtub } from "react-icons/gi";
import { TbVector } from "react-icons/tb";
import agentimg from '../assests/testimonial-1.png'
import { FaHome } from 'react-icons/fa';
import { FaPlus } from "react-icons/fa6";
import { CiShare2 } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
function Hero3() {
  const [tab, setTab] = useState('forsale');


  const tabList = [
    {
      name: 'For Sale',
      tab: 'forsale',
      icon: <FaHome />
    },
    {
      name: 'Villas',
      tab: 'villas',
      icon: <FaHome />
    },
    {
      name: 'Apartments',
      tab: 'apartments',
      icon: <FaHome />
    },
    {
      name: 'Houses',
      tab: 'houses',
      icon: <FaHome />
    },
    {
      name: 'Condos',
      tab: 'condos',
      icon: <FaHome />
    },
    {
      name: 'Retail',
      tab: 'retail',
      icon: <FaHome />
    },

  ]

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

  ];


  return (
    <div className='container mx-auto pt-14 lg:pt-[90px] pb-[70px]'>
      <div className='text-center text-[30px] lg:text-[36px]'>
        Latest Properties
      </div>
      <div className='text-center px-2 text-[16px] lg:w-[40%] mx-auto text-gray-500 pt-5'>
        Highlight the best of your properties by using the List Category shortcode. You can list specific properties categories, types, cities, areas.
      </div>
      <div className='flex justify-center mt-10 lg:gap-6'>

        {
          tabList.map((item, i) =>
            <div key={i} onClick={() => setTab(item.tab)} className={`${tab === item.tab && 'bg-blue-400'} px-5 py-2 cursor-pointer duration-500 my-auto flex items-center gap-3 bg-gray-200`}>{item.icon}{item.name}</div>

          )
        }

      </div>
      <div className='bg-white lg:mx-[35vh] mt-10 '>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {properties.map((property, index) => (
            <div key={index} className="border rounded-lg p-4 shadow-lg">
              <Image src={property.image} alt={property.title} className="h-[175px] w-[305px] object-cover rounded-md" />
              <div className="mt-4">
                <h3 className="text-lg font-semibold text-[20px]">{property.title}</h3>
                <p className="text-blue-600 text-[17px]">{property.price}</p>
                <p className="text-gray-500 text-[13px]">{property.description}</p>
                <div className="flex justify-between items-center mt-4">
                  <div className="flex space-x-4 text-[13px]">
                    <div className='flex items-center '><IoBedOutline className="mr-1" />{property.room}</div>
                    <div className='flex items-center'><GiBathtub className="mr-1" />{property.bath}</div>
                    <div className='flex items-center'><TbVector className="mr-1" />{property.area}</div>
                  </div>
                </div>
                <div className='bg-gray-200 h-[2px] w-[96%] mx-auto my-2' />
                <div className="flex items-center mt-4">
                  <Image src={property.agentimg} alt={property.agentname} width={30} height={30} className="rounded-full" />
                  <span className="ml-2">{property.agentname}</span>
    
                  <div className='flex space-x-4 ml-10'>
                    <div className='border'><CiShare2 /></div>
                    <div className='border'><CiHeart /></div>
                    <div className='border'> <FaPlus /></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
                <div>
        <button className='px-[30px] py-[18px] hover:bg-white hover:text-blue-500 border border-blue-500 bg-blue-500 text-[12px] duration-500 font-bold mt-5 lg:mt-0 w-fit mx-auto'>
          Load More Listing
        </button>
        </div>
        </div>
      </div>
    </div>
  );
}

export default Hero3;