import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Img1 from '@/../public/img1.jpg'
import { Button } from './ui/button'
import {ChevronRight} from 'lucide-react'

const RoomCard = () => {
  return (
    <div className='cursor-pointer border-b-2 border-transparent hover:border-main duration-500'>

        <div className=" relative imageBox max-w-80 h-72 rounded-lg overflow-hidden">
            <Image className='rounded-lg' layout='fill' objectFit='cover' src={Img1} alt='room in Biratnagar'/>
        </div>

        <div className="descBox text-sm my-4">
          
            <h3 className='font-semibold text-gray-800 text-base overflow-hidden whitespace-nowrap text-ellipsis '>Peepal Chowk, Biratnagar</h3>
            <p className='text-gray-500 overflow-hidden whitespace-nowrap text-ellipsis'>Near Arniko Campus</p>
            <p className='text-gray-500'>Flat, Available</p>

            <div className="flex justify-between items-end">
              <p className='text-gray-800 font-medium mt-2'>Rs 12000 <span className='font-light'>/month</span></p>

              <Link href="#" className='mr-2'>
                <Button variant="outline" size="icon"  className=" size-8 hover:bg-main hover:text-white" >
                  <ChevronRight size={20} />
                </Button>
              </Link>
            </div>

        </div>

    </div>
  )
}

export default RoomCard