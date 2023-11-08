import { StaticImageData } from "next/image";
import Github from "../public/assets/github.png";
import Instagram from "../public/assets/instagram.png";
import Linkeding from "../public/assets/linkedin.png";
import FaceBook from "../public/assets/Bt-Circle.png";

export interface UserData {
  nameUser: string;
  githubUser: string;
  whatsappNumber: string;
  emailUser: string;
  instagramUser: string;
  socialMediaLinks: SocialMediaLinks[];
}

interface SocialMediaLinks {
  title: string;
  link: string;
  img: string | StaticImageData;
}

export const userData: UserData = {
  nameUser: "Douglas S Borges",
  githubUser: "DouglasB834",
  whatsappNumber: "+5521983003101",
  emailUser: "douglas_borges09@hotmail.com",
  instagramUser: "d0uglas_borges",
  socialMediaLinks: [
    {
      title: "Linkedin",
      link: "https://www.linkedin.com/in/douglassborges/",
      img: Linkeding,
    },
    {
      title: "Instagram",
      link: "https://www.instagram.com/d0uglas_borges/",
      img: Instagram,
    },
    {
      title: "Github",
      link: "https://github.com/DouglasB834",
      img: Github,
    },
    {
      title: "Facebook",
      link: "https://www.facebook.com/douglas.borges.5",
      img: FaceBook,
    },
  ],
};
