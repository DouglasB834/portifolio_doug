import { Header } from "@/components/header/Header";
import { HomePage } from "@/components/home/home";
import { Stacks } from "@/components/stacks/Stacks";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex h-full flex-col   ">
      <Header />
      <div className="flex flex-col m-auto w-[95%] ">
        <HomePage />
        <Stacks />
      </div>
    </main>
  );
}
