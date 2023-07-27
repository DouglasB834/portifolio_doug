import React from "react";
import { Email_whastapp } from "../iconsContact/email_whastapp";

export const Footer = () => {
  return (
    <footer
      className="bg-slate-950  h-[300px] flex flex-col 
    items-center justify-center "
    >
      <div className="flex flex-col items-center justify-center ">
        <h3 className="text-white text-2xl font-bold">Entre em contato</h3>
        <p>para que possamos falar mais sobre...</p>
      </div>
      <Email_whastapp />
    </footer>
  );
};
