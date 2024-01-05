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
import { TypeAnimation } from 'react-type-animation';

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
    <div>
      <div className="flex justify-center items-center">
        <TypeAnimation
          sequence={[`The projects I've developed. `, 1000, '', 1000]}
          wrapper="span"
          speed={20}
          style={{
            fontSize: '1.9em',
            display: 'inline-block',
            fontWeight: 700,
            margin: '2rem 0 2rem',
          }}
          repeat={Infinity}
        />
      </div>
      <div className="md:max-w-[80%] mx-auto p-2 mb-5 md:flex items-center">
        <div className="grid xl:grid-cols-6 md:grid-cols-4 grid-cols-2 gap-10 mx-auto p-4">
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
        </div>
      </div>
    </div>
  );
};

export default Projects;
