import React from "react";
import { BrowserRouter, Routes, Route, Router, Link } from "react-router-dom";
import Home from "./home";
import Login from "./Login";
import Courses from "./Courses";



function Header() {
  return (
    <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/courses" element={<Courses/>} />
            <Route path="/login" element={<Login/>} />
          </Routes>
    </BrowserRouter>
  );
};



export default Header;
