import { Routes, Route, useLocation } from "react-router-dom";
//importing react slick slider
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { animateScroll } from "react-scroll";

import NavBar from "./components/organs/NavBar";
import Home from "./components/pages/Home";
import { useEffect } from "react";
import Footer from "./components/organs/Footer";
import UnderConstruction from "./components/organs/UnderConstruction";
import Products from "./components/pages/Products";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";

function App() {
  const directory = useLocation();
  const MAINTENANCE = false;

  useEffect(() => {
    animateScroll.scrollToTop({
      duration: 0,
    });
  }, [directory.pathname]);

  return (
    <div className="w-full bg-slate-900 text-gray-50 font-poppins">
      {MAINTENANCE ? (
        <UnderConstruction />
      ) : (
        <>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/:name" element={<Products />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
