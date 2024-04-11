import React from 'react'
import CarouselImage from '@/components/CarouselImage'
import BookingCard from '@/components/BookingCard'

const page = () => {
  return (
    
    <section className='px-20 py-8 flex gap-8'>
        <CarouselImage />
        <BookingCard />
    </section>

  )
}

export default page