import React from "react";
import about from "@/data/about.json";
import Image from "next/image";

const AboutMe = () => {
  return (
    <div>
      <div className="md:max-w-[80%] mx-auto p-2 my-5 md:flex items-center">
        <div className=" w-full ">
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
            {about.data.title}
          </h1>
          <h2 className="text-lg font-semibold pt-5">{about.data.subtitle}</h2>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            {about.data.paragraph}
          </p>
          <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
            {about.data.skills.map(
              (skill: {
                id: number;
                name: string;
                logo: string;
                size: number;
              }) => (
                <li key={skill.id}>
                  {skill.name}
                  {/* <Image
                    src={skill.logo}
                    alt={skill.name}
                    width={skill.size}
                    height={skill.size}
                    className="ml-2 inline-block"
                  ></Image> */}
                </li>
              )
            )}
          </ul>
        </div>
        <div className="w-full mt-12 md:m-0">
          <Image
            src={"/my-photo.jpg"}
            alt="my-picture"
            width={600}
            height={800}
          ></Image>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
