import React from 'react'
import { Facebook, Instagram, Youtube, Smartphone } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"
import Map from "@/../public/map.png"
import Logo from "@/../public/logo.png"
import BannerBlue from "@/../public/bannerBlue.png"



const Footer = () => {
  return (
    <footer className='bg-light z-0'>

        <hr className="border-gray-200 sm:mx-auto " />

        {/* logo and slogan */}
        <div className='flex px-2 md:px-20 py-4 gap-8 '>
            <p className='font-semibold text-lg w-full md:text-2xl text-center md:text-left text-gray-800'>We find the rooms, so you dont have to</p>
            <p className='font-semibold text-2xl text-gray-800 hidden'>No Commission.</p>
        </div>

        <hr className="border-gray-200 sm:mx-auto " />

        {/* middle links  */}
        <div className='px-4 md:px-20 py-4 md:py-8 flex flex-col md:flex-row justify-between gap-4 z-0'>
            {/* <div className="mapBox w-2/5">
                <Image src={Map} alt="nproom location" />
            </div> */}
            <div className='relative md:w-1/2'>
            <div className="logo flex items-center justify-center gap-4 md:mt-8 cursor-pointer">
            <Link href="/">
                <Image src={Logo} alt="nproom" className='w-12 h-12'/>
            </Link>
            <Link href="/" className='text-5xl font-semibold'>NPROOM</Link>
            </div>
            <Image src={BannerBlue} alt='banner' className='md:absolute mt-4 md:mt-0 w-full bottom-0' />
            </div>

            <div className='flex justify-between mt-4 md:mt-0 md:justify-evenly md:w-1/2'>
                <div className='flex flex-col gap-3 '>
                    <h4 className='font-semibold'>Services</h4>
                    <Link href="#" className='hover:underline'>Book Rooms/Flat</Link>
                    <Link href="#" className='hover:underline'>Post Rooms/Flat</Link>
                    <Link href="#" className='hover:underline'>Browse Categories</Link>
                    <Link href="#" className='hover:underline'>Track Booking</Link>
                </div>
                <div className='flex flex-col gap-3 '>
                    <h4 className='font-semibold'>Nproom</h4>
                    <Link href="#" className='hover:underline'>About Nproom</Link>
                    <Link href="#" className='hover:underline'>Contact Us</Link>
                    <Link href="#" className='hover:underline'>Privacy Policy</Link>
                    <Link href="#" className='hover:underline'>Terms & Condition</Link>
                </div>
            </div>
        </div>

        <hr className="border-gray-200 sm:mx-auto " />

        {/* bottom  */}
        <div className="sm:flex sm:items-center sm:justify-between py-4 mx-4 md:px-20">

            <p className="text-sm text-gray-500 w-full text-center md:text-left mb-2 md:mb-0">© 2023 <a href="/" className="hover:underline">nproom</a>. All Rights Reserved.
            </p>

            <div className="flex gap-4 justify-center">
                <a href="#" className="text-gray-500 hover:text-gray-900 p-2 bg-gray-100 rounded-full">
                    <Facebook size={20} />
                    <span className="sr-only">Facebook page</span>
                </a>
                <a href="#" className="text-gray-500 hover:text-gray-900 p-2 bg-gray-100 rounded-full">
                    <Youtube size={20} />
                    <span className="sr-only">Youtube Channer</span>
                </a>
                <a href="#" className="text-gray-500 hover:text-gray-900 p-2 bg-gray-100 rounded-full">
                    <Instagram size={20} />   
                    <span className="sr-only">Instagram Page</span>
                </a>
                <a href="#" className="text-gray-500 hover:text-gray-900 p-2 bg-gray-100 rounded-full">
                    <Smartphone size={20} />
                    <span className="sr-only">Android App</span>
                </a>
                
            </div>
        </div>

    </footer>
  )
}

export default Footer