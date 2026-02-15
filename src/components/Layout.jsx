// Layout.jsx
import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ScrollToTop from "./ScrollToTop";


const Layout = () => {
  return (
    <>
      <Navbar />
      <ScrollToTop />
      <main>
        <Outlet /> {/* Burada route-specific content göstəriləcək */}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
