import { Button } from "@/components/ui/button";
import RoomCard from "@/components/RoomCard";
import Image from "next/image";
import Search from "@/components/Search";



let data = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];

export default function Home() {
  return (
    <main>

    <Search />


    {/* rooms card  */}
    <section className="mx-20 my-16 ">
      <article className="grid grid-cols-4 gap-x-6 gap-y-8">
      {
        data.map((item)=>{
          return(
            <RoomCard key={item} />
          )
        })
      }
      </article>
      <div className="flex flex-col items-center mt-16">
        <p className="font-semibold text-lg mb-4">Continue exploring more rooms and flats</p>
        <Button className="bg-main">Show More</Button>
      </div>
    </section>

    </main>
  );
}
