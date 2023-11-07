import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Service from "./Pages/Service/Service";
import Menu from "./Pages/Menu/Menu";
import Contact from "./pages/Contact/Contact";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <>  
    <Home/>
      <BrowserRouter>
        <div className="">
          <Navbar />
          <Routes>
            <Route index={true} element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="service" element={<Service />} />
            <Route path="menu" element={<Menu />} />
            <Route path="contact" element={<Contact />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
