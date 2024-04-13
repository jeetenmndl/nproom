import React from 'react'
import CarouselImage from '@/components/CarouselImage'
import BookingCard from '@/components/BookingCard'

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'

import {Check} from "lucide-react"
import {X} from "lucide-react"

const page = () => {
  return (
    
    <main className='px-20 py-8 flex gap-16 justify-between'>

      {/* left section */}
      <div className=' w-4/6'>

        <CarouselImage />

        <div className='mt-12 mb-4'>
          <h1 className='text-3xl font-semibold mb-2'>Flat for rent at Peepal Chowk, Biratnagar</h1>
          <p>Property Owner: <span className='font-medium'>Jeeten Mandal</span></p>
        <hr className='my-4' />
        <p className='leading-8'>Welcome to your new home! This charming flat offers comfortable living with its two cozy bedrooms, perfect for a small family or roommates. The bright and airy hall provides a welcoming space for relaxation and entertainment. Cook up delicious meals in the fully equipped kitchen, complete with modern appliances. All rooms come fully furnished, ensuring convenience from day one. Located in a peaceful neighborhood, youll enjoy tranquility while being close to amenities and transport links. Dont miss out on this wonderful opportunity to make this flat your own!</p>
        </div>

        <div className="my-16 grid grid-cols-2 gap-8">

          <Card className="w-full">

          <CardHeader>
            <CardTitle>Rooms Information</CardTitle>
            {/* <CardDescription>Near Arniko Campus</CardDescription> */}
          </CardHeader>

          <CardContent>

            <table className='w-full'>
              <tbody className=' [&>tr>td]:py-1 hover:[&>tr]:bg-slate-200'>
              <tr><td>Stay Type</td><td className=' text-right'>Flat</td></tr>
              <tr><td>Bedroom</td><td className=' text-right'>2</td></tr>
              <tr><td>Hall</td><td className=' text-right'>1</td></tr>
              <tr><td>Kitchen</td><td className=' text-right'>1</td></tr>
              <tr><td>Bathroom</td><td className=' text-right'>Personal</td></tr>
              <tr><td>Room Size</td><td className=' text-right'>Medium</td></tr>
              </tbody>
            </table>
          </CardContent>

          </Card>

          <Card className="w-full">

              <CardHeader>
                <CardTitle>Facilities</CardTitle>
                {/* <CardDescription>Near Arniko Campus</CardDescription> */}
              </CardHeader>

              <CardContent>

                <table className='w-full'>
                  <tbody className=' [&>tr>td]:py-1 hover:[&>tr]:bg-slate-200'>
                  <tr>
                    <td>Wi-Fi</td>
                    <td className=' text-right'><Check size={20} strokeWidth={3} className='text-green-500' /></td>
                  </tr>
                  <tr>
                    <td>Parking Area</td>
                    <td className=' text-right'><X size={20} strokeWidth={3} className='text-red-500' /></td>
                  </tr>
                  <tr>
                    <td>Electricity</td>
                    <td className=' text-right'><Check size={20} strokeWidth={3} className='text-green-500' /></td>
                  </tr>
                  <tr>
                    <td>Water Supply</td>
                    <td className=' text-right'><Check size={20} strokeWidth={3} className='text-green-500' /></td>
                  </tr>
                  <tr>
                    <td>Furnished</td>
                    <td className=' text-right'><X size={20} strokeWidth={3} className='text-red-500' /></td>
                  </tr>
                  <tr>
                    <td>Terrace</td>
                    <td className=' text-right'><Check size={20} strokeWidth={3} className='text-green-500' /></td>
                  </tr>
                  </tbody>
                </table>

              </CardContent>

          </Card>

        </div>

      </div>

      {/* right section card  */}
      <div className='w-2/6'>
        <BookingCard />
      </div>

    </main>

  )
}

export default page