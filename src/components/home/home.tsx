import React from "react";
import { Card, CardContent } from "../ui/card";
import { Avatar } from "../ui/avatar";
import { userData } from "../../../utils/userData";
import { Contact } from "../iconsContact/Contact";
import { Email_whastapp } from "../iconsContact/email_whastapp";

export const HomePage = () => {
  return (
    <div className={`w-full h-full bg-cover `}>
      <Card
        className={`img-bg  border-none flex flex-col sm:flex-row items-center gap-4 `}
      >
        <div>
          <Avatar className="max-w-[250px] w-[100%] max-h-[250px] h-[100%]">
            <img
              className="w-[100%]"
              src={`https://github.com/${userData.githubUser}.png`}
              alt="Fotos do Desenvolvedor"
              title={userData.nameUser}
            />
          </Avatar>
        </div>
        <CardContent className="flex flex-col md:flex-row gap-5">
          <div>
            <h2 className="text-[1.7rem] sm:hidden font-bold text-center w-[14ch] ">
              <span className="text-sky-500"> {userData.nameUser}</span>{" "}
              Desenvolvedor Front
              <span className="text-[#00d1b2]"> & </span>Back End .
            </h2>

            <h2 className="text-[2rem]  hidden sm:block  font-bold text-center w-[13ch] ">
              Desenvolvedor Front
              <span className="text-[#00d1b2]"> & </span>
              ux/ui Designer.
            </h2>
            <p className="text-sky-500  pl-[1rem] text-[1rem] font-bold">
              Localizado na Terra 🌎
            </p>
          </div>
          <div className="flex flex-col  gap-4">
            <h3>Rede Social </h3>
            <Contact />
            <h3>Contatos</h3>
            <Email_whastapp />
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
