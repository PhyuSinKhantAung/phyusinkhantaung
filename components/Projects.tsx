'use client';
import React from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import Image from 'next/image';
import { Button } from './ui/button';
import ProjectsData from '@/data/projects.json';
import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion';
import { globalVariants } from '@/animation';

interface Project {
  id: string;
  title: string;
  description: string;
  repo_link: string;
  demo_link: string;
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
      <div className="md:max-w-[80%] mx-auto p-2 mb-5 md:flex items-center">
        <motion.div
          variants={globalVariants.fadeInVariants}
          className="grid xl:grid-cols-6 md:grid-cols-4 grid-cols-2 gap-10 mx-auto p-4"
        >
          {ProjectsData.data.map((project: Project) => (
            <Card
              key={project.id}
              className="w-full lg:w-80 md:w-72 md:col-span-2 col-span-full
             border-2 border-solid border-black dark:border-[#c8cace]
             shadow-[6px_6px_#2d323d] dark:shadow-[6px_6px_#c8cace]"
            >
              <CardHeader className="p-0 m-0 mb-4">
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

              <CardContent className="text-center px-2">
                <CardDescription className="mt-2">
                  {project.description}
                </CardDescription>
              </CardContent>
              <CardFooter>
                <div className="flex gap-x-4 justify-center items-center mx-auto">
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
