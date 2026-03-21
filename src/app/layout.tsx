import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import StarsBackground from "@/components/StarsBackground";
import { Inter } from "next/font/google";
import CometCursor from "@/components/CometCursor";
import Loader from "@/components/Loader";

const jetbrainsMono = JetBrains_Mono({ 
  weight: ['400', '500', '700', '800'],
  subsets: ["latin"],
});
const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Piyush Sengar - Portfolio",
  description: "Full-stack developer portfolio built with Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                if (localStorage.theme === 'dark' || !('theme' in localStorage)) {
                  document.documentElement.classList.add('dark')
                } else {
                  document.documentElement.classList.remove('dark')
                }
              } catch (_) {}
            `,
          }}
        />
      </head>
      <body className={`${jetbrainsMono.className} min-h-screen relative overflow-x-hidden bg-white text-black dark:bg-[#000000] dark:text-white transition-colors duration-500`}>
        <Loader />
        <CometCursor />
        <StarsBackground />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
