import { Header } from "@/components/header/Header";
import { HomePage } from "@/components/home/home";
import { Project } from "@/components/projects/Project";
import { Stacks } from "@/components/stacks/Stacks";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex h-full flex-col   ">
      <Header />
      <div className="flex flex-col m-auto w-[95%] ">
        <div className="img-bg">
          <HomePage />
          <Stacks />
        </div>
        <Project />
      </div>
    </main>
  );
}
