import React from "react";
import "../styles/globals.scss";
import Head from "next/head";

function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Portfolio</title>
      </Head>
      <body>{children}</body>
    </html>
  );
}

export default RootLayout;
