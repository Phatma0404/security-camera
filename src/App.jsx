import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import BlogPost from "./pages/BlogPost";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import FAQPage from "./pages/FAQPage";
import About from "./pages/About";
import Services from "./pages/Services";
import Layout from "./components/Layout";
import { LanguageProvider } from "./context/LanguageContext";
import { CartProvider } from "./context/CartContext";

function App() {
  return (
    <LanguageProvider>
      <CartProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="blog" element={<Blog />} />
              <Route path="/blog/:blogId" element={<BlogPost />} />
              <Route path="/products" element={<Products />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/faq" element={<FAQPage />} />
              <Route path="/aboutUs" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/contactUs" element={<Contact />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </LanguageProvider>
  );
}

export default App;
