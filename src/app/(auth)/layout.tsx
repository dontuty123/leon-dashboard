"use client";

import { Inter } from "next/font/google";
import "@/app/globals.css";
import Head from "next/head";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AppProvider } from "@/context/app.context";
import { CookiesProvider } from "react-cookie";
import AuthRedirect from "./AuthRedirect";

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
          <div className="bg-gray-100">
            <AppProvider>
              <AuthRedirect>{children}</AuthRedirect>
            </AppProvider>
            <ToastContainer autoClose={1000} />
          </div>

          <script
            src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.8.1/flowbite.min.js"
            async
          ></script>
        </CookiesProvider>
      </body>
    </html>
  );
}
