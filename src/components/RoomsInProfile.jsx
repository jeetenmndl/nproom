'use client'

import React, { useEffect, useState } from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card'
import { Button } from './ui/button'
import getSpecificRoom from '@/lib/actions/getSpecificRoom'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import deleteSpecificRoom from '@/lib/actions/deleteSpecificRoom'
import { useToast } from './ui/use-toast'
import { useRouter } from 'next/navigation'



const RoomsInProfile = () => {

  const {toast} = useToast();
  const router = useRouter();

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

const deleteRoom = async (id, type)=>{
  console.log("deleting room")
  let toSend = id+type;
  const result = await deleteSpecificRoom(toSend);
  if(result.deleted==true){
    toast({
      title: "Success !",
      description: "This room was deleted",
    })
    router.push("/");
  }
  else[
    toast({
      title: "Oops !",
      description: "Some error occured.",
      variant: "destructive",
  })
  ]
}

  return (
    <section className='w-full md:w-3/4 mt-2'>
        <h2 className='text-3xl font-semibold mb-4'>Your Rooms</h2>
        {
          rooms &&
          <article className='grid grid-cols-1 md:grid-cols-2 gap-4'>
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

                  <CardFooter className="grid grid-cols-2 gap-2 "> 
                    <AlertDialog>
                      <AlertDialogTrigger className='py-2 bg-gray-200 rounded text-sm hover:text-white hover:bg-primary'>Remove</AlertDialogTrigger>
                      <AlertDialogContent>
                        <AlertDialogHeader>
                          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                          <AlertDialogDescription>
                            Continue if you want to remove this room due to some other reasons.
                          </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                          <AlertDialogCancel>Cancel</AlertDialogCancel>
                          <AlertDialogAction onClick={()=>{deleteRoom(room._id, "remove")}}>Continue</AlertDialogAction>
                        </AlertDialogFooter>
                      </AlertDialogContent>
                    </AlertDialog>

                    <AlertDialog>
                      <AlertDialogTrigger className='py-2 bg-main text-white rounded text-sm  hover:bg-primary'>Accepted</AlertDialogTrigger>
                      <AlertDialogContent>
                        <AlertDialogHeader>
                          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                          <AlertDialogDescription>
                            Continue if you have accepted the deal with client
                          </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                          <AlertDialogCancel>Cancel</AlertDialogCancel>
                          <AlertDialogAction onClick={()=>{deleteRoom(room._id, "accept")}}>Continue</AlertDialogAction>
                        </AlertDialogFooter>
                      </AlertDialogContent>
                    </AlertDialog>

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