import React from 'react'
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
import { Menu } from 'lucide-react'
import Link from 'next/link'
import { Button } from './ui/button'
import LoginLogout from './LoginLogout'
  

const SideBar = () => {
  return (
    <Sheet >
    <SheetTrigger className='bg-light p-1 rounded hover:bg-gray-300 lg:hidden'>
        <Menu />
    </SheetTrigger>
    <SheetContent>
        <SheetHeader>
        <SheetTitle className="text-left mb-4">Menu</SheetTitle>
        </SheetHeader>
            <div className='flex flex-col [&>a]:py-4 uppercase text-black'>
              <Link href="/category">Category</Link>
              <Link href="/find-rooms">Find Room</Link>
              <Link href="/post-room">Post Room</Link>
              <Link href="/guide">Guide</Link>
            </div>
            <hr />
            <div className='flex flex-col [&>a]:py-4 [&>a]:uppercase [&>a]:text-sm [&>a]:text-gray-700'>
              <h3 className='font-semibold mt-4 mb-4 text-lg '>More Links</h3>
              <Link href="/">About Us</Link>
              <Link href="/">Contact Us</Link>
              <Link href="/">Privacy Policy</Link>
              <Link href="/">Terms & Conditions</Link>
            </div>
            <hr />
            <div className='py-4'>
              <Button className="w-full bg-main">
                <LoginLogout />
              </Button>
            </div>
    </SheetContent>
    </Sheet>
  )
}

export default SideBar