// components/SearchForm.js
import React from 'react';
import { AiOutlineSearch } from 'react-icons/ai'; // Add this line

const SearchForm = () => {
  return (
    <div className="bg-gray-400 shadow-md lg:mx-[35vh] mt-10 text-[13px] rounded-lg">
      <div className="container mx-auto px-4 py-4 ">
        <div className="flex justify-center mb-4 gap-1 text-white  ">
          <button className="px-6 py-2 bg-blue-600 hover:bg-white duration-500 rounded-sm">Sales</button>
          <button className="px-6 py-2 bg-blue-600 hover:bg-white duration-500 rounded-sm">Rentals</button>
          <button className="px-6 py-2 bg-blue-600 hover:bg-white duration-500 rounded-sm ">Invest</button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 ">
          <select className="border px-1 py-2 rounded-lg w-full">
            <option>Property Category</option>
            
          </select>
          <select className="border px-1 py-2 rounded-lg w-full">
            <option>Property City</option>
           
          </select>
          <select className="border px-1 py-2 rounded-lg w-full">
            <option>Beds | Baths</option>
            
          </select>
          <select className="border px-1 py-2 rounded-lg w-full">
            <option>Sale Price</option>
          </select>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg w-full flex justify-items-center items-center">
            <AiOutlineSearch className="mr-2" /> Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchForm;
