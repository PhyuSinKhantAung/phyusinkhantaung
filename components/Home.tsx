import React from "react";
import about from "@/data/about.json";
import { Github, Instagram, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

const Home = () => {
  return (
    <div className="lg:my-40 lg:flex">
      <div className="lg:w-1/2">
        <h1 className="text-4xl font-bold leading-[2.6rem] tracking-tight lg:text-6xl">
          Hello, {`I'm`} <br></br> Phyu Sin Khant Aung ツ
        </h1>
        <h2 className="pt-5 text-lg font-semibold">{about.data.subtitle}</h2>
        <p className="text-base leading-7 [&:not(:first-child)]:mt-6">
          {about.data.paragraph}
        </p>

        <div className="my-4 flex gap-x-4">
          <Link href={"https://github.com/phyusinkhantaung"}>
            <div className="rounded-md bg-secondary p-2">
              <Github size={18} />
            </div>
          </Link>
          <Link
            href={"https://www.linkedin.com/in/phyu-sin-khant-aung-83572b24a"}
          >
            <div className="rounded-md bg-secondary p-2">
              <Linkedin size={18} />
            </div>
          </Link>
          <Link href={"https://www.instagram.com/rollyy_22"}>
            <div className="rounded-md bg-secondary p-2">
              <Instagram size={18} />
            </div>
          </Link>
        </div>

        <div>
          <Link
            href={"/phyusin-resume.pdf"}
            download="Phyu Sin Khant Aung Resume"
            target="_blank"
          >
            <Button size={"sm"} variant={"retro"}>
              Download CV
            </Button>
          </Link>
        </div>
      </div>

      <div className="lg:w-1/2">
        <div className="mb-10 mt-12 flex justify-start lg:ml-48 lg:mt-4 xl:ml-80">
          <Image
            src={"/image.png"}
            alt="my-photo"
            className="image-shadow rounded-2xl border-2 border-ring object-cover"
            width={400}
            height={400}
          ></Image>
        </div>
      </div>
    </div>
  );
};

export default Home;
