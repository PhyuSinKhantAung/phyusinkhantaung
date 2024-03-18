"use client";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { Button } from "./ui/button";
import ProjectsData from "@/data/projects.json";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { globalVariants } from "@/animation";

interface Project {
  id: string;
  title: string;
  description: string;
  repo_link: string;
  demo_link: string;
  download_link?: string;
  image: string;
  used_technologies: Array<UsedTechnology>;
}
interface UsedTechnology {
  id: string;
  name: string;
}

const Projects = () => {
  return (
    <motion.div
      variants={globalVariants.containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="mx-auto mb-5 items-center p-2 md:flex md:max-w-[80%]">
        <motion.div
          variants={globalVariants.fadeInVariants}
          className="mx-auto grid grid-cols-2 gap-10 p-4 md:grid-cols-4 xl:grid-cols-6"
        >
          {ProjectsData.data.map((project: Project) => (
            <Card
              key={project.id}
              className="col-span-full w-full border-2 border-solid border-black
             shadow-[6px_6px_#2d323d] md:col-span-2 md:w-72 lg:w-80
             dark:border-[#c8cace] dark:shadow-[6px_6px_#c8cace]"
            >
              <CardHeader className="m-0 mb-4 p-0">
                <Image
                  src={project.image}
                  alt="test"
                  width={800}
                  height={400}
                  className="rounded-t-md"
                ></Image>
              </CardHeader>
              <CardTitle className="text-center text-xl">
                {project.title}
              </CardTitle>

              <CardContent className="m-0 py-2">
                {project.used_technologies.map((item: UsedTechnology) => (
                  <Badge variant="outline" key={item.id} className="ml-2 mt-2">
                    {item.name}
                  </Badge>
                ))}
              </CardContent>

              <CardContent className="px-2 text-center">
                <CardDescription className="mt-2">
                  {project.description}
                </CardDescription>
              </CardContent>
              <CardFooter>
                <div className="mx-auto flex items-center justify-center gap-x-4">
                  <Button variant="retro" size="sm">
                    <a href={project.repo_link} target="_blank">
                      Github
                    </a>
                  </Button>
                  <Button size="sm" className="text-sm" variant="retro">
                    <a href={project.demo_link} target="_blank">
                      View Demo
                    </a>
                  </Button>
                </div>
              </CardFooter>
            </Card>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Projects;
