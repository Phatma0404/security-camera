// Layout.jsx
import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";


const Layout = () => {
  return (
    <>
      <Navbar />
      <main>
        <Outlet /> {/* Burada route-specific content göstəriləcək */}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
