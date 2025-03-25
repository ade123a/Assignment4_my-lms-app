import React from "react";
import { BrowserRouter, Routes, Route, Router, Link } from "react-router-dom";

const Header = () => {
  return (
    <BrowserRouter>
      <header style={styles.header}>
          <Routes>
            <Route path="/" element={<a href="/" style={styles.link}>Home</a>} />
            <Route path="/courses" element={<a href="/courses" style={styles.link}>Courses</a>} />
            <Route path="/login" element={<a href="/login" style={styles.link}>Login</a>} />
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
