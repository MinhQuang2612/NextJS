import React from "react";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import Header from "./Header";
import Head from "next/head";
import dynamic from "next/dynamic";
interface DashboardLayoutProps {
  children: React.ReactNode;
  title: string;
}


const GlobalInit = dynamic(() => import("./GlobalInit"), { ssr: false });

export default function DashboardLayout({ title, children }: DashboardLayoutProps) {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <>
        <div className="flex grow">
          <Sidebar />
          <div className="wrapper flex grow flex-col">
            <Header />
            <main className="grow content pt-5" id="content" role="content">{children}</main>
            <Footer />
          </div>
        </div>
      </>
      <GlobalInit />
    </>
  );
}
