import React from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
interface AuthLayoutProps {
  children: React.ReactNode;
  title: string;
}

const GlobalInit = dynamic(() => import("./GlobalInit"), { ssr: false });

const AuthLayout: React.FC<AuthLayoutProps> = ({ title, children }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <>{children}</>
      <GlobalInit />
    </>
  );
};

export default AuthLayout;
