import React from "react";
import { CardHeader, CardTitle } from "../ui/card";

export const Header = () => {
  return (
    <CardHeader
      className="flex flex-row justify-center  sm:justify-between  items-center border-solid border-b-2 border-sky-500 mb-[2rem] 
      shadow shadow-blue-500/40
    
      "
    >
      <CardTitle>
        <a
          className=" text-sky-500 text-[1.4rem] sm:text-[2rem] ease-in duration-300 hidden sm:block"
          href="/"
        >
          Douglas
        </a>
      </CardTitle>
      <div className="space-x-3 has:a sm:text-[1rem] text-[.9rem]  ">
        <a className="btnNav hover:text-sky-500 " href="#home">
          Home
        </a>
        <a className=" hover:text-sky-500 btnNav" href="#projects">
          Meus Projetos
        </a>
        <a className=" hover:text-sky-500 btnNav" href="#about-me">
          Sobre mim
        </a>
      </div>
    </CardHeader>
  );
};
