import React from 'react'
import CarouselImage from '@/components/CarouselImage'
import BookingCard from '@/components/BookingCard'

const page = () => {
  return (
    
    <main className='px-20 py-8 flex gap-16 justify-between'>

      {/* left section */}
      <div className=' w-4/6'>

        <CarouselImage />

        <div className='mt-12 mb-4'>
          <h1 className='text-3xl font-semibold mb-2'>Flat for rent at Peepal Chowk, Biratnagar</h1>
          <p>Property Owner: <span className='font-medium'>Jeeten Mandal</span></p>
        <hr className='my-4' />
        <p className='leading-8'>Welcome to your new home! This charming flat offers comfortable living with its two cozy bedrooms, perfect for a small family or roommates. The bright and airy hall provides a welcoming space for relaxation and entertainment. Cook up delicious meals in the fully equipped kitchen, complete with modern appliances. All rooms come fully furnished, ensuring convenience from day one. Located in a peaceful neighborhood, youll enjoy tranquility while being close to amenities and transport links. Dont miss out on this wonderful opportunity to make this flat your own!</p>
        </div>

      </div>

      {/* right section card  */}
      <div className='w-2/6'>
        <BookingCard />
      </div>

    </main>

  )
}

export default page