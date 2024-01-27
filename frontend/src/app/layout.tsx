import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';

import "./globals.css";

import { cn } from "../lib/utils";

// const inter = Inter({ subsets: ["latin"], variable: "--font-geist-sans" });

export const metadata: Metadata = {
  title: "NutriPack",
  description: "Sustainable nutrition starts here",
  icons: "/wolf-face.png"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn("min-h-screen bg-background antialiased", GeistSans.className)}>
        {children}
      </body>
    </html>
  );
}
