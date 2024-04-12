import React from 'react'
import CarouselImage from '@/components/CarouselImage'
import BookingCard from '@/components/BookingCard'

const page = () => {
  return (
    
    <main className='px-20 py-8 flex gap-16 justify-between'>
      <div className=' w-4/6'>
        <CarouselImage />
        <CarouselImage />

      </div>
      <div className='w-2/6'>
        <BookingCard />
      </div>
    </main>

  )
}

export default page