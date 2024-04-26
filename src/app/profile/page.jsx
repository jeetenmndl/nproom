import ProfileCard from '@/components/ProfileCard'
import RoomsInProfile from '@/components/RoomsInProfile'
import { Separator } from '@/components/ui/separator'

import React from 'react'

const page = () => {
  return (
   <main className='flex flex-col-reverse md:flex-row gap-8 mx-20 my-4 min-h-96 '>
        <RoomsInProfile />
        {/* <Separator orientation="vertical" /> */}
        <ProfileCard />
   </main>
  )
}

export default page