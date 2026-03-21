import type { Metadata } from "next";
import { Space_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import StarsBackground from "@/components/StarsBackground";

const spaceMono = Space_Mono({ 
  weight: ['400', '700'],
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
    <html lang="en">
      <body className={`${spaceMono.className} min-h-screen relative overflow-x-hidden`}>
        <div className="fixed inset-0 z-[-2] min-h-screen bg-background bg-grid" />
        <StarsBackground />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
