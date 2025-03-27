import React from "react";
import { BrowserRouter, Routes, Route, Router, Link } from "react-router-dom";
import Home from "./home";
import Login from "./Login";
import Courses from "./Courses";
import logo from '../logo.jpg';


function Header() {
  return (
    <div>
      <header>
      <img src={logo}  alt="Logo" className="logo" />
        <h1>LMS - Learning Management System</h1>
        </header>
    <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/courses" element={<Courses/>} />
            <Route path="/login" element={<Login/>} />
          </Routes>
    </BrowserRouter>
    </div>
  );
};



export default Header;
