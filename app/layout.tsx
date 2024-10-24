"use client"
import React from "react";
import { Inter } from "next/font/google";
import "./globals.css";
import { usePathname } from 'next/navigation';
import { useRouter } from "next/navigation";
import AsideMenu from "./Components/Aside/Aside";
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const router = useRouter();



  return (
    <html lang="en">
      <head></head>
      <body className={inter.className}>
        <div>
          <AsideMenu />
        </div>
        <div className="content">
          {children}
        </div>
      </body>
    </html>
  );
}
