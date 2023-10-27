"use client";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/app/globals.css";
import Footer from "@/components/Footer";
import SideBar from "@/components/SideBar";
import Navbar from "@/components/Navbar";
import Head from "next/head";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AppProvider } from "@/context/app.context";
import dynamic from "next/dynamic";
import { CookiesProvider } from "react-cookie";

const DynamicHeader = dynamic(() => import("@/components/Header"), {
  ssr: false,
});

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.8.1/flowbite.min.css"
          rel="stylesheet"
        />
      </Head>

      <body className={inter.className}>
        <CookiesProvider>
          <div className="flex text-black">
            <div className="flex-1 shadow-lg">
              <SideBar />
            </div>
            <div className="flex-5">
              <div className="relative bg-gray-200">
                <Navbar />
                {/* Header */}
                <DynamicHeader />
                <div className="px-14 mx-auto w-full -mt-20 min-h-[55vh]">
                  <AppProvider>{children}</AppProvider>
                </div>
                <ToastContainer autoClose={1000} />

                <Footer />
              </div>
            </div>
          </div>

          <script
            src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.8.1/flowbite.min.js"
            async
          />
        </CookiesProvider>
      </body>
    </html>
  );
}
