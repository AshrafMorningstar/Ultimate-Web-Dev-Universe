/*
 Copyright (c) 2026 Ashraf Morningstar
 These are personal recreations of existing projects, developed by Ashraf Morningstar
 for learning and skill development.
 Original project concepts remain the intellectual property of their respective creators.
 Repository: https://github.com/AshrafMorningstar
*/

import React from "react";
import Head from "next/head";
import Navbar from "./Navbar";
import { Footer } from ".";
export const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Head>
        <title>SAS Group Store</title>
      </Head>
      <header>
        <Navbar />
      </header>
      <main className="main-container">{children}</main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};
export default Layout;
