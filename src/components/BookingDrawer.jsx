import React from 'react'
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
  } from "@/components/ui/drawer"
import { Button } from './ui/button'
import { Input } from './ui/input'
import { Label } from './ui/label'
import { Textarea } from './ui/textarea'
  

const BookingDrawer = () => {
  return (
    <Drawer classname="w-full" >

        <DrawerTrigger className='bg-main text-white hover:bg-primary  px-4 py-2.5 rounded-md text-sm grid place-items-center cursor-pointer'>Book Now</DrawerTrigger>

        <DrawerContent className="px-4">
      <DrawerHeader>
        <DrawerTitle>Contact Information</DrawerTitle>
        <DrawerDescription>
          Enter your details and contact infromation.
        </DrawerDescription>
      </DrawerHeader>
      <div>
        
        <div className="my-2">
            <Label htmlFor="name">
              Full Name
            </Label>
            <Input
              id="name"
              placeholder="Hari Prasad"
              className="mt-0.5 h-8 ring-stone-800 "
            />
        </div>
        
        <div className="my-2">
            <Label htmlFor="phone">
              Contact Number
            </Label>
            <Input
              id="phone"
              placeholder="98XXXXXXXX"
              className="mt-0.5 h-8 ring-stone-800 "
            />
        </div>
        
        <div className="my-2">
            <Label htmlFor="message">
              Message
            </Label>
            <Textarea
              id="message"
              placeholder="Your concerns, or message to the house owner..."
              className="mt-0.5 ring-stone-800 placeholder:text-gray-400 placeholder:font-light"
            />
        </div>
        
        <div className="my-2">
            <Label htmlFor="name">
              Documnet Photo 
            </Label>
            <Input
              type='file'
              id="document"
              placeholder="Hari Prasad"
              className="mt-0.5 ring-stone-800"
            />
            <span className='text-xs text-gray-500'>(Citizenship, Student ID, Driving liscense, Voting card, etc)</span>
        </div>
        
        <DrawerFooter className="mt-4 px-0">
            <Button className="w-full bg-main">Submit</Button>
        </DrawerFooter>
      </div>
    </DrawerContent>
    </Drawer>
  )
}

export default BookingDrawer