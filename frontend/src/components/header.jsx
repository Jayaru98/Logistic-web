import React, { useState } from 'react'
import { FaSearch } from "react-icons/fa";
import { FaPhoneFlip } from "react-icons/fa6";
import { IoBagHandleOutline } from "react-icons/io5";
import { ImClock } from "react-icons/im";
import { TiSocialFacebook } from "react-icons/ti";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaPinterestP } from "react-icons/fa";

const Dropdown = ({ title, items }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <li
      className='relative'
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <div className='flex items-center cursor-pointer'>
        <span className='hover:text-orange-300'>{title}</span>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-4 h-4 ml-1">
          <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
        </svg>
      </div>
      {isOpen && (
        <ul className='absolute left-0 top-full pt-4 w-40 bg-white shadow-lg rounded-md z-10 before:content-[""] before:absolute before:left-0 before:right-0 before:bottom-full before:h-4'>
          {items.map((item, index) => (
            <li key={index} className='px-4 py-2 hover:text-orange-300 hover:bg-gray-100'>{item}</li>
          ))}
        </ul>
      )}
    </li>
  );
};

const LanguageDropdown = () => {
  const languages = [
    { code: 'US', name: 'USA', img: 'https://byteflows.net/wp/transpi/wp-content/uploads/2023/12/Map.svg' },
    { code: 'CA', name: 'Canada', img: 'https://byteflows.net/wp/transpi/wp-content/uploads/2023/12/canada-1.png' },
    { code: 'AU', name: 'Australia', img: 'https://byteflows.net/wp/transpi/wp-content/uploads/2023/12/australia.png' },
    { code: 'SA', name: 'Arabic', img: 'https://byteflows.net/wp/transpi/wp-content/uploads/2023/12/saudi-arabia.png' },
  ];

  const [isOpen, setIsOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState(languages[0]);

  const handleSelectLanguage = (language) => {
    setSelectedLanguage(language);
    setIsOpen(false);
  };

  return (
        <div className="relative mt-2">
        <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center border rounded-md border-gray-300 px-1 mt-2"
        >
            <img src={selectedLanguage.img} alt={selectedLanguage.name} className="w-12 h-auto mr-1" />
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-4 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
            </svg>
        </button>
        {isOpen && (
            <ul className="absolute mt-2 w-36 bg-white shadow-lg rounded-md z-10">
            {languages.map((lang) => (
                <li
                key={lang.code}
                className="flex items-center gap-2 px-4 py-2 cursor-pointer hover:bg-gray-100"
                onClick={() => handleSelectLanguage(lang)}
                >
                <img src={lang.img} alt={lang.name} className="w-8 h-auto" />
                <span className=''>{lang.name}</span>
                </li>
            ))}
            </ul>
        )}
        </div>
  );
};

const Header = () => {

  return (
    <div>
        <div className='flex justify-between'>
            <div className='flex'>
                <div className='flex'>
                    <FaPhoneFlip className='text-orange-300 ml-24 mt-5' />
                    <span className='hover:text-orange-300 ml-2 mt-4 font-bold cursor-pointer'>+025 757 576 560 &nbsp;&nbsp;</span><span className='mt-4'>|</span>
                </div>
                <div className='flex'>
                    <ImClock className='text-orange-300 ml-4 mt-5' />
                    <p className='ml-4 mt-4'>Monday to Friday: <span className='font-bold'>9:00am - 6:00pm</span></p>
                </div>
            </div>
            <div className='flex mr-24'>
                <div className='flex items-center justify-center text-center hover:text-orange-300 cursor-pointer'>
                    <IoBagHandleOutline className='text-orange-300 ml-24 mt-4 font-bold mr-2' />
                    <span className='mt-4 font-semibold'>Career &nbsp;&nbsp;</span><span className='mt-4'>|</span>
                </div>
                <div>
                    <p className='ml-4 mt-5 font-semibold hover:text-orange-300 cursor-pointer'>Terms & Conditions</p>
                </div>
                <div className='flex cursor-pointer'>
                  <TiSocialFacebook className='mt-5 ml-6 w-6 h-6 border rounded-full text-gray-300 hover:bg-blue-600' />
                  <FaInstagram  className='mt-5 ml-1 w-6 h-6 p-1 border rounded-full text-gray-300 hover:bg-red-600'/>
                  <FaYoutube className='mt-5 ml-1 w-6 h-6 p-1 border rounded-full text-gray-300 hover:bg-red-700'/>
                  <FaXTwitter className='mt-5 ml-1 w-6 h-6 p-1 border rounded-full text-gray-300 hover:bg-blue-400'/>
                  <FaPinterestP className='mt-5 ml-1 w-6 h-6 p-1 border rounded-full text-gray-300 hover:bg-red-600'/>
                </div>
            </div>
            
        </div>
        <div className="w-full h-px bg-gray-300 my-3"></div>
        <div className='flex justify-between items-center'>
            <div>
                {/* Logo */}
                <img src="https://byteflows.net/wp/transpi/wp-content/uploads/2023/12/logo.svg" alt="Logo" className='ml-24'/>
            </div>
            {/* Menu */}
            <div className=''>
                <ul className='flex items-center gap-8 tracking-wider font-bold text-[16px]'>
                    <Dropdown title="HOME" items={['HOME-1', 'HOME-2', 'HOME-3', 'HOME-4', 'HOME-5']} />
                    <li className='cursor-pointer hover:text-orange-300'>ABOUT US</li>
                    <Dropdown title="SERVICES" items={['SERVICES', 'SINGLE SERVICE']} />
                    <Dropdown title="BLOG" items={['BLOG GRID', 'BLOG CLASSIC', 'SINGLE BLOG']} />
                    <Dropdown title="PAGES" items={['TRACKING', 'PROJECTS', 'TEAM', 'FAQ PAGE', '404']} />
                    <li className='hover:text-orange-300 cursor-pointer'>CONTACT</li>
                </ul>
            </div>
            <div className='flex gap-4'>
                {/* Search */}
                <div className='p-5 mt-3 rounded-full bg-[#F3F3F3] cursor-pointer'>
                    {/* Search Icon */}
                    <FaSearch className=''/>
                </div>
                <LanguageDropdown />
                {/* Order Tracking */}
                <div className='mt-7 text-[16px]'>
                    <a href="#" className='border px-6 py-4 bg-[#FF131D] mr-24 rounded-md hover:bg-black text-white font-bold'>Track Your Order</a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header