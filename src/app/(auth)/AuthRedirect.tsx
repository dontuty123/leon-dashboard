import { AppProvider } from "@/context/app.context";
import React from "react";
import { ToastContainer } from "react-toastify";
import { useCookies } from "react-cookie";
import { useRouter } from "next/navigation";

export default function AuthRedirect({
  children,
}: {
  children: React.ReactNode;
}) {
  const [cookie] = useCookies();
  const router = useRouter();

  if (cookie.user) {
    router.push("/");
  }
  return (
    <div className="bg-gray-100">
      <AppProvider>{children}</AppProvider>
      <ToastContainer autoClose={1000} />
    </div>
  );
}
