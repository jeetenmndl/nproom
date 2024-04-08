import { Button } from "@/components/ui/button";
import Image from "next/image";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import RoomCard from "@/components/RoomCard";


let data = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];

export default function Home() {
  return (
    <main>

    <section className="mx-20 my-16 grid grid-cols-4 gap-x-6 gap-y-8">
      {
        data.map((item)=>{
          return(
            <RoomCard key={item} />
          )
        })
      }
    </section>

    </main>
  );
}
