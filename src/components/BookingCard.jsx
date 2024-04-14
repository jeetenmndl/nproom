import React from 'react'
import Logo from '@/../public/logo.png'
import Image from 'next/image'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card'
import { Button } from './ui/button'
import {Check} from "lucide-react"
import {X} from "lucide-react"
import BookingDrawer from './BookingDrawer'
import BookingDialog from './BookingDialog'
// import BookingDrawer from './BookingDrawer'


const BookingCard = () => {
  return (
    <div className='rounded-lg sticky top-8 flex justify-end'>
      <Card className="w-full relative">

        <CardHeader>
          <CardTitle>Peepal Chowk, Biratnagar</CardTitle>
          <CardDescription>Near Arniko Campus</CardDescription>
        </CardHeader>

        <CardContent>
          
          <div className='flex flex-col py-4'>
          <p className='text-md text-xl  font-semibold'>Rs 15000 <span className='font-normal'>/month</span></p>
          <span className='font-light text-gray-500'>Negotiable</span>
          </div>

          <table className='mt-4 w-full'>
            <tbody>
            <tr><td>Stay Type</td><td className=' text-right'>Flat</td></tr>
            <tr><td>Bedroom</td><td className=' text-right'>2</td></tr>
            <tr><td>Hall</td><td className=' text-right'>1</td></tr>
            <tr><td>Kitchen</td><td className=' text-right'>1</td></tr>
            <tr><td>Toilet/Bathroom</td><td className=' text-right'>Personal</td></tr>
            </tbody>
          </table>

          <div className='flex gap-4 my-4'>
            <div className='flex justify-between items-center w-1/2 py-1.5 px-4 rounded bg-gray-200'>
              <p>Electricity</p>
              <Check size={20} strokeWidth={3} className='text-green-500' />
            </div>
            <div className='flex justify-between items-center w-1/2 py-1.5 px-4 rounded bg-gray-200'>
              <p>Water Supply</p>
              <X size={20} strokeWidth={3} className='text-red-500' />
            </div>
          </div>

        </CardContent>
        
        <CardFooter>
          <div className='flex flex-col w-full'>
            {/* <Button className="w-full bg-main">Book Now</Button> */}

            {/* opens the dialog for booking and user info  */}
            <BookingDialog />

            <p className='text-xs mt-2 text-gray-500'>Small one-time commission amount will be charged</p>
          </div>
        </CardFooter>

      </Card>
    </div>


  )
}

export default BookingCard