import React from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"

import { Textarea } from './ui/textarea'

import { Input } from "./ui/input"
import { Label } from "./ui/label"
import { Button } from './ui/button'
  

const BookingDialog = () => {
  return (
    <Dialog>
    <DialogTrigger className='w-full bg-main py-2.5 px-4 rounded-md text-white text-sm font-medium'>Book Now</DialogTrigger>
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Contact Information</DialogTitle>
        <DialogDescription>
          Enter your details and contact infromation.
        </DialogDescription>
      </DialogHeader>
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
        
        <DialogFooter className="mt-4">
            <Button className="w-full bg-main">Submit</Button>
        </DialogFooter>
      </div>
    </DialogContent>
  </Dialog>
  
  )
}

export default BookingDialog