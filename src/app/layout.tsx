import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import LeftSidebar from "./left-sidebar";
import { Icon } from "../components/Icon";
import RightSidebar from "./right-sidebar";
import Header from "./header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Admin Dashboard UI",
  description: "Admin Dashboard UI - Clean & Responsive Layout",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full flex">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-forground flex-1 flex`}
      >
        <LeftSidebar />
        <main className="flex-1 flex flex-col border-x-1 border-forground/10">
          <Header />
          <div className="px-6 py-5 flex items-center h-16 border-t-1  border-forground/10">
            <div className="text-lg font-semibold">Overview</div>
            <div className="flex-1"></div>
            <div> <Menu /></div>
          </div>
          <div className="flex-1 flex flex-col px-6 overflow-auto">{children}</div>
        </main>
        <RightSidebar />
      </body>
    </html>
  );
}


function Menu() {
  return (
    <button className="flex  flex-col items-start px-2 py-1">
      <div className="flex gap-1 items-center">
        <span className="select-none">Today</span>
        <Icon classname="text-forground/40 pt-1" icon="GoChevronDown" />
      </div>
    </button>
  )
}