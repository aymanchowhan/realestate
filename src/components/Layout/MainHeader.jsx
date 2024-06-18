import Link from 'next/link'
import React, { useState } from 'react'
import { IoIosCloseCircleOutline } from 'react-icons/io'
import { IoMenu } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";

function MainHeader() {
    const menu = [
        {
          name: 'Home',
          path: '/#home',
          submenu: [
            { name: 'Homepage1', path: '/#homepage1' },
            { name: 'Homepage2', path: '/#homepage2' },
            { name: 'Homepage3', path: '/#homepage3' },
            { name: 'Homepage4', path: '/#homepage4' },
            { name: 'Homepage5', path: '/#homepage5' },
          ]
        },
        {
          name: 'Demos',
          path: '/#demos'
        },
        {
          name: 'Lists',
          path: '/#lists'
        },
        {
          name: 'Property',
          path: '/#property'
        },
        {
          name: 'Pages',
          path: '/#pages'
        },
      
        {
          name: 'Elements',
          path: '/#elements'
        },
        {
          name: 'Search',
          path: '/#search'
        },
      ]


    
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);

  const toggleSubmenu = () => {
    setIsSubmenuOpen(!isSubmenuOpen);
  };

  return (
    <div className="bg-blue-300">
      <div className="container mx-auto relative">
        <div className="flex justify-start gap-60 items-center px-4 py-6">
          <div className="flex items-center">
            <div className="cursor-pointer lg:hidden mr-4" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <IoIosCloseCircleOutline className="text-3xl" /> : <IoMenu className="text-3xl" />}
            </div>
            <div className="text-lg font-bold">WP RESIDENCE</div>
          </div>
          <div className="hidden lg:flex space-x-10">
            {menu.map((item, index) => (
              <div key={index} className="relative group">
                <Link href={item.path} className="hover:bg-blue-600 text-white rounded-lg p-1">
                  {item.name}
                </Link>
                {item.submenu && (
                  <div className="absolute left-0 mt-2 bg-white shadow-lg rounded-lg opacity-0 group-hover:opacity-100 group-hover:block transition-opacity">
                    {item.submenu.map((subItem, subIndex) => (
                      <Link key={subIndex} href={subItem.path} className="block px-4 py-2 hover:bg-gray-100">
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        {isOpen && (
          <div className="lg:hidden absolute left-0 top-full right-0 bg-white shadow-lg px-5 py-4 border-b-2 border-[#52657d]">
            <div className="flex flex-col space-y-4">
              {menu.map((item, index) => (
                <div key={index} className="relative">
                  <Link href={item.path} className="px-5 py-2 rounded-lg hover:bg-gray-100">
                    {item.name}
                  </Link>
                  {item.submenu && (
                    <div onClick={toggleSubmenu} className="cursor-pointer p-1">
                      v
                    </div>
                  )}
                  {item.submenu && isSubmenuOpen && (
                    <div className="ml-5 mt-2 bg-white shadow-lg rounded-lg ">
                      {item.submenu.map((subItem, subIndex) => (
                        <Link key={subIndex} href={subItem.path} className="block px-4 py-2 hover:bg-gray-100 ">
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
    
export default MainHeader
