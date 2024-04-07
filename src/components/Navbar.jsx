import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Logo from '@/../public/logo.png'
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
  } from "@/components/ui/hover-card"
  

const Navbar = () => {
  return (
    <>
    {/* <!-- Top nav bar for secondary links --> */}
    <nav
      className="w-full px-16 text-xs text-333 flex border-b border-gray-light justify-end"
    >
      <div className="tier1 flex leading-10">
        <Link href="#" className="mx-8 text-center tracking-widest cursor-pointer">ABOUT</Link>
        <Link href="#" className="mx-8 tracking-widest cursor-pointer">SERVICES</Link>
        <Link href="#" className="mx-8 tracking-widest cursor-pointer">FAQ&apos;S</Link>
        <Link href="#" className="mx-8 tracking-widest cursor-pointer">CONTACT</Link>
      </div>
      <div className="tier2 leading-10">
        <div className="mx-8 tracking-widest">
          <Link href="#" className="font-bold cursor-pointer">ADMIN</Link>
        </div>
      </div>
    </nav>


    {/* <!-- Second Nav bar for logo and primary Links --> */}
    <header className="w-full px-16 text-sm text-333 font-semibold shadow-sm flex items-center justify-between border-b border-gray-light">
      <div className="flex">
      {/* <!-- logo --> */}
        <div className="logo flex items-center gap-4 mr-9 cursor-pointer">
          <Link href="/">
            <Image src={Logo} alt="nproom" className='w-12 h-12'/>
          </Link>
          <Link href="/" className='text-3xl font-semibold text-gray-800'>NPROOM</Link>
        </div>

        {/* <!-- links primary  --> */}
        <div className="tier1 flex leading-[80px]">
          <HoverCard>
            <HoverCardTrigger className="mx-8 tracking-widest cursor-pointer hover:underline">CATEGORY</HoverCardTrigger>
            <HoverCardContent className="leading-normal font-normal">
                The React Framework – created and maintained by @vercel.
            </HoverCardContent>
          </HoverCard>

          <Link href="/" className="mx-8 tracking-widest cursor-pointer hover:underline">AUCTIONS</Link>
          <Link href="/" className="mx-8 tracking-widest cursor-pointer hover:underline">BUY NOW</Link>
          <Link href="/" className="mx-8 tracking-widest cursor-pointer hover:underline">SELL</Link>
        </div>
      </div>

    </header>


    </>
  )
}

export default Navbar