import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Logo from '@/../public/logo.png'
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
  } from "@/components/ui/hover-card"
import LoginLogout from './LoginLogout'
import SideBar from './SideBar'
import { CircleUser } from 'lucide-react'
  

const Navbar = () => {
  return (
    <>
    {/* <!-- Top nav bar for secondary links --> */}
    <nav
      className="w-full px-20 text-xs text-333 hidden md:flex border-b border-gray-light justify-end"
    >
      <div className="tier1 flex leading-10">
        <Link href="#" className="mx-8 text-center tracking-widest cursor-pointer hover:underline">ABOUT</Link>
        <Link href="#" className="mx-8 tracking-widest cursor-pointer hover:underline">SERVICES</Link>
        <Link href="#" className="mx-8 tracking-widest cursor-pointer hover:underline">FAQ&apos;S</Link>
        <Link href="#" className="mx-8 tracking-widest cursor-pointer hover:underline">CONTACT</Link>
      </div>
      <div className="tier2 leading-10">
        <div className="ml-8 tracking-widest">
          <LoginLogout />
        </div>
      </div>
    </nav>


    {/* <!-- Second Nav bar for logo and primary Links --> */}
    <header className="w-full px-4 py-2 md:py-0.5 md:px-20 text-sm text-333 font-semibold shadow-sm flex items-center justify-between border-b border-gray-light">
      <div className="flex">
      {/* <!-- logo --> */}
        <div className="logo flex items-center gap-2 md:gap-4 mr-9 cursor-pointer">
          <Link href="/">
            <Image src={Logo} alt="nproom" className=' w-7 h-7 md:w-12 md:h-12'/>
          </Link>
          <Link href="/" className=' text-xl md:text-3xl font-semibold text-gray-800'>NPROOM</Link>
        </div>

        {/* <!-- links primary  --> */}
        <div className="tier1 hidden lg:flex leading-[80px] [&>a]:uppercase">
          <HoverCard>
            <HoverCardTrigger className="mx-8 tracking-widest cursor-pointer hover:underline">CATEGORY</HoverCardTrigger>
            <HoverCardContent className="leading-normal font-normal flex flex-col w-40 gap-2">
                <Link href='#' className='hover:underline'>Find Rooms</Link>
                <Link href='#' className='hover:underline'>Find Flat</Link>
                <Link href='#' className='hover:underline'>Find House</Link>
                <Link href='#' className='hover:underline'>Find Office</Link>
            </HoverCardContent>
          </HoverCard>

          <Link href="/" className="mx-8 tracking-widest cursor-pointer hover:underline">Find Room</Link>
          <Link href="/post-room" className="mx-8 tracking-widest cursor-pointer hover:underline">Post room</Link>
          <Link href="/" className="mx-8 tracking-widest cursor-pointer hover:underline">Guide</Link>
        </div>
      </div>

      <div className='flex gap-4 items-center'>
        <Link href="/profile">
          <CircleUser strokeWidth={1.75}  />
        </Link>
        <SideBar />
      </div>

    </header>


    </>
  )
}

export default Navbar