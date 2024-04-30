import RoomCard from '@/components/RoomCard'
import Search from '@/components/Search'
import searchRooms from '@/lib/actions/searchRooms'
import React from 'react'

const page = async ({searchParams}) => {
    // console.log(searchParams)
    const rooms = await searchRooms(searchParams);
    console.log(rooms)

  return (
    <>
        <Search />
        <main className='mx-4 my-8 md:mx-20 md:my-16 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8'>
            <RoomCard />
            <RoomCard />
        </main>
    </>
  )
}

export default page