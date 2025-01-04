import React from "react";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import Header from "./Header";
import Head from "next/head";
import dynamic from "next/dynamic";
import { useEffect } from "react";
import { useRouter } from "next/router";
interface DashboardLayoutProps {
  children: React.ReactNode;
  title: string;
}


const GlobalInit = dynamic(() => import("./GlobalInit"), { ssr: false });

export default function DashboardLayout({ title, children }: DashboardLayoutProps) {

  const [userData, setUserData] = React.useState(null);
  const router = useRouter();

  useEffect(() => {
    const authToken = localStorage.getItem("authToken");

    const authData = JSON.parse(localStorage.getItem("authData") || "{}");
    setUserData(authData);

    if (!authToken) {
      router.push("/auth/signin");
    }
  }, [router]);


  const handleLogout = () => {
    const userConfirmed = confirm("Bạn có chắc chắn muốn đăng xuất?");
    if (userConfirmed) {
      localStorage.removeItem("authToken");
      router.push("/auth/signin"); 
    }
  };

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
        <div className="flex grow">
          <Sidebar />
          <div className="wrapper flex grow flex-col">
            <Header onLogout={handleLogout} user={userData} />
            <main className="grow content pt-5" id="content" role="content">{children}</main>
            <Footer />
          </div>
        </div>
      <GlobalInit />
    </>
  );
}
