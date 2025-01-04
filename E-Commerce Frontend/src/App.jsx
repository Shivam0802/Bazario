import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./Components/scrollToTop";
import Homepage from "./Pages/homepage";
import Aboutpage from "./Pages/aboutpage";
import Registerpage from "./Pages/registerpage";
import Faqpage from "./Pages/faq";
import Blogpage from "./Pages/blogpage";
import Blog from "./Components/blog";
import ContactPage from "./Pages/contactpage";
import Loginpage from "./Pages/loginpage";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<Aboutpage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/faq" element={<Faqpage />} />
        <Route path="/blog" element={<Blogpage />} />
        <Route path="/blog/:id/:title" element={<Blog />} />
        <Route path="/register" element={<Registerpage />} />
        <Route path="/login" element={<Loginpage />} />
      </Routes>
    </Router>
  );
}

export default App;
