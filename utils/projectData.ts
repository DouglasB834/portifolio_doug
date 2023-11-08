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
    title: "E-commerce de Eletronicos",
    link: "https://ecommerce-store-seven-lilac.vercel.app/",
    img: EcommerceSite,
    description:
      "simula uma aplicação de compra de produtos eletrônicos online, como teclados, mouses, monitores e gabinetes. Foi criado um carrinho de compras para os produtos, juntamente com a integração do Stripe para o método de pagamento e verificação de funções, tudo feito pelo lado do servidor ",
    tech: "HTML, CSS3, React.js, Next.js, TypeScript, Tailwind, Shadcn.ui, Lucide, Prisma, Node.js, PostgreSQL,  Figma.",
  },
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
];
