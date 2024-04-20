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
import { Input } from './ui/input';
import { Button } from './ui/button';


const Search = () => {
  return (
    <section className='relative h-60 md:h-80'>
    <article className='grid place-items-center h-full'>
        <div className='flex flex-col md:flex-row gap-1 w-full md:w-auto px-16'>
            <Input type="text" placeholder="Enter City Name" />

            <Select>
                <SelectTrigger className="w-full md:w-48">
                    <SelectValue placeholder="Type" />
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup>
                    <SelectItem value="all">All</SelectItem>
                    <SelectItem value="room">Rooms</SelectItem>
                    <SelectItem value="flat">Flat</SelectItem>
                    <SelectItem value="house">House</SelectItem>
                    <SelectItem value="house">Office</SelectItem>
                    </SelectGroup>
                </SelectContent>
            </Select>

            <Select>
        <SelectTrigger className="w-full md:w-48">
            <SelectValue placeholder="Rent" />
        </SelectTrigger>
        <SelectContent>
            <SelectGroup>
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
            </Select>


            <Button className="bg-main hover:bg-black w-full md:w-auto">Search</Button>

        </div>
    </article>
    <div className=" w-full flex h-full md:h-80 items-end overflow-hidden absolute top-0 -z-10 brightness-50">
      <Image src={Banner2} alt="banner" className="w-full md:w-1/2 h-auto"/>
      <Image src={Banner2} alt="banner" className="w-full md:w-1/2 h-auto hidden md:block"/>

    </div>
  </section>
  )
}

export default Search