import React from "react";
import Image from "next/image";
import { userData } from "../../../utils/userData";
export const Contact = () => {
  return (
    <ul
      className="flex gap-4 items-start has:li relative
    "
    >
      {userData.socialMediaLinks.map((midia, index) => (
        <li key={index} className="iconsContact relative">
          <a href={`${midia.link}`} target="_blank">
            <Image src={midia.img} alt={midia.title} title={midia.title} />
          </a>
        </li>
      ))}
    </ul>
  );
};
