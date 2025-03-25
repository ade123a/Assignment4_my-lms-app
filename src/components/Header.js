import React from "react";
import { BrowserRouter, Routes, Route, Router, Link } from "react-router-dom";
import home from "./components/home";
import login from "./Login";
import courses from "./components/Courses";



function Header() {
  return (
    <BrowserRouter>
      <header style={styles.header}>
          <Routes>
            <Route path="/" element={<home/>} />
            <Route path="/courses" element={<courses/>} />
            <Route path="/login" element={<login/>} />
          </Routes>
      </header>
    </BrowserRouter>
  );
};

const styles = {
  header: { display: "flex", justifyContent: "space-between", padding: "10px", backgroundColor: "#003366", color: "white" },
  link: { margin: "0 10px", color: "white", textDecoration: "none" }
};

export default Header;
