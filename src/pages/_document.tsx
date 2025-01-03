import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html className="h-full" data-theme="true" data-theme-mode="light" dir="ltr" lang="en">
      <Head />
      <body className="antialiased flex h-full demo1 sidebar-fixed header-fixed text-base text-gray-700 dark:bg-coal-500">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
