import './App.css';
import React from 'react';
import Header from './components/Header';
import MainSection from './components/MainSection';
import Footer from './components/Footer';
import { BrowserRouter, Routes, Route } from'react-router-dom';
import Courses from './components/Courses';
import Login from './components/Login';
import Home from './components/home';
const styles = {
  header: { display: "flex", justifyContent: "space-between", padding: "10px", backgroundColor: "#003366", color: "white" },
  link: { margin: "0 10px", color: "white", textDecoration: "none" }
};


function App() {
  return (
    <div>
      <img src={"logo.jpg"} className='logo' alt="Logo" />
      <BrowserRouter>
      <header style={styles.header}>
          <Routes>
            <Route path="/" element={Home} />
            <Route path="/components/Courses" element={Courses} />
            <Route path="/components/Login" element={Login}/>
          </Routes>
      </header>
    </BrowserRouter>
      <Header />
      <MainSection />
      <Footer />
    </div>
    
  );
}

export default App;
