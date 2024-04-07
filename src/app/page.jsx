import { Button } from "@/components/ui/button";
import Image from "next/image";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import RoomCard from "@/components/RoomCard";

export default function Home() {
  return (
    <main className=" h-dvh">

    <section className="mx-24 my-16 grid grid-cols-4 gap-6">
      <RoomCard />
      <RoomCard />
      <RoomCard />
      <RoomCard />
    </section>

    </main>
  );
}
