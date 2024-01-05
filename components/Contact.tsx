'use client';
import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { Textarea } from './ui/textarea';
import SocialsData from '@/data/socials.json';
import { Facebook, Github, Instagram, Linkedin } from 'lucide-react';

interface Social {
  id: string;
  name: string;
  link: string;
}

const Contact = () => {
  return (
    <div className="md:max-w-[80%] mx-auto p-2 my-5">
      <div className="my-8">
        <TypeAnimation
          sequence={[`Let's get in touch !`, 1000, '', 1000]}
          wrapper="span"
          speed={20}
          style={{
            fontSize: '3em',
            display: 'inline-block',
            fontWeight: 700,
          }}
          repeat={Infinity}
        />
      </div>
      <div className="md:flex">
        <form action="" className="md:w-1/2 flex flex-col gap-y-5 ">
          <Input placeholder="Enter your name" />
          <Input placeholder="Enter your email" />
          <Textarea placeholder="Enter your message" />
          <div>
            <Button size="sm" variant="retro">
              Submit
            </Button>
          </div>
        </form>
        <div className="md:w-1/2 md:mx-10 py-10 md:py-3 md:pt-0">
          <p className="text-lg">
            {`Feel free to reach out and connect! Whether you have a project in
            mind, want to discuss collaboration opportunities, or just want to
            say hello, I'm always open to new conversations. Let's build
            something amazing together.`}
          </p>

          <ul className="my-10 list-disc [&>li]:mt-2">
            {SocialsData.data.map((social: Social) => (
              <a
                href={social.link}
                target="_blank"
                key={social.id}
                className="flex gap-x-2 mb-5 items-center"
              >
                {social.name === 'Facebook' && <Facebook size={18} />}
                {social.name === 'Instagram' && <Instagram size={18} />}
                {social.name === 'Github' && <Github size={18} />}
                {social.name === 'Linkedin' && <Linkedin size={18} />}

                <li className="list-none font-bold text-lg">
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
