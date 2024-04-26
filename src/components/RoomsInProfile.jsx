'use client'

import React, { useEffect, useState } from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card'
import { Button } from './ui/button'
import getSpecificRoom from '@/lib/actions/getSpecificRoom'

const RoomsInProfile = () => {

  useEffect( () => {
    let token = localStorage.getItem("auth-token");
    token = token+"user"
    getRooms(token);
}, [])

const getRooms = async (token) => {
    const response = await getSpecificRoom(token);
    setRooms(response.data)
}

const [rooms, setRooms] = useState(null);

  return (
    <section className='w-3/4 mt-2'>
        <h2 className='text-3xl font-semibold mb-4'>Your Rooms</h2>
        {
          rooms &&
          <article className='grid grid-cols-2 gap-4'>
          {
          rooms.map((room)=>{
              return(
                <Card key={room._id}>
                    <CardHeader>
                        <CardTitle>{room.area}, {room.city}</CardTitle>
                        <CardDescription>{room.neighbourhood}</CardDescription>
                    </CardHeader>
                    <CardContent>
                    <div className='flex flex-col py-4'>
                    <p className='text-md text-xl  font-semibold'>Rs {room.rent} <span className='font-normal'>/month</span></p>
                    <span className='font-light text-gray-500'>{room.rentType}</span>
                    </div>

                    <table className='mt-4 w-full'>
                      <tbody>
                      <tr><td>Stay Type</td><td className=' text-right'>{room.rooms.type}</td></tr>
                      <tr><td>Bedroom</td><td className=' text-right'>{room.rooms.bedroom}</td></tr>
                      <tr><td>Hall</td><td className=' text-right'>{room.rooms.hall}</td></tr>
                      <tr><td>Kitchen</td><td className=' text-right'>{room.rooms.kitchen}</td></tr>
                      <tr><td>Toilet/Bathroom</td><td className=' text-right'>{room.rooms.bathroom}</td></tr>
                      </tbody>
                    </table>
                    </CardContent>
                    <CardFooter className="flex gap-2 justify-end">
                      <Button className="bg-gray-200 text-gray-700 w-1/2 hover:text-white">Remove</Button>
                      <Button className="bg-main w-1/2">Accepted</Button>
                    </CardFooter>
                </Card>
            )
          })
          }
        </article>
        }
        
    </section>
  )
}

export default RoomsInProfile