import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ScrollToTop from "./ScrollToTop";
import ScrollToTopButton from "./ScrollToTopButton";
import CartDrawer from "./CartDrawer";

const Layout = () => {
  return (
    <>
      <Navbar />
      <ScrollToTop />
      <main>
        <Outlet />
      </main>
      <Footer />
      <ScrollToTopButton />
      <CartDrawer />
    </>
  );
};

export default Layout;
