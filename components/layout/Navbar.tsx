'use client';
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Code2 } from 'lucide-react';
import { useTheme } from 'next-themes';
import { motion } from 'framer-motion';

interface NavItem {
  name: string;
  href: string;
}

const fadeInVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
  },
};

export default function Navbar({ navData }: { navData: Array<NavItem> }) {
  const pathname = usePathname();
  const { setTheme, theme } = useTheme();

  return (
    <div className="w-full p-3 fixed top-0 left-0 shadow bg-background">
      <motion.nav
        initial="hidden"
        animate="visible"
        variants={fadeInVariants}
        transition={{ duration: 1 }}
        className="xl:max-w-[80%] mx-auto flex justify-between items-center w-full md:text-lg"
      >
        <Code2 />
        <ul className="flex gap-x-10 md:gap-x-24">
          {navData?.map((item: NavItem) => (
            <li key={item.name}>
              <Link
                href={item.href}
                className={`hover:underline ${
                  pathname === item.href && 'underline'
                }`}
                scroll={true}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        <label className="switch">
          <input
            onClick={() => {
              if (theme === 'light') {
                return setTheme('dark');
              } else return setTheme('light');
            }}
            type="checkbox"
            className="toggle hidden"
          />
          <span
            className='
          slider box-border
          bg-background
         dark:shadow-[2px_2px_#c8cace]
          before:bg-background
           border-black
           dark:border-[#c8cace]
           dark:border-#c8cace
            shadow-[2px_2px_#2d323d]
             absolute cursor-pointer
               transition-[0.3s]
               rounded-[5px] border-2 border-solid
               inset-0 before:box-border before:absolute
               before:content-[""] before:h-5 before:w-5
                before:border-black 
                before:dark:border-[#c8cace]
                before:shadow-[0_1px_0_#2d323d]
                before:dark:shadow-[0_1px_0_#c8cace]
                 before:transition-[0.3s]
                  before:rounded-[5px] before:border-2
                   before:border-solid before:-left-0.5
                    before:bottom-0.5'
          ></span>
        </label>
      </motion.nav>
    </div>
  );
}
