'use client'

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
import { useToast } from './ui/use-toast'
import { useRouter } from 'next/navigation'
import bookRoom from '@/lib/actions/bookRoom'
  

const BookingDrawer = (props) => {

  const {toast} = useToast();
  const router = useRouter();
  const room = props.room;

  const onSubmit = async ()=>{
    let user = localStorage.getItem("auth-token");
    // console.log(user) 
    if(user==null || user==""){
      toast({
        title:"Oops !!!",
        description: "You need to log in first."
      })
      setTimeout(() => {
        router.push("/auth");
      }, 2000);


    }
    else{
      // call server action function and send room(object) and auth-token(to get phone number and send sms)
      // console.log(room,user)
      const result = await bookRoom(room,user);
      if(result.success==true){
        toast({
          title: "Congratulations !",
          description: "Booking done. Check your sms for further information"
        })
      }
      else{
        toast({
          title: "Oops !!!",
          description: "Some error occoured. Try again later.",
          variant: "destructive"
        })
      }
    }
    
  }

  return (
    <Drawer classname="w-full" >

        <DrawerTrigger className='bg-main text-white hover:bg-primary  px-4 py-2.5 rounded-md text-sm grid place-items-center cursor-pointer'>Book Now</DrawerTrigger>

        <DrawerContent className="px-4">
      <DrawerHeader>
        <DrawerTitle>Confirm your booking?</DrawerTitle>
        <DrawerDescription>
          Press the button below to confirm your booking. We will send the contact details of the room owner to your phone number.
        </DrawerDescription>
      </DrawerHeader>
        
      <DrawerFooter className="mt-4">
          <Button className="w-full bg-main" onClick={onSubmit}>Submit</Button>
      </DrawerFooter>
      
    </DrawerContent>
    </Drawer>
  )
}

export default BookingDrawer