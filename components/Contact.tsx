"use client";
import React, { useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";
import SocialsData from "@/data/socials.json";
import { Facebook, Github, Instagram, Linkedin } from "lucide-react";
import { send } from "emailjs-com";
import { useToast } from "@/components/ui/use-toast";
import { Toaster } from "./ui/toaster";
import PageTitle from "@/components/ui/title";
interface Social {
  id: string;
  name: string;
  link: string;
}

const Contact = () => {
  const [data, setData] = useState({
    name: "",
    message: "",
    reply_to: "",
  });
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: any) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const template = "template_keplteb";
  const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
  const userId = process.env.NEXT_PUBLIC_EMAILJS_USER_ID;

  const onSubmit = (e: any) => {
    e.preventDefault();
    setIsLoading(true);
    if (!userId || !serviceId) {
      toast({
        description: "  Something went wrong!",
      });
      return;
    }
    send(serviceId, template, data, userId)
      .then((response) => {
        toast({
          description: "✅  Your email has been sent.",
        });
        setData({
          name: "",
          message: "",
          reply_to: "",
        });
        setIsLoading(false);
        console.log({ response });
      })
      .catch((error) => {
        setIsLoading(false);
        // console.log({ error });
        toast({
          variant: "destructive",
          description: "Something went wrong!",
        });
      });
  };
  return (
    <div className="my-6 p-1 sm:mt-8">
      <Toaster />

      <PageTitle title="Let's get in touch!"></PageTitle>

      <div className="my-6 md:flex">
        <form onSubmit={onSubmit} className="flex flex-col gap-y-5 md:w-1/2 ">
          <Input
            placeholder="Enter your name"
            type="text"
            name="name"
            value={data.name}
            onChange={handleChange}
            required={true}
          />
          <Input
            type="text"
            name="reply_to"
            value={data.reply_to}
            onChange={handleChange}
            placeholder="Enter your email"
            required={true}
          />
          <Textarea
            name="message"
            value={data.message}
            onChange={handleChange}
            placeholder="Enter your message"
            required={true}
          />
          <div>
            <Button size="sm" type="submit" variant="retro">
              {isLoading ? "Submitting..." : "Submit"}
            </Button>
          </div>
        </form>

        <div className="py-10 md:mx-10 md:w-1/2 md:py-3 md:pt-0">
          <p className="text-lg">
            {`Feel free to reach out and connect! Whether you have a project in
            mind, want to discuss collaboration opportunities, or just want to
            say hello, just directly email me at `}

            <a
              href="mailto:phyusinkhantaung22@gmail.com"
              className=" text-blue-700"
            >
              mail@phyusin.dev
            </a>
            {`. I'm always open to new conversations. Let's
              build something amazing together.`}
          </p>

          <ul className="my-10 list-disc [&>li]:mt-2">
            {SocialsData.data.map((social: Social) => (
              <a
                href={social.link}
                target="_blank"
                key={social.id}
                className="mb-5 flex items-center gap-x-2"
              >
                {social.name === "Facebook" && <Facebook size={18} />}
                {social.name === "Instagram" && <Instagram size={18} />}
                {social.name === "Github" && <Github size={18} />}
                {social.name === "Linkedin" && <Linkedin size={18} />}

                <li className="list-none text-lg font-bold">
                  Follow me on {social.name}
                </li>
              </a>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Contact;
