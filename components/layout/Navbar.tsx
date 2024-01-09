'use client';
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Code2 } from 'lucide-react';
import { Switch } from '@/components/ui/switch';
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

        <Switch
          onClick={() => {
            if (theme === 'light') {
              return setTheme('dark');
            } else return setTheme('light');
          }}
        />

        <div className="flex items-center cursor-pointer relative">
          <input type="checkbox" className="opacity-0 w-0 h-0" />
          <span className="box-border rounded-md border-2 border-solid dark:border-[#c8cace] border-black shadow-[6px_6px_#2d323d] dark:shadow-[6px_6px_#c8cace] absolute top-0 left-0 right-0 bottom-0 cursor-pointer "></span>
        </div>
      </motion.nav>
    </div>
  );
}
