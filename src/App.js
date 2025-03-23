import './App.css';
import React from 'react';
import Header from './Header';
import MainSection from './MainSection';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      
      <header>
        <img src="logo.jpg" alt="LMS Logo" style="width: 100px; height: 100px" />
        <h1>LMS - Learning Management System</h1>
      </header>

      
      
      <Header />
      <MainSection />
      <Footer />
</div>
    
  );
}

export default App;
