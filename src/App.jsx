import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; 
import { useState, useEffect } from "react";
// components
import Header from "./components/header/header";
import Footer from "./components/footer/Footer";
// pages
import Home from "./pages/home/Home";
import Math from "./pages/math/Math";
import Science from "./pages/science/Science";
import Elementary from "./pages/math/Elementary/Elementary";
import AddSub from "./pages/math/Elementary/AddSub";
import Interactive from "./pages/math/Interactive/Interactive";
import Grade6 from "./pages/math/Interactive/Grade6";
import Conventional from "./pages/math/conventional/Conventional";
import Grade6c from "./pages/math/conventional/Grade6";
import ComingSoon from "./pages/comingsoon/comingsoon";
import ContactPage from "./pages/contact/contact";

function App() {
  // State for theme
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  // Apply theme when component mounts or theme changes
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  // Toggle theme function
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <>
      <Router>
        <Header toggleTheme={toggleTheme} theme={theme} />
        <Routes> 
          <Route path='/' element={<Home />} />
          <Route path='comingsoon' element={<ComingSoon />} />
          <Route path='/math' element={<Math />} />
          <Route path='/science' element={<ComingSoon />} />
          <Route path='/english' element={<ComingSoon />} />
         
          {/* Elementary Categories */}
          <Route path="/math/elementary" element={<Elementary />} />
          <Route path="/math/elementary/addsub" element={<AddSub />} />
          <Route path="/math/elementary/Geometry" element={<ComingSoon />} />
          <Route path="/math/elementary/Multiplication" element={<ComingSoon />} />
          <Route path="/math/elementary/Time" element={<ComingSoon />} />
          <Route path="/math/interactive" element={<Interactive />} />
          <Route path="/math/interactive/Grade6" element={<Grade6 />} />
          <Route path="/math/conventional" element={<Conventional />} />
          <Route path="/math/conventional/grade6" element={<Grade6c />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
