import React from 'react'
import CarouselImage from '@/components/CarouselImage'
import BookingCard from '@/components/BookingCard'

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'

import {Bath, Bed, Check, CookingPot, Droplet, Plug, RockingChair, Ruler, School, Sofa, SquareParking, Wifi, Wind} from "lucide-react"
import {X} from "lucide-react"
import RoomCard from '@/components/RoomCard'
import { Button } from '@/components/ui/button'
import BookingDrawer from '@/components/BookingDrawer'
import getSpecificRoom from '@/lib/actions/getSpecificRoom'

const page = async ({params}) => {

  // console.log(params.id);
  let id = params.id + "room"
  const result = await getSpecificRoom(id)
  const room = result.data;

  return (
    <>
    
    <main className='md:px-20 md:pt-8 md:flex gap-16 md:justify-between'>

      {/* left section */}
      <div className=' md:w-4/6'>

        <CarouselImage photos={room.photos} />

        {/* description  */}
        <section className='mx-4 md:mx-0 mt-4 md:mt-12 mb-4'>
          <h1 className='text-2xl md:text-3xl font-semibold mb-2'>{room.rooms.type} for rent at {room.area}, {room.city}</h1>
          <p className='lg:hidden'>{room.neighbourhood}</p>
          <p>Property Owner: <span className='font-medium'>{room.owner}</span></p>

        
        <hr className='my-4' />
        <p className='leading-8'>{room.description}</p>
        </section>

        {/* rooms info and features  */}
        <section className="mx-4 md:mx-0 my-16 grid grid-cols-1 md:grid-cols-2 gap-8">

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
                <td className=' text-right'>{room.rooms.type}</td>
              </tr>
              <tr>
                <td className='flex gap-4 items-center'><Bed className='text-gray-600' size={16} strokeWidth={1.5} /> Bedroom</td>
                <td className=' text-right'>{room.rooms.bedroom}</td>
              </tr>
              <tr>
                <td className='flex gap-4 items-center'><Sofa  className='text-gray-600'size={16} strokeWidth={1.5} /> Hall</td>
                <td className=' text-right'>{room.rooms.hall}</td>
              </tr>
              <tr>
                <td className='flex gap-4 items-center'><CookingPot className='text-gray-600' size={16} strokeWidth={1.5} /> Kitchen</td>
                <td className=' text-right'>{room.rooms.kitchen}</td>
              </tr>
              <tr>
                <td className='flex gap-4 items-center'><Bath className='text-gray-600' size={16} strokeWidth={1.5} /> Bathroom</td>
                <td className=' text-right'>{room.rooms.bathroom}</td>
              </tr>
              <tr>
                <td className='flex gap-4 items-center'><Ruler className='text-gray-600' size={16} strokeWidth={1.5} /> Room Size</td>
                <td className=' text-right'>{room.rooms.roomSize}</td>
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
                    {
                      room.facilities.wifi
                      ?
                      <td className=' text-right'><Check size={20} strokeWidth={3} className='text-green-500' /></td>
                      :
                      <td className=' text-right'><X size={20} strokeWidth={3} className='text-red-500' /></td>
                    }
                  </tr>
                  <tr>
                    <td className='flex gap-4 items-center'><SquareParking size={16} strokeWidth={1.5} /> Parking Area</td>
                    {
                      room.facilities.parking
                      ?
                      <td className=' text-right'><Check size={20} strokeWidth={3} className='text-green-500' /></td>
                      :
                      <td className=' text-right'><X size={20} strokeWidth={3} className='text-red-500' /></td>
                    }
                  </tr>
                  <tr>
                    <td className='flex gap-4 items-center'><Plug size={16} strokeWidth={1.5} /> Electricity</td>
                    {
                      room.facilities.electricity
                      ?
                      <td className=' text-right'><Check size={20} strokeWidth={3} className='text-green-500' /></td>
                      :
                      <td className=' text-right'><X size={20} strokeWidth={3} className='text-red-500' /></td>
                    }
                  </tr>
                  <tr>
                    <td className='flex gap-4 items-center'><Droplet size={16} strokeWidth={1.5} /> Water Supply</td>
                    {
                      room.facilities.water
                      ?
                      <td className=' text-right'><Check size={20} strokeWidth={3} className='text-green-500' /></td>
                      :
                      <td className=' text-right'><X size={20} strokeWidth={3} className='text-red-500' /></td>
                    }
                  </tr>
                  <tr>
                    <td className='flex gap-4 items-center'><RockingChair size={16} strokeWidth={1.5} />Furnished</td>
                    {
                      room.facilities.furnished
                      ?
                      <td className=' text-right'><Check size={20} strokeWidth={3} className='text-green-500' /></td>
                      :
                      <td className=' text-right'><X size={20} strokeWidth={3} className='text-red-500' /></td>
                    }
                  </tr>
                  <tr>
                    <td className='flex gap-4 items-center'><Wind size={16} strokeWidth={1.5} /> Terrace</td>
                    {
                      room.facilities.terrace
                      ?
                      <td className=' text-right'><Check size={20} strokeWidth={3} className='text-green-500' /></td>
                      :
                      <td className=' text-right'><X size={20} strokeWidth={3} className='text-red-500' /></td>
                    }
                  </tr>
                  </tbody>
                </table>

              </CardContent>

          </Card>

        </section>

        <hr />

        {/* things to know  */}
        <section className="md:my-16 my-8 mx-4 md:mx-0">
          <h3 className='text-2xl font-semibold'>Things to Know</h3>
          <article className='grid grid-cols-1 md:grid-cols-2  mt-4 mx-4'>
            {
              room.rules
              ?
              <ul className=' list-disc [&>li]:py-2'>
                <li>Arrive before 10 PM</li>
                <li>No loud Music at night</li>
                <li>No smoking and alcohol</li>
                <li>Rent to be paid on time</li>
                <li>Pets not allowed</li>
                <li>Maintin Cleanliness</li>
              </ul>
              :
              ""
            }

            <blockquote className="md:border-l-2 md:pl-6 italic">
            {room.disclosure}
            </blockquote>
          </article>          
        </section>

        <hr />


      </div>

      {/* right section card  */}
      <div className='md:w-2/6 mx-4 md:mx-0 hidden lg:block'>
        <BookingCard room={room} />
      </div>

    </main>


    <section className=" mx-4 md:mx-20 my-16 ">
      <h2 className='text-2xl md:text-3xl font-semibold mb-6'>Nearby Locations</h2>
      <article className="grid grid-cols-1 md:grid-cols-4 gap-x-6 gap-y-8">
      {
        [1,2,3,4].map((item)=>{
          return(
            <RoomCard key={item} />
          )
        })
      }
      </article>
    </section>

    <section className='flex w-full z-30 gap-4 px-5 pt-4 pb-5 items-center justify-between border-y-2 fixed -bottom-1 bg-white lg:hidden' style={{boxShadow: "0px -1px 3px 2px #b1b1b150"}}>
      <div className='flex flex-col'>
          <p className='text-lg leading-6 font-semibold'>Rs {room.rent} <span className='font-normal text-base '>/month</span></p>
          <span className='font-light text-gray-500 leading-3'>{room.rentType}</span>
      </div>
      <div>
        <BookingDrawer room={room} />
      </div>
    </section>

    </>
  )
}

export default page