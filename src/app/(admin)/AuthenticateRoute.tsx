import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import SideBar from "@/components/SideBar";
import { AppProvider } from "@/context/app.context";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
import React from "react";
import { useCookies } from "react-cookie";
import { ToastContainer } from "react-toastify";

const DynamicHeader = dynamic(() => import("@/components/Header"), {
  ssr: false,
});

export default function AuthenticateRoute({
  children,
}: {
  children: React.ReactNode;
}) {
  const [cookie] = useCookies();
  const router = useRouter();

  if (cookie.user == null) {
    router.push("/login");
  }

  return (
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
  );
}
