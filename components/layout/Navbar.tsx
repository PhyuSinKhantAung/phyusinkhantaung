"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Code2 } from "lucide-react";
import { Button } from "../ui/button";
import DarkModeSwitch from "../ui/ToggleSwitch/dark-mode-switch";
import { cn } from "@/lib/utils";

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
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <div
      className={cn(
        "fixed left-0 top-0 z-50 mb-10 w-full overflow-hidden bg-background p-4 shadow",
      )}
    >
      <nav className=" mx-auto flex w-full max-w-screen-2xl items-center justify-between xl:text-lg">
        <Code2 />

        <div className="hidden items-center gap-x-5 xl:flex">
          <ul className="mx-14  flex gap-x-14">
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
        </div>

        <div className="hidden xl:flex">
          <DarkModeSwitch />
        </div>

        <Button
          onClick={() => {
            setIsOpen(!isOpen);
          }}
          variant={"retro"}
          size={"sm"}
          className="p-1 xl:hidden"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-menu"
          >
            <line x1="4" x2="20" y1="12" y2="12" />
            <line x1="4" x2="20" y1="6" y2="6" />
            <line x1="4" x2="20" y1="18" y2="18" />
          </svg>
        </Button>
      </nav>

      <div
        className={cn("hidden", {
          "fixed left-0 top-0 z-50 block h-screen w-screen overflow-hidden bg-background":
            isOpen,
        })}
      >
        <Button
          size={"sm"}
          variant={"retro"}
          onClick={() => setIsOpen(false)}
          className="float-end m-4 p-1 lg:mx-6 lg:my-5"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-x"
          >
            <path d="M18 6 6 18" />
            <path d="m6 6 12 12" />
          </svg>
        </Button>
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <ul className="mx-14 flex flex-col items-center justify-center gap-y-10">
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
        </div>
      </div>
    </div>
  );
}
