"use client";

import { Inter } from "next/font/google";
import "@/app/globals.css";
import Head from "next/head";
import "react-toastify/dist/ReactToastify.css";
import { CookiesProvider } from "react-cookie";
import AuthenticateRoute from "./AuthenticateRoute";

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
          <AuthenticateRoute>{children}</AuthenticateRoute>

          <script
            src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.8.1/flowbite.min.js"
            async
          />
        </CookiesProvider>
      </body>
    </html>
  );
}
