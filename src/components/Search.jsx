'use client'

import React from 'react'
import Image from "next/image";
import Banner1 from "@/../public/banner1.png"
import Banner2 from "@/../public/banner2.png"
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
  import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
  } from "@/components/ui/form"
import { Input } from './ui/input';
import { Button } from './ui/button';
import Link from 'next/link';
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Card } from './ui/card';
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
import { useRouter } from 'next/navigation';

const formSchema = z.object({
    city: z.string().min(2, {
        message : "Required",
      }),
    type: z.string().optional(),
    rent: z.string().optional()
    
  })



const Search = () => {

  const router = useRouter();

    
    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            city:"",
            type:"",
            rent:""
    },
    })

     // 2. Define a submit handler.
     async function onSubmit(values) {
       let type; 
       let rent;
       values.type==""?type="all":type=values.type;
       values.rent==""?rent="all":rent=values.rent;

        // console.log(values.city, type, rent)
        router.push(`/find-room/search?city=${values.city}&type=${type}&rent=${rent}`)
    }


  return (
    <section className='relative h-60 md:h-80' id="searchSection">
    <article className='grid place-items-center h-full '>
            
            {/* <Input type="text" id="city" placeholder="Enter City Name" /> */}

        <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col md:flex-row gap-1 w-full md:w-auto px-6 lg:px-16">

        <FormField
            control={form.control}
            name="city"
            render={({ field }) => (
                <FormItem>
                <FormControl>
                    <Input placeholder="Enter city name" {...field}  className="w-full md:w-72"  />
                </FormControl>
                <FormMessage />
                </FormItem>
            )}
            />


        <FormField
          control={form.control}
          name="type"
          render={({ field }) => (
            <FormItem>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger  className="w-full md:w-32" >
                    <SelectValue placeholder="Type" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                <SelectGroup>
                    <SelectItem value="Room">Room</SelectItem>
                    <SelectItem value="Flat">Flat</SelectItem>
                    <SelectItem value="Home">Home</SelectItem>
                    <SelectItem value="Office">Office</SelectItem>
                </SelectGroup>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="rent"
          render={({ field }) => (
            <FormItem>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger className="w-full md:w-32 hidden lg:flex" >
                    <SelectValue placeholder="Rent" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                <SelectGroup>
                    <SelectLabel>Less than</SelectLabel>
                    <SelectItem value="5000"> 5,000</SelectItem>
                    <SelectItem value="10000">10,000</SelectItem>
                    <SelectItem value="15000">15,000</SelectItem>
                    <SelectItem value="20000">20,000</SelectItem>
                    <SelectItem value="25000">25,000</SelectItem>
                    <SelectItem value="30000">30,000</SelectItem>
                    <SelectItem value="40000">40,000</SelectItem>
                    <SelectItem value="50000">50,000</SelectItem>
                    </SelectGroup>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <Button className="bg-main hover:bg-black w-full md:w-auto" type="submit">Search</Button>


      </form>
    </Form>

            
            {/* <Select id="type">
                <SelectTrigger className="w-full md:w-48">
                    <SelectValue placeholder="Type" />
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup>
                    <SelectItem value="all">All</SelectItem>
                    <SelectItem value="room">Rooms</SelectItem>
                    <SelectItem value="flat">Flat</SelectItem>
                    <SelectItem value="house">House</SelectItem>
                    <SelectItem value="office">Office</SelectItem>
                    </SelectGroup>
                </SelectContent>
            </Select>

            <Select>
                <SelectTrigger className="w-full md:w-48">
                    <SelectValue placeholder="Rent" />
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup className='z-30'  id="rent">
                    <SelectItem value="all">All</SelectItem>
                    <SelectLabel>Less than</SelectLabel>
                    <SelectItem value="5000"> 5,000</SelectItem>
                    <SelectItem value="10000">10,000</SelectItem>
                    <SelectItem value="15000">15,000</SelectItem>
                    <SelectItem value="20000">20,000</SelectItem>
                    <SelectItem value="25000">25,000</SelectItem>
                    <SelectItem value="30000">30,000</SelectItem>
                    <SelectItem value="40000">40,000</SelectItem>
                    <SelectItem value="50000">50,000</SelectItem>
                    </SelectGroup>
                </SelectContent>
            </Select> */}


    </article>
    <div className=" w-full flex h-full md:h-80 items-end overflow-hidden absolute top-0 -z-10 brightness-50">
      <Image src={Banner2} alt="banner" className="w-full md:w-1/2 h-auto"/>
      <Image src={Banner2} alt="banner" className="w-full md:w-1/2 h-auto hidden md:block"/>

    </div>
  </section>
  )
}

export default Search