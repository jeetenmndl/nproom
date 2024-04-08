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
    <section className='relative h-80'>
    <article className='grid place-items-center h-full'>
        <div className='flex gap-1'>
            <Input type="text" placeholder="Enter City Name" />

            <Select>
                <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Type" />
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup>
                    <SelectItem value="all">All</SelectItem>
                    <SelectItem value="room">Rooms</SelectItem>
                    <SelectItem value="flat">Flat</SelectItem>
                    <SelectItem value="house">House</SelectItem>
                    </SelectGroup>
                </SelectContent>
            </Select>

            <Select>
        <SelectTrigger className="w-[180px]">
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


            <Button>Search</Button>

        </div>
    </article>
    <div className=" w-full flex h-80 items-end overflow-hidden opacity-100 absolute top-0 -z-10">
      <Image src={Banner2} alt="banner" className="w-1/2 h-auto"/>
      <Image src={Banner2} alt="banner" className="w-1/2 h-auto"/>

    </div>
  </section>
  )
}

export default Search