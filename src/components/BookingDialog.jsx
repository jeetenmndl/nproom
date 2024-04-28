'use client'

import React, { useEffect } from 'react'
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
import { useToast } from './ui/use-toast'
import { useRouter } from 'next/navigation'
import bookRoom from '@/lib/actions/bookRoom'
  

const BookingDialog = (props) => {

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
      // console.log(room,user);
      const result = await bookRoom(room,user);
      if(result.success==true){
        toast({
          title: "Congratulations !",
          description: "Check your sms for further information"
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
    <Dialog>
    <DialogTrigger className='w-full bg-main py-2.5 px-4 rounded-md text-white text-sm font-medium'>Book Now</DialogTrigger>
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Confirm your booking?</DialogTitle>
        <DialogDescription>
          Press the button below to confirm your booking. We will send the contact details of the room owner to your phone number.
        </DialogDescription>
      </DialogHeader>
        
      <DialogFooter className="mt-4">
          <Button className="w-full bg-main" onClick={onSubmit}>Submit</Button>
      </DialogFooter>
      
    </DialogContent>
  </Dialog>
  
  )
}

export default BookingDialog