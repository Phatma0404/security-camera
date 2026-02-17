import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import BlogPost from "./pages/BlogPost";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Layout from "./components/Layout";
// import ContactCTA from "./pages/ContactCTA";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="blog" element={<Blog />} />
            {/* <Route path="/contactUs" element={<ContactCTA />} /> */}
            <Route path="/blog/:blogId" element={<BlogPost />} />
            <Route path="/contactUs" element={<Contact />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
