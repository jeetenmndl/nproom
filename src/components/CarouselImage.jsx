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

export default function CarouselImage() {
  return (
    <Carousel className="w-full bg-light">
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index}>
            <div className="md:p-1">
              <Card>
                <CardContent className="flex w-full aspect-video items-center justify-center p-0 bg-light">
                  <Image src={Img1} alt="room" />
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

