import type { Metadata } from "next";
import "./globals.css";
import { Montserrat } from "next/font/google";
import NavData from "@/data/nav.json";
import Navbar from "@/components/layout/Navbar";
import { ThemeProvider } from "@/components/layout/ThemeProvider";

export const montserrat = Montserrat({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "My Portfolio",
  description: "This site will show about me.",
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
      </body>
    </html>
  );
}
