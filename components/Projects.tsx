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
import Link from "next/link";
import Title from "@/components/ui/title";
import { SiApple, SiGoogleplay } from "react-icons/si";

export type Feature = {
  id: string;
  name: string;
  description: string;
};

export type Project = {
  id: string;
  title: string;
  description: string;
  repo_link: string;
  demo_link: string | null;
  download_link?: string;
  image: string;
  used_technologies: Array<UsedTechnology>;
  details_image: string;
  features: Feature[];
  intro: string;
  api_doc_link: null | string;
};
export type UsedTechnology = {
  id: string;
  name: string;
};

const Projects = () => {
  return (
    <div className="my-20">
      <Title title="Real-World Projects"></Title>
      <div className="my-4 mt-6">
        <h2 className="text-2xl font-semibold ">MyanCare Telehealth</h2>
        <p className="py-2 ">
          A Telehealth App for a hospital in Myanmar. The app allows doctors to
          remotely consult with patients and receive real-time updates on their
          health status.
        </p>
      </div>
      <div className=" my-2 grid w-full grid-cols-2 lg:grid-cols-4 ">
        <Image
          src={"/projects/real-world-pjs/myancare-teleconsultation.jpg"}
          alt="project-image"
          width={400}
          height={400}
          className="border-2 border-ring "
        />
        <Image
          src={"/projects/real-world-pjs/myancare-panel-report.jpg"}
          alt="project-image"
          width={400}
          height={400}
          className="border-2 border-ring "
        />
        <Image
          src={"/projects/real-world-pjs/myancare-articles.jpg"}
          alt="project-image"
          width={400}
          height={400}
          className="border-2 border-ring "
        />
        <Image
          src={"/projects/real-world-pjs/myancare-transactions.jpg"}
          alt="project-image"
          width={400}
          height={400}
          className="border-2 border-ring "
        />
      </div>
      <div className="mt-4 text-lg  italic">My Contributions to MyanCare:</div>
      <div className="text-md my-4">
        <div className="font-bold">What did i do in MyanCare?</div>
        <p>
          ╰┈➤ Developed Admin Panel (frontend) and also built and optimized APIs
          (backend) for patient and doctor apps.
        </p>
        <br />
        <div className="font-bold">The Features I worked on</div>
        <p>
          ╰┈➤ VoIP Migration, Call Feedback Ratings System, Articles Management,
          Doctor Income Reports & Dashboard Reportings, and Enhanced
          Authorization System and Transactions Query.
        </p>
        <br />
        <p>
          I successfully migrated the VoIP feature using a new service since the
          previous one was deprecated at that time. In addition, I managed
          real-time user events and appointment call logs using webhooks,
          ensuring smooth and efficient communication. To enhance performance, I
          optimized wallet transaction queries and refactored legacy code
          modules for improved efficiency and maintainability. I also built an
          articles management module for healthcare-related content, enabling
          easy creation, editing, deletion, and efficient navigation through
          search and filtering options. Moreover, I developed a call feedback
          records feature, allowing administrators to track, analyze feedback
          trends, and improve service quality.
        </p>
      </div>
      <div className="text-md my-4">
        <div className="rounded-md bg-secondary p-3">
          <div className="text-lg font-semibold">Impact .ᐟ</div>
          <p>
            Ensured uninterrupted service during VoIP migration. Delivered a
            more secure and efficient platform for patients and doctors.
            Improved admin panel performance, enabling real-time data analysis
            for over 10,000 users. Delivered actionable insights to
            administrators, enhancing decision-making and platform efficiency.
          </p>
        </div>

        <div className="my-4 flex gap-5">
          <div>
            <Link
              href={
                "https://play.google.com/store/apps/details?id=com.myancare&pcampaignid=web_share"
              }
              target="_blank"
            >
              <Button className="px-2 py-7" variant={"retro"}>
                <div className="flex gap-x-1 text-wrap text-start">
                  <SiGoogleplay size={40} />

                  <div className="flex flex-col items-start">
                    Available <br />
                    on the Google Play
                  </div>
                </div>
              </Button>
            </Link>
          </div>

          <div>
            <Link
              href={
                "https://apps.apple.com/mm/app/myancare-telehealth/id1396490288"
              }
              target="_blank"
            >
              <Button className="px-2 py-7" variant={"retro"}>
                <div className="flex gap-x-1 text-wrap text-start">
                  <SiApple size={40} />

                  <div className="flex flex-col items-start">
                    Download <br />
                    on the App Store
                  </div>
                </div>
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <hr />

      <div className="my-4 mt-6">
        <h2 className="text-2xl font-semibold ">
          YinThway (Call Center Platform)
        </h2>
        <p className="py-2 ">
          A call center platform that connects parents with doctors for
          consultations about their babies. It allows users to purchase call
          packages for easy communication with healthcare professionals,
          focusing on baby-related care and support.
        </p>
      </div>
      <div className=" my-2 grid w-full grid-cols-2 lg:grid-cols-4 ">
        <Image
          src={"/projects/real-world-pjs/yinthway-baby-tracker.jpg"}
          alt="project-image"
          width={400}
          height={400}
          className="border-2 border-ring "
        />
        <Image
          src={"/projects/real-world-pjs/yinthway-development-milestones.jpg"}
          alt="project-image"
          width={400}
          height={400}
          className="border-2 border-ring "
        />
        <Image
          src={"/projects/real-world-pjs/yinthway-knowledge-sharing.jpg"}
          alt="project-image"
          width={400}
          height={400}
          className="border-2 border-ring "
        />
      </div>
      <div className="mt-4 text-lg  italic">My Contributions to YinThway:</div>
      <div className="text-md my-4">
        <div className="font-bold">What did i do in YinThway?</div>
        <p>
          ╰┈➤ Developed Admin Panel (frontend) and also built and optimized APIs
          (backend) for user app.
        </p>
        <br />
        <div className="font-bold">The Features I worked on</div>
        <p>
          ╰┈➤ Baby Tracker, Knowledge Sharing Modules such as Development
          Milestones, Vaccine Info
        </p>
        <br />
        <p>
          I contributed to the development of the Yin Thway application as a
          full-stack developer, working on both the admin panel (frontend) and
          backend APIs. I developed a{" "}
          <span className="font-bold">Baby Tracker</span> feature that helps
          parents monitor their baby’s growth and developmental milestones,
          including weight, height, vaccinations, and feeding schedules. The
          feature includes an intuitive interface for easy data input and
          viewing, along with notifications and reminders for upcoming checkups.
          Additionally, I created a{" "}
          <span className="font-bold">Knowledge Sharing</span> module to provide
          parents with educational content on child development milestones,
          ensuring organized and accessible information for better parenting
          support.
        </p>
      </div>
      <div className="text-md my-4">
        <div className="rounded-md bg-secondary p-3">
          <div className="text-lg font-semibold">Impact .ᐟ</div>
          <p>
            Enabled over 1,000 parents to track their baby’s growth and receive
            timely reminders for vaccinations. Increased user engagement on the
            platform by 15% through the knowledge-sharing module and baby
            tracker with easy access to baby records.
          </p>
        </div>
        <div className="my-4 flex gap-4">
          <div>
            <Link
              href={
                "https://play.google.com/store/apps/details?id=com.myancare.yinthway&pcampaignid=web_share"
              }
              target="_blank"
            >
              <Button className="px-2 py-7" variant={"retro"}>
                <div className="flex gap-x-1 text-wrap text-start">
                  <SiGoogleplay size={40} />

                  <div className="flex flex-col items-start">
                    Available <br /> on the Google Play
                  </div>
                </div>
              </Button>
            </Link>
          </div>

          <div>
            <Link
              href={"https://apps.apple.com/us/app/yinthway/id6477274918"}
              target="_blank"
            >
              <Button className="px-2 py-7" variant={"retro"}>
                <div className="flex gap-x-1 text-wrap text-start">
                  <SiApple size={40} />

                  <div className="flex flex-col items-start">
                    Download <br /> on the App Store
                  </div>
                </div>
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <hr />

      <div className="my-4 mt-6">
        <h2 className="text-2xl font-semibold ">
          Sun Community Health (EMR Platform)
        </h2>
        <p className="py-2 ">
          A platform designed for doctors to record and manage their {""}
          {`patients`} electronic medical records (EMRs) efficiently within the
          app. It helps streamline patient data management, making it easier for
          healthcare professionals to update, access, and track medical records.
        </p>
      </div>
      <div className=" my-2 grid w-full grid-cols-2 lg:grid-cols-4 ">
        <Image
          src={"/projects/real-world-pjs/sun-app.jpg"}
          alt="project-image"
          width={400}
          height={400}
          className="border-2 border-ring "
        />
        <Image
          src={"/projects/real-world-pjs/sun-dashboard.jpg"}
          alt="project-image"
          width={400}
          height={400}
          className="border-2 border-ring "
        />
      </div>
      <div className="mt-4 text-lg  italic">
        My Contributions to Sun (EMR Platform):
      </div>
      <div className="text-md my-4">
        <div className="font-bold">What did i do in Sun (EMR Platform)?</div>
        <p>
          ╰┈➤ Developed Admin Panel (frontend) and also built and optimized APIs
          (backend) for doctor apps.
        </p>
        <br />
        <div className="font-bold">The Features I worked on</div>
        <p>
          ╰┈➤ Doctor Registration, EMR Edit Feature, Patient Advanced Filtering
        </p>
        <br />
        <p>
          I developed a user-friendly EMR edit feature that allows doctors to
          update patient records dynamically with real-time synchronization,
          along with robust validation for data accuracy. Additionally, I
          implemented a doctor registration feature through the admin panel,
          streamlining the onboarding process for new doctors. I also developed
          an advanced patient filtering feature, enabling doctors and
          administrators to efficiently filter patients based on their upcoming
          follow-up appointments, improving patient management and care
          continuity.
        </p>

        <p className="py-2 ">
          I was responsible for developing the app and the admin panel, but the
          maintenance has been fully transferred to the Sun Community Health
          team. My involvement in the project, including development and
          maintenance, has been officially terminated.
        </p>
      </div>
      <div className="text-md my-4">
        <div className="rounded-md bg-secondary p-3">
          <div className="text-lg font-semibold">Impact .ᐟ</div>
          <p>
            Enabled over 500 doctors to create and edit EMRs efficiently,
            reducing data entry time by 30%. Improved data accuracy by 20%
            through form validation and error handling.
          </p>
        </div>
      </div>

      <div className="my-10 h-[0.5px] w-full bg-black"></div>
      <Title title="My Creations"></Title>
      <div className="my-5 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {ProjectsData.my_creations.map((project: Project) => (
          <div key={project.id} className="">
            <Card>
              <div className="m-0 p-0">
                <Image
                  src={project.image}
                  alt="project-image"
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
