import React from "react";
import { projects } from "../../../utils/projectData";
import Image from "next/image";
import { CardContent } from "../ui/card";

export const Project = () => {
  return (
    <div className="h-full mb-[4rem] z-[2] ">
      <h3
        id="projects"
        className="text-white text-[2rem] font-bold  text-center"
      >
        Projetos
      </h3>
      <ul className=" flex flex-col  max-w-[1200px] m-auto ">
        {projects.map((project, index) => (
          <li
            key={index}
            className={`${
              index % 2 == 0
                ? "bg-gray-700  flex flex-col object-cover gap-[1rem] border-l-[1px] border-b-[1px] md:flex-row md:gap-[4rem] "
                : "bg-gray-800 flex flex-col justify-end  border-r-[1px] border-b-[1px] gap-[1rem] md:gap-[4rem] md:flex-row-reverse "
            }`}
          >
            <a
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="p-4 "
            >
              <figure className=" w-[100%]rounded-[5px]">
                <Image
                  alt={project.title}
                  title={project.title}
                  src={project.img}
                  className=" w-[100%] max-w-[500px] object-cover"
                />
              </figure>
            </a>
            <CardContent className="p-4 flex flex-col gap-4 w-[100%] md:w-[45%] justify-center ">
              <h4 className="text-white font-bold text-[1.2rem] md:text-[1.5rem]">
                {project.title}
              </h4>
              <p className="text-white text-[1rem]">{project.description}</p>
              <span className="text-[0.9rem] sm:text-[1rem] ">
                <strong className="text-sky-400 text-[1.1rem] sm:text-[1.2rem] ">
                  Tecnologias utilizadas
                </strong>
                : {project.tech}
              </span>
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="p-1 w-[120px] border border-sky-400   hover:text-sky-500 text-center transition ease-linear delay-1 text-[1rem]"
              >
                Veja o projeto
              </a>
            </CardContent>
          </li>
        ))}
      </ul>
    </div>
  );
};
