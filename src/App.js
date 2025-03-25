import './App.css';
import React from 'react';
import Header from './components/Header';
import MainSection from './components/MainSection';
import Footer from './components/Footer';
import logo from './logo.jpg';


function App() {
  return (
    <div>
      <img src={logo}  alt="Logo" className="logo" />
      <Header />
      <MainSection />
      <Footer />
    </div>
    
  );
}

export default App;
