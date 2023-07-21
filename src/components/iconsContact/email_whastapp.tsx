"use client";
import Image from "next/image";
import { userData } from "../../../utils/userData";
import Whatsapp from "../../../assets/whatsapp.png";
import Email from "../../../assets/Email.png";

export const Email_whastapp = () => {
  return (
    <ul className=" flex gap-4 border-none">
      <li className="iconsContact relative ">
        <a
          className="pointer-events-auto"
          target="_blank"
          onClick={() => (window.location.href = "mailto:douglas borges")}
        >
          <Image
            className="rounded-full"
            src={Email}
            alt="Email"
            title="Email"
            width={50}
            height={50}
          />
        </a>
      </li>
      <li className="iconsContact relative">
        <a
          target="_blank"
          href={`https://api.whatsapp.com/send?phone=+55+${userData.whatsappNumber}&text=Ol%C3%A1%2C%20venho%20por%20meio%20do%20seu%20portf%C3%B3lio%20na%20internet%2C%20gostaria%20de%20conhecer%20melhor%20seus%20servi%C3%A7os`}
          className="border-[50%] border-white/[0.2"
        >
          <Image
            className="rounded-full"
            width={50}
            height={50}
            src={Whatsapp}
            alt="Whatsapp"
            title="Whatsapp"
          />
        </a>
      </li>
    </ul>
  );
};
