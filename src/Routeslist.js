import React from "react";
import {
  // BrowserRouter,
  Routes,
  Route,
  HashRouter
}from "react-router-dom";

import Footer from "./Footer";
import Navigation from "./Navigation";
import Home from "./Home";
import About from "./About";
import Services from "./Services";
import Library from "./Library";
import Contact from "./Contact";

export default function Routeslist(){

  return (
    <div>
      <HashRouter>
        <Navigation/>
        <Routes>
          <Route path="/Navigation" element={<Navigation/>} />
          <Route path="/" element={<Home/>} />
          <Route path="/About" element={<About/>} />
          <Route path="/Services" element={<Services/>} />
          <Route path="/Library" element={<Library/>} />
          <Route path="/Contact" element={<Contact/>} />
          <Route path="/Footer" element={<Footer/>} />
        </Routes>
        <Footer/>
      </HashRouter>
    </div>
  )
}