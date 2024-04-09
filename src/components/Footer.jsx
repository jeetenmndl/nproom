import React from 'react'
import { Facebook, Instagram, Youtube, Smartphone } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"
import Map from "@/../public/map.png"
import Logo from "@/../public/logo.png"


const Footer = () => {
  return (
    <footer className='bg-light'>

        <hr className="border-gray-200 sm:mx-auto " />

        {/* logo and slogan */}
        <div className='flex px-20 py-4 gap-8 items-center'>
            <div className="logo flex items-center gap-4 mr-9 cursor-pointer">
            <Link href="/">
                <Image src={Logo} alt="nproom" className='w-12 h-12'/>
            </Link>
            <Link href="/" className='text-5xl font-semibold'>NPROOM</Link>
            </div>
            <div>
                <p className='font-semibold text-2xl text-gray-800'>We find the rooms so you dont have to.</p>
            </div>
        </div>

        <hr className="border-gray-200 sm:mx-auto " />

        {/* middle links  */}
        <div className='px-20 py-8 flex justify-between gap-4'>
            <div className="mapBox w-2/5">
                <Image src={Map} alt="nproom location" />
            </div>
            <div className='flex justify-evenly w-3/5'>
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
        <div className="sm:flex sm:items-center sm:justify-between py-4 px-20">

            <span className="text-sm text-gray-500 sm:text-center">© 2023 <a href="/" className="hover:underline">nproom</a>. All Rights Reserved.
            </span>

            <div className="flex gap-4 sm:justify-center">
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