'use client';
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Terminal } from 'lucide-react';
import { Switch } from '@/components/ui/switch';
import { useTheme } from 'next-themes';

interface NavItem {
  name: string;
  href: string;
}

export default function Navbar({ navData }: { navData: Array<NavItem> }) {
  const pathname = usePathname();
  const { setTheme, theme } = useTheme();

  return (
    <div className=" mb-16">
      <nav className="fixed top-0 left-0 bg-background  w-full flex justify-center py-3 md:text-lg shadow">
        <Terminal className="w-[25%]" />
        <div className=" ">
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
        </div>
        <div className="w-[25%] flex justify-end items-center mr-3">
          <Switch
            onClick={() => {
              if (theme === 'light') {
                return setTheme('dark');
              } else return setTheme('light');
            }}
          />
        </div>
      </nav>
    </div>
  );
}
