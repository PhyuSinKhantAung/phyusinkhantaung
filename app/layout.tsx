import type { Metadata } from 'next';
import './globals.css';
import { Alegreya } from 'next/font/google';
import NavData from '@/data/nav.json';
import Navbar from '@/components/layout/Navbar';
import { ThemeProvider } from '@/components/layout/ThemeProvider';

export const montserrat = Alegreya({
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'My Portfolio',
  description: 'This site will show about me.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} text-sm `}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar navData={NavData.data} />

          {children}
        </ThemeProvider>
        <footer>
          <hr />
          <span className="text-muted-foreground flex justify-center items-center h-40">
            Made by Phyu Sin © 2023
          </span>
        </footer>
      </body>
    </html>
  );
}
