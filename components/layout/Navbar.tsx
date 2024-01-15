"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Code2 } from "lucide-react";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";

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
    <div className="fixed left-0 top-0 w-full bg-background p-3 shadow">
      <motion.nav
        initial="hidden"
        animate="visible"
        variants={fadeInVariants}
        transition={{ duration: 1 }}
        className="mx-auto flex w-full items-center justify-between md:text-lg xl:max-w-[80%]"
      >
        <Code2 />
        <ul className="flex gap-x-10 md:gap-x-24">
          {navData?.map((item: NavItem) => (
            <li key={item.name}>
              <Link
                href={item.href}
                className={`hover:underline ${
                  pathname === item.href && "underline"
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
              if (theme === "light") {
                return setTheme("dark");
              } else return setTheme("light");
            }}
            type="checkbox"
            className="toggle hidden"
          />
          <span
            className='
          slider dark:border-#c8cace
          absolute
         inset-0
          box-border
           cursor-pointer
           rounded-[5px]
           border-2
            border-solid
             border-black bg-background
               shadow-[2px_2px_#2d323d]
               transition-[0.3s] before:absolute before:-left-0.5
               before:bottom-0.5 before:box-border before:h-5
               before:w-5 before:rounded-[5px] before:border-2
                before:border-solid 
                before:border-black
                before:bg-background
                before:shadow-[0_1px_0_#2d323d]
                 before:transition-[0.3s]
                  before:content-[""] dark:border-[#c8cace]
                   dark:shadow-[2px_2px_#c8cace] before:dark:border-[#c8cace]
                    before:dark:shadow-[0_1px_0_#c8cace]'
          ></span>
        </label>
      </motion.nav>
    </div>
  );
}
