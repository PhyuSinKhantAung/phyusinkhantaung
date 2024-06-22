import React from "react";
import about from "@/data/about.json";
import { Github, Instagram, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

const Home = () => {
  return (
    <div className="mx-auto xl:flex xl:max-w-6xl xl:py-5">
      <div className="xl:w-1/2">
        <h1 className="text-4xl font-bold leading-[2.6rem] tracking-tight xl:text-6xl">
          {about.data.title}
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
            href={"/Phyu-Sin-Khant-Aung.pdf"}
            download="Phyu Sin Khant Aung Resume"
            target="_blank"
          >
            <Button size={"sm"} variant={"retro"}>
              Download CV
            </Button>
          </Link>
        </div>
      </div>

      <div className=" xl:w-1/2">
        <div className="my-16 flex justify-start xl:my-10 xl:justify-end">
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
