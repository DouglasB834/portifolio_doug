import { About } from "@/components/About/About";
import { BtnBackToUp } from "@/components/btnToUp/BtnBackToUp";
import { Footer } from "@/components/footer/Footer";
import { Header } from "@/components/header/Header";
import { HomePage } from "@/components/home/home";
import { Project } from "@/components/projects/Project";
import { Stacks } from "@/components/stacks/Stacks";

export default function Home() {
  return (
    <main className="flex h-full flex-col   ">
      <Header />
      <BtnBackToUp />
      <div className="flex flex-col m-auto w-[95%] ">
        <div className="img-bg">
          <HomePage />
          <Stacks />
        </div>
        <Project />
        <About />
      </div>
      <Footer />
    </main>
  );
}
