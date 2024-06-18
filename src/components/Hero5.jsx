import React from 'react'
import img from '../assests/3.jpg'
import agentimg from '../assests/testimonial-1.png'
import { IoBedOutline } from 'react-icons/io5';
import { GiBathtub } from 'react-icons/gi';
import { TbVector } from 'react-icons/tb';
import { CiShare2, CiHeart } from 'react-icons/ci';
import { FaPlus } from 'react-icons/fa';
import Image from 'next/image';
function Hero5() {
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

    },
  ]
  return (
    <div className='container mx-auto pt-14 lg:pt-[90px] pb-[70px] bg-gray-300 '>
      <div className='text-center text-[30px] lg:text-[36px]'>
        Featured Properties
      </div>
      <div className='text-center px-2 text-[16px] lg:w-[40%] mx-auto text-gray-500 pt-5'>
        These are the latest properties in the Sales category. You can create the list using the “latest listing shortcode” and show items by specific categories.
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:mx-[35vh] mt-10">
        {
          properties.map((property, index) => (
            <div key={index} className="border rounded-lg p-4 shadow-lg">
              <Image src={property.image} alt={property.title} className="h-[175px] w-full object-cover rounded-md" />
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
      </div>
      )
    </div>
  )
}

export default Hero5
