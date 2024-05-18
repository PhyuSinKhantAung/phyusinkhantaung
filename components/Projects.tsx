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
import Link from "next/link";
import Title from "@/components/ui/title";

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
    <div className="mx-auto my-20 xl:max-w-6xl">
      <Title title="My Creations"></Title>

      <div className="mx-auto my-5 grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:max-w-6xl">
        {ProjectsData.data.map((project: Project) => (
          <div key={project.id} className="">
            <Card>
              <div className="m-0 p-0">
                <Image
                  src={project.image}
                  alt="test"
                  width={400}
                  height={400}
                  className="w-full rounded-t-md "
                ></Image>
              </div>

              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
              </CardHeader>

              <CardContent>
                <CardDescription>{project.description}</CardDescription>
              </CardContent>

              <CardFooter>
                <Link href={`/projects/${project.id}`}>
                  <Button variant="retro" size="sm">
                    View Details
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
