import * as React from "react"
import Image from 'next/image'
import Img1 from '@/../public/img1.jpg'
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export default function CarouselImage(props) {
  const photos = props.photos;
  return (
    <Carousel className="w-full bg-light">
      <CarouselContent>
        {photos.map((photo, index) => (
          <CarouselItem key={index*12.1}>
            <div className="md:p-1">
              <Card>
                <CardContent className="flex w-full aspect-video items-center justify-center p-0 bg-light">
                  <Image src={photo} width={500} height={900} className="w-auto h-full" alt="room" />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="translate-x-16 md:translate-x-20" />
      <CarouselNext className="-translate-x-16 md:-translate-x-20" />
    </Carousel>
  )
}

