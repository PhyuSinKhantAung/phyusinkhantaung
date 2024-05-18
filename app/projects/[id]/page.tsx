import React from "react";
import data from "@/data/projects.json";
import { Feature, Project, UsedTechnology } from "@/components/Projects";
import Image from "next/image";
import ProjectTitle from "@/components/ui/title";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";

const page = ({ params }: { params: { id: string } }) => {
  const projects = data.data;
  const projectId = params.id;

  const project = projects.find((item: Project) => item.id === projectId);

  return (
    <div>
      {project && (
        <div>
          <div className="mx-auto xl:max-w-6xl">
            <div className="xl:flex">
              <div className="my-6 flex flex-col gap-y-5 xl:w-1/2">
                <ProjectTitle title={project.title}></ProjectTitle>

                <p className="">{project.intro}</p>

                <div className="flex items-center gap-x-4 text-2xl font-bold">
                  <div className="h-1 w-1 bg-foreground"></div>
                  <h1>Features</h1>
                </div>
                <ul className="">
                  {project.features.map((item: Feature) => (
                    <li key={item.id} className="py-2 font-semibold">
                      {item.name}:
                      <span className="font-thin"> {item.description}</span>
                    </li>
                  ))}
                </ul>

                <div className="mb-2 flex gap-x-5">
                  {project?.api_doc_link && (
                    <Link href={project.api_doc_link} target="_blank">
                      <Button size={"sm"} variant={"retro"}>
                        View Documentation
                      </Button>
                    </Link>
                  )}

                  {project?.demo_link && (
                    <Link href={project.demo_link} target="_blank">
                      <Button size={"sm"} variant={"retro"}>
                        View Demo
                      </Button>
                    </Link>
                  )}
                  <Link href={project.repo_link} target="_blank">
                    <Button size={"sm"} variant={"retro"}>
                      Github
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="my-6 xl:w-1/2">
                <div className="flex flex-col gap-y-5 xl:ml-44">
                  <Image
                    src={project.details_image!}
                    width={400}
                    height={400}
                    alt={""}
                  ></Image>
                  <div className="flex gap-x-3 ">
                    {project.used_technologies.map((item: UsedTechnology) => (
                      <Badge variant="secondary" key={item.id}>
                        {item.name}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default page;
