import React from 'react'
import CarouselImage from '@/components/CarouselImage'
import BookingCard from '@/components/BookingCard'

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'

import {Bath, Bed, Check, CookingPot, Droplet, Plug, RockingChair, Ruler, School, Sofa, SquareParking, Wifi, Wind} from "lucide-react"
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
              <tr>
                <td className='flex gap-4 items-center'><School className='text-gray-600' size={18} strokeWidth={1.5} /> Stay Type</td>
                <td className=' text-right'>Flat</td>
              </tr>
              <tr>
                <td className='flex gap-4 items-center'><Bed className='text-gray-600' size={16} strokeWidth={1.5} /> Bedroom</td>
                <td className=' text-right'>2</td>
              </tr>
              <tr>
                <td className='flex gap-4 items-center'><Sofa  className='text-gray-600'size={16} strokeWidth={1.5} /> Hall</td>
                <td className=' text-right'>1</td>
              </tr>
              <tr>
                <td className='flex gap-4 items-center'><CookingPot className='text-gray-600' size={16} strokeWidth={1.5} /> Kitchen</td>
                <td className=' text-right'>1</td>
              </tr>
              <tr>
                <td className='flex gap-4 items-center'><Bath className='text-gray-600' size={16} strokeWidth={1.5} /> Bathroom</td>
                <td className=' text-right'>Personal</td>
              </tr>
              <tr>
                <td className='flex gap-4 items-center'><Ruler className='text-gray-600' size={16} strokeWidth={1.5} /> Room Size</td>
                <td className=' text-right'>Medium</td>
              </tr>
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
                    <td className='flex gap-4 items-center'><Wifi size={16} strokeWidth={1.5} /> Wi-Fi</td>
                    <td className=' text-right'><Check size={20} strokeWidth={3} className='text-green-500' /></td>
                  </tr>
                  <tr>
                    <td className='flex gap-4 items-center'><SquareParking size={16} strokeWidth={1.5} /> Parking Area</td>
                    <td className=' text-right'><X size={20} strokeWidth={3} className='text-red-500' /></td>
                  </tr>
                  <tr>
                    <td className='flex gap-4 items-center'><Plug size={16} strokeWidth={1.5} /> Electricity</td>
                    <td className=' text-right'><Check size={20} strokeWidth={3} className='text-green-500' /></td>
                  </tr>
                  <tr>
                    <td className='flex gap-4 items-center'><Droplet size={16} strokeWidth={1.5} /> Water Supply</td>
                    <td className=' text-right'><Check size={20} strokeWidth={3} className='text-green-500' /></td>
                  </tr>
                  <tr>
                    <td className='flex gap-4 items-center'><RockingChair size={16} strokeWidth={1.5} />Furnished</td>
                    <td className=' text-right'><X size={20} strokeWidth={3} className='text-red-500' /></td>
                  </tr>
                  <tr>
                    <td className='flex gap-4 items-center'><Wind size={16} strokeWidth={1.5} /> Terrace</td>
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