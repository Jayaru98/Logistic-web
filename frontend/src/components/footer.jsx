import React from 'react'
import { IoMdMailOpen } from "react-icons/io";
import { LuMailOpen } from "react-icons/lu";

const Footer = () => {
  return (
    <div className='bg-[#020407] pb-8 h-full'>
        <div className='flex justify-between pt-24 mb-16'>
            <div >
                {/* Logo */}
                    <img src="https://byteflows.net/wp/transpi/wp-content/uploads/2023/12/logo-white.svg" alt="Logo" className='ml-2 md:ml-24 '/>
            </div>
            <div className='flex '>
                <div className="relative">
                  <LuMailOpen className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-50/60 w-5 h-5 pointer-events-none" />
                  <input
                     type="text"
                      placeholder={` Enter Your Email Address`}
                      className='border border-gray-50/20 text-gray-400 rounded-sm placeholder:text-gray-50/30 h-12 w-80 mr-4 px-4 pl-10 '
                  />
                </div>
                <button className='text-white mr-24 bg-[#FF131D] text-lg tracking-wider px-4 py-2 rounded-md font-bold cursor-pointer hover:bg-white hover:text-[#FF131D] transition-colors duration-300'>SUBSCRIBE</button>
            </div>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-6 text-white'>
            <div className='ml-4 md:ml-24'>
                <h2 className='text-[20px] font-semibold'>About Company</h2>
                <p className='text-[16px] text-[#B9B9B9] mt-6'>We work with passion of taking challenges and creating new ones in advertising any ready more sector.</p>
                <h2 className='mt-6 text-[20px] font-semibold'>Envato@gmail.com</h2>
                <p className='mt-2 text-[#B9B9B9]'>523 Sylvan Ave, 5th Floor Mountain View, CA 94041USA</p>
            </div>
            <div>
                <h2 className='text-[20px] font-semibold ml-4 md:ml-16'>Our Services</h2>
                <ul className='text-[#B9B9B9] mt-4'>
                    <li className='py-2 md:ml-16 ml-4 hover:text-white cursor-pointer'>Just-In-Time delivery</li>
                    <li className='py-2 md:ml-16 ml-4 hover:text-white cursor-pointer'>Time based service levels</li>
                    <li className='py-2 md:ml-16 ml-4 hover:text-white cursor-pointer'>Ware housing</li>
                    <li className='py-2 md:ml-16 ml-4 hover:text-white cursor-pointer'>stock transparency</li>
                    <li className='py-2 md:ml-16 ml-4 hover:text-white cursor-pointer'>Transport consolidation</li>
                </ul>
            </div>
            <div>
                <h2 className='text-[20px] font-semibold ml-4'>Industry Sectors</h2>
                <ul className='text-[#B9B9B9] mt-4'>
                    <li className='py-2 ml-4 hover:text-white cursor-pointer'>Electronics Industry</li>
                    <li className='py-2 ml-4 hover:text-white cursor-pointer'>Industrial & Manufacturing</li>
                    <li className='py-2 ml-4 hover:text-white cursor-pointer'>Semicon & Solar</li>
                    <li className='py-2 ml-4 hover:text-white cursor-pointer'>Oil & Gas Cargo</li>
                    <li className='py-2 ml-4 hover:text-white cursor-pointer'>Energy & Chemicals</li>
                </ul>
            </div>
            <div>
                <h2 className='text-[20px] font-semibold ml-4 md:ml-2 '>Useful links</h2>
                <ul className='text-[#B9B9B9] mt-4'>
                    <li className='py-2  ml-4 md:ml-2 hover:text-white cursor-pointer'>How it Works</li>
                    <li className='py-2  ml-4 md:ml-2 hover:text-white cursor-pointer'>Help Link</li>
                    <li className='py-2  ml-4 md:ml-2 hover:text-white cursor-pointer'>Terms & Conditions</li>
                    <li className='py-2  ml-4 md:ml-2 hover:text-white cursor-pointer'>Contact Us</li>
                    <li className='py-2  ml-4 md:ml-2 hover:text-white cursor-pointer'>Privacy Policy</li>
                </ul>
            </div>
        </div>
        <div className="w-full h-px bg-gray-50/20 my-3 mt-32"></div>
        <div className='flex justify-between'>
            <div>
                <p className='text-[#B9B9B9] text-[18px] ml-4 md:ml-24 mt-3'><span className='text-[#FF131D]'>Transpi</span> @2024. All Rights Reserved.</p>
            </div>
            <div className='flex text-[18px] text-white mr-24 mt-2 gap-8 '>
                <a href="#" className='hover:text-[#FF131D]'>Privacy & Terms.</a>
                <a href="#" className='hover:text-[#FF131D]'>FAQ</a>
                <a href="#" className='hover:text-[#FF131D]'>Contact Us</a>
            </div>
        </div>
    </div>
  )
}

export default Footer