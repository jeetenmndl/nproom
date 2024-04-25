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
  

const SideBar = () => {
  return (
    <Sheet>
    <SheetTrigger>
        <Menu />
    </SheetTrigger>
    <SheetContent>
        <SheetHeader>
        <SheetTitle className="text-left mb-4">Menu</SheetTitle>
        </SheetHeader>
            <div className='flex flex-col [&>a]:py-4 uppercase text-black'>
                <Link href="/">Category</Link>
                <Link href="/">Find Room</Link>
                <Link href="/">Post Room</Link>
                <Link href="/">Guide</Link>
            </div>
    </SheetContent>
    </Sheet>
  )
}

export default SideBar