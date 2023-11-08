import AlbatravelSite from "../public/assets/AlbatravelSite.png";
import EcommerceSite from "../public/assets/ecommerceSite.png";
import hamburgueriaSite from "../public/assets/hamburgueriaSite.png";
import pokedexSite from "../public/assets/pokedexSite.png";
import { StaticImageData } from "next/image";

interface Project {
  title: string;
  link: string;
  description: string;
  tech: string;
  img: StaticImageData;
}

export const projects: Project[] = [
  {
    title: "Pokedex",
    link: "https://pokedex-inb.vercel.app/",
    img: pokedexSite,
    description:
      "Pokédex desenvolvida para listar todos os Pokémon, onde, com apenas um clique, é possível visualizar suas estatísticas e salvá-los nos favoritos para acesso mais fácil, com renderização do lado do servidor.",
    tech: "React.js, Next.js, Typescript, Style Components, JavaScript, Docker, TDD, Deploy Api-RESTfull",
  },
  {
    title: "Site de Viagem Albatreval",
    link: "https://douglasb834.github.io/Site-Agendamento-viagem-Albatreval-/",
    img: AlbatravelSite,
    description:
      "Site desenvolvido para agendamento de viagens, tanto para turismo como para viagens de negócio",
    tech: " HTML, CSS, JavaScript, Deploy.",
  },
  {
    title: "Hamburgueria da Kenzie",
    link: "https://react-entrega-s1-hamburgueria-da-kenzie-douglasb834-17.vercel.app/",
    img: hamburgueriaSite,
    description: `Um site simples desenvolvido em ReactJs que simula um E-commerce de uma hamburgueria, várias  funcionalidades foram aplicadas, filtro de produtos, notificação de pesquisa, adicionar e remover do carrinho, etc.
    `,
    tech: "React.js,Style components,CSS, TypeScrpt, Figma, Deploy.",
  },
  {
    title: "E-commerce roupa e Acessórios ",
    link: "https://kenzie-academy-brasil-developers.github.io/m1-entrega-capstone-ecommerce-DouglasB834/",
    img: EcommerceSite,
    description:
      "Site de E-commerce desenvolvido para venda de roupas e acessórios em geral. filtro de produtos, adicionar e remover do carrinho",
    tech: "HTML, CSS, JavaScript, Deploy.",
  },
];
