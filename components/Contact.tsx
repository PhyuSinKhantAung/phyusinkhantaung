'use client';
import React, { useState } from 'react';
import { TypeAnimation } from 'react-type-animation';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { Textarea } from './ui/textarea';
import SocialsData from '@/data/socials.json';
import { Facebook, Github, Instagram, Linkedin } from 'lucide-react';
import { send } from 'emailjs-com';
import { useToast } from '@/components/ui/use-toast';
import { Toaster } from './ui/toaster';
import { motion } from 'framer-motion';
import { globalVariants } from '@/animation';

interface Social {
  id: string;
  name: string;
  link: string;
}

const Contact = () => {
  const [data, setData] = useState({
    name: '',
    message: '',
    reply_to: '',
  });
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: any) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const onSubmit = (e: any) => {
    e.preventDefault();
    setIsLoading(true);
    send('service_h7ssxov', 'template_keplteb', data, 'nz8rtf2Y9zk38r7GJ')
      .then((response) => {
        toast({
          description: '✅  Your email has been sent.',
        });
        setData({
          name: '',
          message: '',
          reply_to: '',
        });
        setIsLoading(false);
        console.log('success', response.status, response.text);
      })
      .catch((error) => {
        setIsLoading(false);
        console.log('failed', error);
        toast({
          variant: 'destructive',
          description: 'Something went wrong!',
        });
      });
  };
  return (
    <motion.div
      variants={globalVariants.containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="md:max-w-[80%] mx-auto p-1"
    >
      <Toaster />

      <div className="mb-8 mt-4 lg:my-8">
        <TypeAnimation
          sequence={[`Let's get in touch !`, 1000, '', 1000]}
          wrapper="span"
          speed={20}
          style={{
            fontSize: '3em',
            display: 'inline-block',
            fontWeight: 700,
            transition: 'ease-in',
          }}
          repeat={Infinity}
        />
      </div>
      <div className="md:flex">
        <form onSubmit={onSubmit} className="md:w-1/2 flex flex-col gap-y-5 ">
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
              {isLoading ? 'Submitting...' : 'Submit'}
            </Button>
          </div>
        </form>

        <div className="md:w-1/2 md:mx-10 py-10 md:py-3 md:pt-0">
          <p className="text-lg">
            {`Feel free to reach out and connect! Whether you have a project in
            mind, want to discuss collaboration opportunities, or just want to
            say hello, just directly email me at `}

            <a
              href="mailto:rollyphyusinkhant7290@gmail.com"
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
    </motion.div>
  );
};

export default Contact;
