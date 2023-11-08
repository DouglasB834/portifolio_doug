import React from "react";
import { Card, CardContent, CardTitle } from "../ui/card";
import Image from "next/image";
import Cover1 from "../../../public/assets/Cover1.png";
import Cover2 from "../../../public/assets/Cover2.png";
import Cover3 from "../../../public/assets/Cover3.png";

export const About = () => {
  return (
    <Card className="h-full border-none mb-[2rem] flex flex-col gap-4 text-white">
      <CardTitle
        id="about-me"
        className="sm:text-[2rem] text-[1.5rem] font-bold text-center "
      >
        Um pouco sobre mim
      </CardTitle>
      <CardContent className="flex flex-col gap-4 items-center justify-center sm:flex-row">
        <p className="w-[100%] sm:w-[45ch] text-xl text-right ">
          <span className="underline text-sky-500">Sou Douglas</span> e posso me
          descrever como entusiasta, espontâneo, dedicado a tudo que faço. Levo
          os estudos e trabalho muito a sério. Mas, quem falou que não dá pra
          trabalhar se divertindo com o que faz? Sou
          <strong className="text-sky-500"> Full-Stack</strong>, mas amo
          desenvolver em <strong className="text-sky-500">Front-end</strong>. Se
          você sente o mesmo, vou adorar trabalhar com você e poder adquirir
          todo conhecimento que os mais experientes podem compartilhar.{" "}
          <span className="text-sky-500">Vem comigo nessa jornada?</span>
        </p>
        <figure className="grid grid-cols-2 grid-rows-2 gap-4 sm:grid-cols-3 px-4 items-center content-center justify-items-center">
          <Image
            src={Cover1}
            alt=""
            about=""
            className="col-span-2 row-span-2"
          />
          <Image src={Cover2} alt="" about="" />
          <Image src={Cover3} alt="" about="" />
        </figure>
      </CardContent>
    </Card>
  );
};
