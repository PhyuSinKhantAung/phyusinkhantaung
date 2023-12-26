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

interface Project {
  id: string;
  title: string;
  description: string;
  repo_link: string;
  demo_link: string;
  image: string;
}

const Projects = () => {
  return (
    <div className="md:max-w-[80%] mx-auto p-2 my-5 md:flex items-center">
      <div className="grid lg:grid-cols-6 md:grid-cols-4 grid-cols-2 gap-10 mx-auto p-4">
        {ProjectsData.data.map((project: Project) => (
          <Card
            key={project.id}
            className="w-full md:w-72 md:col-span-2 col-span-full border-2 border-solid border-black shadow-[6px_6px_#2d323d]"
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
            <CardContent className="text-center p-2">
              <CardDescription>{project.description}</CardDescription>
            </CardContent>
            <CardFooter>
              <div className="mx-auto">
                <Button size="sm" className="text-sm">
                  <a href={project.repo_link} target="_blank">
                    Github
                  </a>
                </Button>
                <Button size="sm" className="text-sm" variant="link">
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
  );
};

export default Projects;
