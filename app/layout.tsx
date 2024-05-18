import type { Metadata } from "next";
import "./globals.css";
import { Alegreya } from "next/font/google";
import NavData from "@/data/nav.json";
import Navbar from "@/components/layout/Navbar";
import { ThemeProvider } from "@/components/layout/ThemeProvider";

const alegreya = Alegreya({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Phyu Sin Khant Aung | Software Engineer",
  description:
    "Welcome to my portfolio! I am a passionate full-stack web developer specializing in building responsive and visually appealing web applications. Explore my projects, which showcase my expertise in Node.js, Javascript, Typescript, and other cutting-edge technologies. Let's connect and bring your ideas to life!",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${alegreya.className}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <main className="mt-20 px-4">
            <Navbar navData={NavData.data} />

            {children}

            <footer className="float-end h-5 w-full">
              <hr />
              <span className="mx-auto flex items-center justify-center py-6 text-muted-foreground">
                Made by Phyu Sin © 2023
              </span>
            </footer>
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
