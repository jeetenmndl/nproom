import RoomCard from '@/components/RoomCard'
import Search from '@/components/Search'
import searchRooms from '@/lib/actions/searchRooms'
import { Frown } from 'lucide-react'
import React from 'react'

const page = async ({searchParams}) => {
    // console.log(searchParams)
    const response = await searchRooms(searchParams);
    const rooms = response.data;

  return (
    <main className='relative min-h-dvh'>
        <Search />
          {
            rooms.length==0?
            <div className='w-full py-32 flex items-center flex-col gap-4 absolute text-3xl font-semibold text-gray-500'>
              <p>No rooms matched</p> <Frown size={32} />
            </div>
            :
            
        <section className=' px-4 py-8 md:px-20 md:py-16 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8'>
          {rooms.map((room)=>{
              return(
                <RoomCard room={room} key={room._id} />
              )
            })
          }
        </section>

          }
    </main>
  )
}

export default page