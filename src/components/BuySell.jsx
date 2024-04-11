import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Banner1 from '@/../public/banner1.png'
import Banner2 from '@/../public/banner2.png'
import {ChevronRight} from 'lucide-react'


const BuySell = () => {
  return (
    <section className="my-24 mx-20">
    <article className="grid grid-cols-2 gap-8">

        <div className="flex rounded bg-gray-100 overflow-hidden shadow-sm border border-gray-200">
            <div className="grid place-content-center w-2/5 overflow-hidden bg-brick">
                <Image src={Banner1} alt="buy" className=" h-52 w-max" />
            </div>
            <div className="w-3/5 py-8 px-6 flex flex-col justify-between border-b-2 border-transparent hover:border-main duration-500">
                <h3 className="text-2xl font-semibold">Rent your room, flat, home</h3>
                <p className="text-sm  italic text-gray-700">Upload details about your rooms and we will do the finding job.</p>
                <div className="flex items-center gap-4">
                <Link href="#" className="text-333 hover:underline">Upload Details</Link>
                <ChevronRight />
                </div>
            </div>
        </div>

        <div className="flex rounded bg-gray-100 overflow-hidden shadow-sm border border-gray-200">
            <div className="grid place-content-center w-2/5 overflow-hidden bg-brick">
                <Image src={Banner2} alt="buy" className=" h-52 w-max" />
            </div>
            <div className="w-3/5 py-8 px-6 flex flex-col justify-between border-b-2 border-transparent hover:border-main duration-500">
                <h3 className="text-2xl font-semibold">Find available rooms</h3>
                <p className="text-sm italic text-gray-700">Choose and book rooms of your choice at required location.</p>
                <div className="flex items-center gap-4">
                <Link href="#" className="text-333 hover:underline">View Rooms</Link>
                <ChevronRight />
                </div>
            </div>
        </div>

    </article>
    </section>
  )
}

export default BuySell