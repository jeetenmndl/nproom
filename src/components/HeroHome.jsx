import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Knocking from '@/../public/knocking.jpg'
import {ChevronRight} from 'lucide-react'

const HeroHome = () => {
  return (
    <section className='py-12'>
        <article className='bg-light grid grid-cols-1 md:grid-cols-2'>

            <div>
                <Image src={Knocking} alt='knocking' />
            </div>

            <div className='px-4 py-4 md:px-12 md:py-16'>
                <h3 className='text-xl md:text-3xl font-bold'>Knocking the door for finding your stay is old-fashion now !!!</h3>

                <ul className="mt-8 ml-4 md:ml-6 list-disc [&>li]:mt-4">
                    <li>No need to visit multiple places.</li>
                    <li>Relieved from knocking the doors.</li>
                    <li>We provide available stays in required location at one place.</li>
                    <li>Search locations, and filter (Stay type, rent & city).</li>
                    <li>Compare among options and find your match in no time.</li>
                </ul>

                <div className='flex items-center gap-4 mt-8 [&>div]:cursor-pointer'>
                    <div className='bg-green-400 rounded-xl w-52 px-4 py-2 flex justify-between items-center [&>div>p]:hover:underline'>
                        <div>
                            <span className='text-md'>Whatsapp</span>
                            <p className='flex text-xs'>+977 9812345678</p>
                        </div>

                        <ChevronRight />
                    </div>

                    <div className='bg-gray-900 text-white rounded-xl w-52 px-4 py-2 flex justify-between items-center [&>div>p]:hover:underline'>
                        <div>
                            <span className='text-md'>Phone Call</span>
                            <p className='flex text-xs'>+977 9812345678</p>
                        </div>

                        <ChevronRight />
                    </div>
                </div>

            </div>

        </article>
    </section>
  )
}

export default HeroHome