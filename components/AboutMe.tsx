import React from 'react';
import about from '@/data/about.json';
import Image from 'next/image';

const AboutMe = () => {
  return (
    <div className="md:max-w-[80%] mx-auto p-2 my-5 md:my-32 md:flex items-center">
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
                {/* // TODO ** will fixed logo soon */}
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
      <div className="w-full md:m-0 md:flex md:justify-end mt-20">
        <Image
          src={'/my-pic.jpg'}
          alt="my-picture"
          className="shadow-[3rem_-3rem_0.2rem_#848484] dark:shadow-[3rem_-3rem_0.2rem_#DBDBDB] mx-auto"
          width={350}
          height={600}
        ></Image>
      </div>
    </div>
  );
};

export default AboutMe;
