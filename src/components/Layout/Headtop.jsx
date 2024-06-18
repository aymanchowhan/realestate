import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaVimeoV } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { BsEnvelope } from "react-icons/bs";
import { ImFoursquare } from "react-icons/im";
import { IoLogoWhatsapp } from "react-icons/io";
import Link from 'next/link';
function Headtop() {
    const data = [
        {
            icon: <FaFacebookF />,
            path: 'https://web.whatsapp.com/'
        },
        {
            icon: <FaXTwitter />,
            path: ''
        },
        {
            icon: <FaLinkedinIn />,
            path: ''
        },
        {
            icon: <FaPinterestP />,
            path: ''
        },
        {
            icon: <FaYoutube />,
            path: ''
        },
        {
            icon: <FaVimeoV />,
            path: ''
        },
        {
            icon: <FaInstagramSquare />,
            path: ''
        },
        {
            icon: <ImFoursquare />,
            path: ''
        },
    ]
    const data2=[
        {
            icon:<FaHeart />,
            detail:'Favorites'
        },
        {
            icon:<BsEnvelope />,
            detail:'contact@mail.com'
        },
        {
            icon:<IoLogoWhatsapp />,
            detail:'+1 408 12345'
        },
    ]
    return (
        <div className="container mx-auto hidden lg:block">
            <div className="flex justify-between items-center border border-black ">
                <div className="flex">
                    {data.map((item, index) => (
                        <Link key={index} href={item.path} target="_blank" rel="noopener noreferrer">
                            <div className="text-sm border p-3 hover:text-blue-600 duration-700">
                                {item.icon}
                            </div>
                        </Link>
                    ))}
                </div>
                <div className="flex">
                    {data2.map((item, index) => (
                        <div key={index} className="flex items-center gap-2 text-sm border p-2">
                            {item.icon}
                            <div className="text-[14px]">{item.detail}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Headtop;
