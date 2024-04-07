import React from 'react'
import Image from 'next/image'
import Img1 from '@/../public/img1.jpg'

const RoomCard = () => {
  return (
    <div className='cursor-pointer'>
        <div className=" relative imageBox max-w-80 h-72 rounded-lg overflow-hidden">
            <Image className='rounded-lg' layout='fill' objectFit='cover' src={Img1} alt='room in Biratnagar'/>
        </div>
        <div className="descBox">
            <h3 className='font-semibold text-gray-800'>Peepal Chowk, Biratnagar</h3>
            <p className='text-gray-600'>Near Arniko Campus</p>
            <p className='text-gray-600'>Flat, Available</p>
            <p className='text-gray-800 font-medium'>Rs 12000 <span className='font-light'>/month</span></p>
        </div>
    </div>
  )
}

export default RoomCard